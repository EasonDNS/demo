<template>
  <div class="goods">
    <page-form :pageFormConfig="pageFormConfig"></page-form>
    <page-content
      :pageDialogConfig="pageDialogConfig"
      :pageContentConfig="pageContentConfig"
      :listData="listData"
    >
      <template #imgUrl="scop">
        <el-image
          style="{width: 80px, height: 80px}"
          :preview-src-list="imgurlList ?? [scop.row.row.imgUrl]"
          :url-list="imgurlList ?? [scop.row.row.imgUrl]"
          :src="scop.row.row.imgUrl"
          fit="cover"
          infinite
          hide-on-click-modal
        ></el-image>
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

    onMounted(() => {
      store.dispatch('goodsModule/queryGoodsAction')
    })
    const list = computed(() => store.state.goodsModule.list)
    const totalCount = computed(() => store.state.goodsModule.totalCount)
    const listData = ref({
      list,
      totalCount
    })
    const imgurlList = ref<any>([])
    list.value.forEach((item: any) => {
      imgurlList.value.push(item.imgUrl)
    })

    return {
      pageFormConfig,
      pageContentConfig,
      pageDialogConfig,
      listData,
      imgurlList
    }
  }
})
</script>
<style lang="less" scoped></style>
