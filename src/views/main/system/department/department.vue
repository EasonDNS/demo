<template>
  <div class="department">
    <hr />
    <page-form
      ref="pageFormRef"
      :data="pageData"
      :pageFormConfig="pageFormConfig"
      @handleResearch="handleReSearch"
    ></page-form>
    <hr />
    <page-content
      ref="pageContentRef"
      :listData="listData"
      :pageContentConfig="pageContentConfig"
      :otherFormConfig="pageDialogConfig"
      @handleVisibleChange="handleVisibleChange"
    ></page-content>

    <!-- <hr />
    <page-dialog
      :pageDialogConfig="pageDialogConfig"
      ref="pageDialogRef"
      @dialogresearch="handleResearchm"
    ></page-dialog>-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { pageDialogConfig } from './config/pageDialogConfig'
import pageDialog from '@/components/page-dialog'

import { pageFormConfig } from './config/pageFormConfig'
import pageForm from '@/components/page-form'

import { pageContentConfig } from './config/pageContentConfig'
import pageContent from '@/components/page-content'

import { mapName } from '@/utils'

export default defineComponent({
  name: 'department',
  components: {
    pageForm,
    pageContent
  },
  setup() {
    const store = useStore()
    const pageData: any = ref({})
    onMounted(() => {
      store.dispatch('departmentModule/queryDepartmentAction')
    })
    const handleReset = () => {
      store.dispatch('departmentModule/queryDepartmentAction')
    }
    const handleReSearch = () => {
      store.dispatch(
        mapName.page(pageFormConfig.pageName).queryAction!,
        pageFormRef.value?.pageData
      )
    }
    const pageFormRef = ref<InstanceType<typeof pageForm>>()
    const list = computed(() => store.state.departmentModule.list)
    const totalCount = computed(() => store.state.departmentModule.totalCount)
    const listData = ref({
      list,
      totalCount
    })

    const pageDialogRef = ref<InstanceType<typeof pageDialog>>()
    const pageContentRef = ref<InstanceType<typeof pageContent>>()
    // 监听到下拉 动态获取 数据
    const handleVisibleChange = (item: any) => {
      item.selectOptions = []
      list.value.forEach((depart: any) => {
        item.selectOptions.push({
          value: depart.name,
          label: depart[item.field]
        })
      })
    }
    return {
      pageFormConfig,
      pageContentConfig,
      pageDialogConfig,
      pageFormRef,
      pageContentRef,
      pageDialogRef,
      listData,
      pageData,
      handleReSearch,
      handleReset,
      handleVisibleChange
      // handleRegester,
      // handleResearchm
    }
  }
})
</script>

<style scoped></style>
