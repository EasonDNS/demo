<template>
  <div class="users">
    <page-form :pageFormConfig="pageFormConfig"></page-form>
    <page-content
      :listData="listData"
      :pageContentConfig="pageContentConfig"
      :pageDialogConfig="pageDialogConfig"
    ></page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { pageFormConfig } from './config/pageFormConfig'
import pageForm from '@/components/page-form'
import { pageContentConfig } from './config/pageContentConfig'
import pageContent from '@/components/page-content'
import { pageDialogConfig } from './config/pageDialogConfig'

export default defineComponent({
  name: 'users',
  components: { pageForm, pageContent },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('userModule/queryUserAction')
    })
    const list = computed(() => store.state.userModule.list)
    const totalCount = computed(() => store.state.userModule.totalCount)

    const listData = ref({
      list,
      totalCount
    })

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
