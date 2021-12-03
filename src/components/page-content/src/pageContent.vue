<!-- 使用此组件 需要 传 两个 参数进来
1, tableConfig ==> 用于设定slotName和展示哪些数据
2,listData ==> 提供数据
-->
<template>
  <div class="page-content">
    <jxlstable :tableConfig="pageContentConfig" :listData="listData.list">
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
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue'
// 定义 listData的 类型 => {list:any[],count:number}
import { IListData } from './type'

import { useStore } from '@/store'
import { mapName } from '@/utils'
import jxlstable from '@/baseui/tabel/src/table.vue'
export default defineComponent({
  name: 'page-content',
  components: { jxlstable },
  props: {
    pageContentConfig: {
      type: Object,
      required: true
    },

    // {list: [],totalCount:number}
    listData: {
      type: Object as PropType<IListData>,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const name = ref(mapName.page(props.pageContentConfig.pageName))
    // 这是在哪一页
    const page = ref(1)
    // 单页显示 的个数
    const pageSize = ref(10)
    // 总个数

    const itemCount = computed(() => props.listData.count)
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
    return { mapName, page, pageSize, itemCount, handlePageSize, handlePage }
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
