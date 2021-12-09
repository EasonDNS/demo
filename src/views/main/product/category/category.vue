<template>
  <div class="category">
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

import { pageFormConfig } from './config/pageFormConfig'
import { pageContentConfig } from './config/pageContentConfig'
import { pageDialogConfig } from './config/pageDialogConfig'

import pageForm from '@/components/page-form'
import pageContent from '@/components/page-content'

import { useStore } from '@/store'
export default defineComponent({
  name: 'category',
  components: {
    pageForm,
    pageContent
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch('categoryModule/queryCategoryAction')
    })
    const list = computed(() => store.state.categoryModule.list)
    const totalCount = computed(() => store.state.categoryModule.totalCount)
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

<style scoped></style>
