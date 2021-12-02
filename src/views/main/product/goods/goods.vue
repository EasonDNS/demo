<template>
  <div class="">
    <page-content :pageContentConfig="tableConfig"></page-content>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from 'vue'
import { useStore } from '@/store'

import { tableConfig } from './config/tableConfig'
import pageContent from '@/components/page-content'
import { mapName } from '@/utils'
export default defineComponent({
  components: {
    pageContent
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('goodsModule/getGoodsAction', {})
    })
    // console.log('==========aaaa============')
    // const a = mapName.footerData('goods').listData
    // console.log(a)
    // console.log('======================')

    // const b = store.state.goodsModule.list
    // console.log('==========bbbbbb============')
    // console.log(b)
    // console.log('======================')
    return {
      tableConfig
    }
  }
})
</script>
<style lang="less" scoped></style>
