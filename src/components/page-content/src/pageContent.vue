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

    <page-dialog
      ref="pageDialogRef"
      :pageDialogConfig="pageDialogConfig"
      :data="pageData"
      @dialogResearch="dialogResearch"
      @handleVisibleChange="handleVisibleChange"
    ></page-dialog>
  </div>
</template>
<script lang="ts">
// import
import { computed, defineComponent, PropType, ref } from 'vue'
import { useStore } from '@/store'
// 定义 listData的 类型 => {list:any[],count:number}
import { IListData } from './type'

import { ITableConfig } from '@/baseui/tabel/src/type'
import { pageDialogConfig } from '@/views/main/system/user/config/pageDialogConfig'
import jxlstable from '@/baseui/tabel/src/table.vue'
import pageDialog from '@/components/page-dialog'

import { mapName, day } from '@/utils'

export default defineComponent({
  name: 'page-content',
  emits: ['handleRegester', 'handleVisibleChange'],
  components: { jxlstable, pageDialog },
  props: {
    pageContentConfig: {
      type: Object as PropType<ITableConfig>,
      required: true
    },
    listData: {
      type: Object as PropType<IListData>,
      required: true
    },
    pageDialogConfig: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, content) {
    const store = useStore()
    const pageData = ref<any>({})
    const pageDialogRef = ref<InstanceType<typeof pageDialog>>()
    const name = ref(mapName.page(props.pageContentConfig.pageName))
    // 这是在哪一页
    const page = ref(1)
    // 单页显示 的个数
    const pageSize = ref(10)
    // 总个数 是从 listdata中去取的
    const itemCount = computed(() => props.listData.totalCount)
    // 是否显示dialog
    const isShowDialog = ref(false)
    //<!-- -------------------------常量---------------------------- -->

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
    //<!-- -------------------------分页器的函数---------------------------- -->

    // 新建
    const handleRegester = () => {
      if (pageDialogRef.value) {
        pageDialogRef.value.dialogData = {}
        pageDialogRef.value.isShowDialog = true
      }
      dialogtype.value = 'regester'
      // store.dispatch(regesterAction,pageDialogRef.value?.dialogData)
      const passworditem = pageDialogConfig.formItems.find((pay) => {
        return pay.field === 'password'
      })
      passworditem!.isShow = true
    }
    // 下拉 监听到  pagedialog里 的下拉事件并传出
    const handleVisibleChange = (item: any) => {
      // console.log(item)
      content.emit('handleVisibleChange', item)
    }
    // 刷新~
    const handleRefresh = () => {
      store.dispatch(name.value.queryAction!)
    }

    // 监听 编辑
    const handleEdit = (item: any) => {
      if (pageDialogRef.value) {
        pageDialogRef.value.dialogData = item
        pageDialogRef.value.isShowDialog = true
      }
      dialogtype.value = 'patch'

      const passworditem = pageDialogConfig.formItems.find((pay) => {
        return pay.field === 'password'
      })
      passworditem!.isShow = false
    }
    // 监听 删除
    const handleRemove = (pay: any) => {
      store.dispatch(
        mapName.page(props.pageDialogConfig.pageName).deleteAction!,
        pay
      )
    }
    const dialogtype = ref('')
    const dialogResearch = (pay: any) => {
      const action = mapName.page(props.pageContentConfig.pageName)
      const dialogData = ref<any>({})
      props.pageDialogConfig.formItems.forEach((item: any) => {
        if (item.field === 'createAt' || item.field === 'updateAt') {
          dialogData.value[item.field] = day.format(pay[item.field])
        }
        dialogData.value[item.field] = pay[item.field]
      })
      if (dialogtype.value === 'regester') {
        store.dispatch(action.regesterAction!, dialogData.value)
        pageDialogRef.value!.isShowDialog = false
      } else if (dialogtype.value === 'patch') {
        store.dispatch(action.patchAction!, dialogData.value)
        pageDialogRef.value!.isShowDialog = false
      }
    }

    return {
      mapName,
      page,
      pageSize,
      itemCount,
      isShowDialog,
      pageData,
      dialogResearch,
      pageDialogRef,
      handlePageSize,
      handlePage,
      handleRegester,
      handleVisibleChange,
      handleRefresh,
      handleEdit,
      handleRemove
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
