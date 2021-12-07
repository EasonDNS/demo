<template>
  <div class="jxlstable">
    <!-- 头部 -->
    <div>
      <slot name="tableHeader">
        <div class="table-header">
          <strong> {{ tableConfig.pageName }}</strong>
          <div class="right">
            <el-button
              type="danger"
              plain
              size="medium"
              @click="handleRegester"
            >
              <el-icon>
                <edit />
              </el-icon>
              <strong>新建</strong>
            </el-button>
            <el-button type="info" plain size="medium" @click="handleRefresh">
              <el-icon>
                <refresh />
              </el-icon>
              <strong>刷新</strong>
            </el-button>
          </div>
        </div>
      </slot>
    </div>

    <div class="content">
      <el-table
        class="table"
        :data="listData"
        :border="true"
        @select="select"
        :row-style="rowStyle"
      >
        <template v-if="isShowSecelection">
          <el-table-column type="selection" align="center"></el-table-column>
        </template>

        <template v-if="isShowSerial">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            min-width="20"
            width="50"
          ></el-table-column>
        </template>
        <!-- 这里tabelconfig 必须 要有 proplist  -->
        <template v-for="item of tableConfig.propList" :key="item.prop">
          <el-table-column v-bind="item" :show-overflow-tooltip="true">
            <template #default="scop">
              <!-- 设置插槽 为item 的 prop 数据字段  再把 row 数据传递出去   -->
              <template
                v-if="item.prop === 'createAt' || item.prop === 'updateAt'"
              >
                <slot :name="item.slotName" ?? item.prop :row="scop.row">
                  <!-- {{ scop.row[item.prop] }} -->
                  {{ day.format(day.utc({ time: scop.row[item.prop] })) }}
                </slot>
              </template>
              <!-- // 操作的插槽 -->
              <template v-else-if="item.prop === 'handleBtn'">
                <slot :name="item.slotName" :row="scop.row" label>
                  <template v-if="tableConfig.isShowButton">
                    <el-button
                      size="mini"
                      type="info"
                      @click="handleEdit(scop.row)"
                    >
                      <el-icon>
                        <Edit />
                      </el-icon>
                      编辑
                    </el-button>
                    <el-button
                      type="danger"
                      size="mini"
                      @click="handleRemove(scop.row)"
                    >
                      <el-icon> <DeleteFilled /></el-icon>
                      删除
                    </el-button>
                  </template>
                </slot>
              </template>
              <template v-else>
                <slot :name="item.slotName ?? item.prop" :row="scop.row">
                  {{ scop.row[item.prop] }}
                </slot>
              </template>
            </template>

            <template #empty> _null_ </template>
          </el-table-column>
        </template>
      </el-table>

      <div class="footer">
        <slot name="footer">
          <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            hide-on-single-page
            v-model:currentPage="currentPage"
            v-model:pageSize="pageSize"
            :page-sizes="[10, 20, 30]"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </slot>
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
    'handleEdit',
    'handleRemove',
    'handlerSelect',
    'handleRegester',
    'handleRefresh',
    'handleSizeChange',
    'handleCurrentChange'
  ],
  // components: { jxlsDialog },
  setup(prop, conten) {
    const select = (pay: any) => {
      // console.log(pay)
      // 监听 到选择的哪些行数据 把其发射出去  "handlerSelect" pay
      conten.emit('handlerSelect', pay)
    }
    // serial 序号
    const isShowSerial = ref(prop.tableConfig.isShowSerial ?? false)
    const isShowSecelection = ref(prop.tableConfig.isShowSecelection ?? false)

    const handleEdit = (row: any) => {
      conten.emit('handleEdit', row)
    }
    const handleRemove = (row: any) => {
      conten.emit('handleRemove', row)
    }
    // 监听头部新建
    const handleRegester = () => {
      conten.emit('handleRegester')
    }
    const handleRefresh = () => {
      conten.emit('handleRefresh')
    }
    const total = ref(100)
    //每页个数
    const pageSize = ref(10)
    const currentPage = ref(1)
    // size ==> 会传入每页的个数. pagesize
    const handleSizeChange = (count: number) => {
      conten.emit('handleSizeChange', count)
    }
    // 当前在哪一页 == currentPage
    const handleCurrentChange = (page: number) => {
      conten.emit('handleCurrentChange', page)
    }

    // 设置表格的样式 直接绑定 到每一行... 不用那个啥class
    const rowStyle = (pay: any) => {
      // 奇数行的样式
      const even = {
        // background: '#e6a23c'
        background: '#909399'
      }
      // 偶数行的样式
      const odd = {
        background: '#e6a23c'
      }
      // 最后返回 作用样式
      const effect = pay.rowIndex % 2 === 0 ? even : odd

      return effect
    }
    return {
      isShowSerial,
      isShowSecelection,
      day,

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
  padding-top: 20px;
  background-color: orange;
  border-radius: 10px;

  .table-header {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .content {
    padding: 10px 10px;

    .table {
      border-right: none;
      border-top: none;
      border-radius: 5px;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.3);
    }
  }
  .hander-btns {
    display: flex;
    // flex-direction: column;
    justify-content: space-around;
    .el-button {
      padding: 2px;

      margin-left: 2px;
      margin-right: 2px;
    }
  }
}
.right {
  .el-icon {
    padding-right: 5px;
  }
}

.el-button--danger {
  margin-left: 0;
}
.footer {
  margin-top: 10px;
}
</style>
