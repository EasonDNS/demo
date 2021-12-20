<template>
  <div class="jxlstable">
    <!-- 头部 -->
    <div class="header">
      <template v-if="tableConfig.isShowHeader ?? true">
        <slot name="tableHeader">
          <strong> {{ tableConfig.pageName }}</strong>
          <div class="right">
            <el-button
              class="right-edit-btn"
              plain
              type="success"
              size="mini"
              @click="handleRegester"
            >
              <el-icon> <edit /></el-icon>新建</el-button
            >
            <el-button type="info" plain size="mini" @click="handleRefresh">
              <el-icon><refresh /></el-icon>刷新</el-button
            >
          </div>
        </slot>
      </template>
    </div>
    <!-- 中间 表格 -->
    <div class="content">
      <el-table
        class="table"
        :data="listData"
        :border="true"
        :row-style="rowStyle"
        v-bind="tableConfig.tree ?? {}"
        @select="select"
      >
        <!-- 表格第一列选择框  isShowSecelection -->
        <template v-if="isShowSecelection">
          <el-table-column
            type="selection"
            align="center"
            width="40"
          ></el-table-column>
        </template>
        <!-- 表格第二列 序号列  isShowSerial -->
        <template v-if="isShowSerial">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="35"
          ></el-table-column>
        </template>
        <!--  遍历开始  -->
        <!-- 这里tabelconfig 必须 要有 proplist  -->
        <template v-for="item of tableConfig.propList" :key="item.prop">
          <el-table-column
            v-bind="item"
            :align="item.align ?? defaultStyle.align"
            :sortable="item.sortable ?? defaultStyle.sortable"
          >
            <template #default="scop">
              <!-- 设置插槽 为item 的 prop 数据字段  再把 row 数据传递出去   -->
              <template
                v-if="item.prop === 'createAt' || item.prop === 'updateAt'"
              >
                <slot :name="item.slotName" ?? item.prop :row="scop.row">
                  {{ day.utc({ time: scop.row[item.prop] }) }}
                </slot>
              </template>
              <!-- // 操作的插槽 -->
              <template v-else>
                <slot :name="item.slotName" :row="scop.row">
                  {{ scop.row[item.prop] }}
                </slot>
              </template>
            </template>

            <template #empty> _null_ </template>
          </el-table-column>
        </template>
        <!-- 最后一列的操作列 isShowButton -->
        <template v-if="tableConfig.isShowButton ?? true">
          <el-table-column
            label="操作"
            align="center"
            width="100"
            class-name="btns"
          >
            <template #default="scop">
              <slot name="handleBtn" :row="scop.row">
                <div class="btns">
                  <el-button
                    type="primary"
                    size="mini"
                    plain
                    @click="handleEdit(scop.row)"
                  >
                    <el-icon> <Edit /> </el-icon>编辑
                  </el-button>
                  <el-button
                    type="danger"
                    size="mini"
                    plain
                    @click="handleRemove(scop.row)"
                  >
                    <el-icon> <DeleteFilled /></el-icon>删除
                  </el-button>
                </div>
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>

      <div class="footer">
        <template v-if="tableConfig.isShowFooter ?? true">
          <slot name="footer"> </slot>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { ITableConfig } from './type'

import { day } from '@/utils'

export default defineComponent({
  props: {
    tableConfig: {
      type: Object as PropType<ITableConfig>,
      required: true
    },
    listData: {
      type: Array,
      required: true
    }
  },
  emits: [
    'handlerSelect',
    'handleEdit',
    'handleRemove',
    'handleRegester',
    'handleRefresh',
    'handleSizeChange',
    'handleCurrentChange'
  ],
  // components: { jxlsDialog },
  setup(props, content) {
    const select = (pay: any) => {
      // console.log(pay)
      // 监听 到选择的哪些行数据 把其发射出去  "handlerSelect" pay
      content.emit('handlerSelect', pay)
    }
    // serial 序号
    const isShowSerial = ref(props.tableConfig.isShowSerial ?? false)
    const isShowSecelection = ref(props.tableConfig.isShowSecelection ?? false)

    const handleEdit = (row: any) => {
      content.emit('handleEdit', row)
    }
    const handleRemove = (row: any) => {
      content.emit('handleRemove', row)
    }
    // 监听头部新建
    const handleRegester = () => {
      content.emit('handleRegester')
    }
    const handleRefresh = () => {
      content.emit('handleRefresh')
    }
    const total = ref(100)
    //每页个数
    const pageSize = ref(10)
    const currentPage = ref(1)
    // size ==> 会传入每页的个数. pagesize
    const handleSizeChange = (count: number) => {
      content.emit('handleSizeChange', count)
    }
    // 当前在哪一页 == currentPage
    const handleCurrentChange = (page: number) => {
      content.emit('handleCurrentChange', page)
    }

    // 设置表格的样式 直接绑定 到每一行... 不用那个啥class
    const rowStyle = (pay: any) => {
      // 奇数行的样式
      const even = {
        background: '#e6a23c59'
        // background: '#909399'
        // background:
      }
      // 偶数行的样式
      const odd = {
        // background: '#e6a23c'
      }
      // 最后返回 作用样式
      const effect = pay.rowIndex % 2 === 0 ? even : odd

      return effect
    }
    // defaultStyle.align
    const defaultStyle = ref({
      align: 'center',
      sortable: true
    })

    return {
      isShowSerial,
      isShowSecelection,
      day,
      defaultStyle,
      total,
      pageSize,
      currentPage,
      rowStyle,
      select,
      handleEdit,
      handleRemove,
      handleRegester,
      handleRefresh,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>
<style lang="less" scoped>
.jxlstable {
  // padding-top: 10px;
  background-color: rgba(255, 166, 0, 0);
  border-radius: 10px;
  .header {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    .right {
      .el-icon {
        padding-right: 3.22px;
      }
      .right-edit-btn {
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  .content {
    .table {
      border-radius: 5px;
      box-shadow: 0 0 3px 5px rgba(0, 0, 0, 0.25);

      .btns {
        display: flex;
        .el-button {
          margin: 0;
          padding: 0;
          border: none;
          // color: rgba(0, 0, 0, 0.5);
          .el-icon {
            margin-right: 2px;
            margin-left: 2px;
            // color: rgba(0, 0, 0, 0.5);
          }
        }
      }
    }
  }
  .footer {
    margin-top: 20px;
  }
}
</style>
