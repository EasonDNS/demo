<template>
  <div class="jxlstable">
    <div>
      <slot name="tableHeader">
        <div class="table-header">
          <span> 用户列表00 </span>
          <el-button type="primary" size="medium"> 新建用户 </el-button>
        </div>
      </slot>
    </div>

    <div class="content">
      <el-table class="table" :data="listData" :border="true" @select="select">
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
          <el-table-column v-bind="item">
            <template #default="scop">
              <!-- 设置插槽 为item 的 prop 数据字段  再把 row 数据传递出去   -->
              <slot :name="item.slotName ?? item.prop" :row="scop.row">
                {{ scop.row[item.prop] }}
              </slot>
            </template>

            <template #empty> _null_ </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { ITableConfig } from './type'
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
  setup(prop, conten) {
    const select = (pay: any) => {
      // console.log(pay)
      // 监听 到选择的哪些行数据 把其发射出去  "handlerSelect" pay
      conten.emit('handlerSelect', pay)
    }
    // serial 序号
    const isShowSerial = ref(prop.tableConfig.isShowSerial ?? false)
    const isShowSecelection = ref(prop.tableConfig.isShowSecelection ?? false)
    return {
      select,
      isShowSerial,
      isShowSecelection
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
    }
  }
}
</style>
