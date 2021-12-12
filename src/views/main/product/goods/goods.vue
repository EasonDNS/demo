<template>
  <div class="goods">
    <page-form :pageFormConfig="pageFormConfig"></page-form>
    <page-content
      :pageDialogConfig="pageDialogConfig"
      :pageContentConfig="pageContentConfig"
      :listData="listData"
    >
      <template #imgUrl="scop">
        <div class="img">
          <n-image :src="scop.row.row.imgUrl" width="60" object-fit="contain" />
        </div>
      </template>
    </page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'

import { useStore } from '@/store'

import { pageFormConfig } from './config/pageFormConfig'
import { pageContentConfig } from './config/pageContentConfig'
import { pageDialogConfig } from './config/pageDialogConfig'

import pageForm from '@/components/page-form'
import pageContent from '@/components/page-content'

export default defineComponent({
  components: { pageForm, pageContent },
  name: 'goods',
  setup() {
    const store = useStore()
    onMounted(() => store.dispatch('goodsModule/queryGoodsAction'))
    // const imgurlList = ref<string[]>([])
    const list = computed(() => store.state.goodsModule.list)
    const totalCount = computed(() => store.state.goodsModule.totalCount)
    const listData = ref({
      list,
      totalCount
    })

    // nextTick(() => {
    //   list.value.forEach((item: any) => {
    //     imgurlList.value.push(item.imgUrl)
    //   })
    // })

    // watch(list, () => {
    //   list.value.forEach((item: any) => {
    //     imgurlList.value.push(item.imgUrl)
    //   })
    // })
    return {
      pageFormConfig,
      pageContentConfig,
      pageDialogConfig,
      listData
    }
  }
})
</script>
<style lang="less" scoped></style>
