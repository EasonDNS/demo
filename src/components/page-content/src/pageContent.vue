<!-- 使用此组件 需要 传 两个 参数进来
1,tableConfig ==> 用于设定slotName和展示哪些数据
  propList: any[]
  isShowSerial?: boolean
  isShowButton?: boolean
  isShowSecelection?: boolean
  pageName?: string
  footer?: footer
2,listData ==> 提供数据  list: any[],totalCount: number

3, 发出的事件.

-->
<template>
  <div class="page-content">
    <jxlstable
      :tableConfig="pageContentConfig"
      :listData="listData.list"
      @handleRegester="handleRegester"
      @handleRefresh="handleRefresh"
      @handleEdit="handleEdit"
      @handleRemove="handleRemove"
    >
      <template #footer>
        <div class="footer">
          <n-pagination
            show-size-picker
            v-model:page="page"
            v-model:page-size="pageSize"
            :item-count="itemCount"
            :page-sizes="[10, 20, 30]"
            :on-update:page-size="handlePageSize"
            :on-update:page="handlePage"
          />
          <n-gradient-text type="info" size="16px">
            <strong>总共有</strong>
            {{ itemCount }}<strong> 条数据</strong>
          </n-gradient-text>
        </div>
      </template>
    </jxlstable>

    <el-dialog
      v-model="isShowDialog"
      :title="otherFormConfig.pageName"
      center
      :destroy-on-close="true"
      ref="dialogRef"
    >
      <page-form
        :pageFormConfig="otherFormConfig"
        :data="defaultData"
        @handleResearch="handleReSearch"
        @handleVisibleChange="handleVisibleChange"
      ></page-form>
    </el-dialog>

    <el-dialog
      v-model="isRegesterShowDialog"
      :title="otherFormConfig.pageName"
      center
      :destroy-on-close="true"
    >
      <page-form
        :pageFormConfig="otherFormConfig"
        @handleResearch="jxlsRegester"
        @handleVisibleChange="handleVisibleChange"
      ></page-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
// import
import { computed, defineComponent, PropType, ref } from 'vue'
// 定义 listData的 类型 => {list:any[],count:number}
import { IListData } from './type'
import { IForm } from '@/baseui/form/src/type'

import { ITableConfig } from '@/baseui/tabel/src/type'
import { useStore } from '@/store'
import { mapName } from '@/utils'
import jxlstable from '@/baseui/tabel/src/table.vue'
import { ElDialog } from 'element-plus'

export default defineComponent({
  name: 'page-content',
  emits: ['handleRegester', 'handleVisibleChange'],
  components: { jxlstable },
  props: {
    pageContentConfig: {
      type: Object as PropType<ITableConfig>,
      required: true
    },
    listData: {
      type: Object as PropType<IListData>,
      required: true
    },
    otherFormConfig: {
      type: Object as PropType<IForm>,
      default: () => {
        return {}
      }
    }
  },
  setup(props, content) {
    const store = useStore()
    const name = ref(mapName.page(props.pageContentConfig.pageName))
    // 这是在哪一页
    const page = ref(1)
    // 单页显示 的个数
    const pageSize = ref(10)
    // 总个数
    const isShowDialog = ref(false)
    const itemCount = computed(() => props.listData.totalCount)
    const handlePageSize = (pagesize: number) => {
      pageSize.value = pagesize
      store.dispatch(name.value.queryAction!, {
        // 如果是第一页偏移应该是 0
        offset: (page.value - 1) * pageSize.value,
        size: pageSize.value
      })
    }
    const handlePage = (pay: number) => {
      page.value = pay
      store.dispatch(name.value.queryAction!, {
        // 如果是第一页偏移应该是 0
        offset: (page.value - 1) * pageSize.value,
        size: pageSize.value
      })
    }
    const dialogRef = ref<InstanceType<typeof ElDialog>>()
    // 新建
    const handleRegester = () => {
      isRegesterShowDialog.value = true
    }
    // 监听 到 dialog 里的form的注册
    // 这里有些逻辑没有写清楚
    const jxlsRegester = (pay: any) => {
      console.log('-------------------------------')
      console.log(pay)

      console.log('-------------------------------')

      store.dispatch(
        mapName.page(props.otherFormConfig.pageName).regesterAction!,
        pay
      )
      isRegesterShowDialog.value = false
    }

    function handleReSearch(pay: any) {
      store.dispatch(
        mapName.page(props.otherFormConfig.pageName).patchAction!,
        pay
      )
      isShowDialog.value = false
      // if (!pay.id) {
      //   console.log('来到这里了 ')
      //   store.dispatch(
      //     mapName.page(props.otherFormConfig.pageName).regesterAction!,
      //     pay
      //   )
      //   isShowDialog.value = false
      // } else {
      //   store.dispatch(
      //     mapName.page(props.otherFormConfig.pageName).patchAction!,
      //     pay
      //   )
      //   isShowDialog.value = false
      // }
    }
    const handleVisibleChange = (item: any) => {
      content.emit('handleVisibleChange', item)
    }
    // 刷新~
    const handleRefresh = () => {
      store.dispatch(name.value.queryAction!)
    }
    const defaultData = ref<any>({})
    // 监听 编辑
    const handleEdit = (item: any) => {
      defaultData.value = item
      isShowDialog.value = true
    }
    // 监听 删除
    const handleRemove = (pay: any) => {
      console.log(pay)
      store.dispatch(
        mapName.page(props.otherFormConfig.pageName).deleteAction!,
        pay
      )
    }
    // 重新监听 新建
    const isRegesterShowDialog = ref(false)

    return {
      mapName,
      page,
      pageSize,
      itemCount,
      defaultData,
      isShowDialog,
      dialogRef,
      handlePageSize,
      handlePage,
      handleRegester,
      handleReSearch,
      handleVisibleChange,
      handleRefresh,
      handleEdit,
      handleRemove,
      isRegesterShowDialog,
      jxlsRegester
    }
  }
})
</script>
<style lang="less" scoped>
.page-content {
  .footer {
    display: flex;
    justify-content: right;
    align-items: center;
    .n-gradient-text {
      padding: 0 10px 0 10px;
    }
  }
}
</style>
