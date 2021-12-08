<template>
  <div>
    <page-content
      :pageContentConfig="pageContentConfig"
      :listData="listData"
    ></page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { mapName } from '@/utils'

import { pageContentConfig } from './config/pageContentConfig'
import pageContent from '@/components/page-content'
export default defineComponent({
  name: 'menus',
  components: { pageContent },
  setup() {
    const msg = ref('msg in app')
    const store = useStore()
    onMounted(() => {
      store.dispatch('menuModule/queryMenuAction')
    })
    const list = computed(() => store.state.menuModule.list)
    const totalCount = computed(() => store.state.menuModule.totalCount)
    const listData = ref({
      list,
      totalCount
    })
    return { pageContentConfig, listData }
  }
})
</script>
<style lang="less" scoped></style>
