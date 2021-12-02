<!-- 使用此组件 需要 传 两个 参数进来
1, tableConfig ==> 用于设定slotName和展示哪些数据
2,listData ==> 提供数据
-->
<template>
  <div class="page-content">
    <jxlstable :tableConfig="pageContentConfig" :listData="listData">
      <template #footer>
        <n-button> {{ itemCount }} </n-button>
        <n-pagination
          show-size-picker
          v-model:page="page"
          v-model:page-size="pageSize"
          :item-count="itemCount"
          :page-sizes="[10, 20, 30]"
          :on-update:page-size="handlePageSize"
          :on-update:page="handlePage"
        />
      </template>
    </jxlstable>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    listData: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const name = ref(mapName.footerData(props.pageContentConfig.pageName))
    // 这是在哪一页
    console.log(name.value)
    const page = ref(1)
    // 单页显示 的个数
    const pageSize = ref(20)
    // 总个数

    const itemCount = ref(
      mapName.footerData(props?.pageContentConfig?.pageName).total
    )
    const handlePageSize = (pagesize: number) => {
      console.log(pagesize)
      const b = mapName.footerData(props.pageContentConfig.pageName).total
      console.log(b)
      const a = name.value.queryAction
      if (a) {
        store.dispatch(a, { size: 2 })
      }
    }
    const handlePage = (page: number) => {
      console.log(page)
    }
    return { mapName, page, pageSize, itemCount, handlePageSize, handlePage }
  }
})
</script>
<style lang="less" scoped></style>
