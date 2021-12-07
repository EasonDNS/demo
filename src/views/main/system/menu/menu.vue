<template>
  <div class="">
    <page-content
      :pageContentConfig="pageContentConfig"
      :listData="listdata"
    ></page-content>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue'
import { useStore } from '@/store'

import { pageContentConfig } from './config/pageContentConfig'
import pageContent from '@/components/page-content'
export default defineComponent({
  components: { pageContent },
  setup() {
    const msg = ref('msg in app')

    const store = useStore()
    const list = computed(() => store.state.loginModule.userMenuList)
    const totalCount = ref(0)
    console.log(list.value)
    const listData = ref({
      list: list.value,
      totalCount: totalCount.value
    })
    return {
      pageContentConfig,
      listData
    }
  }
})
</script>
<style lang="less" scoped></style>
