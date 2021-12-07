<template>
  <div class="users">
    <page-form :pageFormConfig="pageFormConfig"></page-form>
    <page-content
      :listData="listData"
      :pageContentConfig="pageContentConfig"
      :pageDialogConfig="pageDialogConfig"
      @handleVisibleChange="handleVisibleChange"
    ></page-content>
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

import { mapName } from '@/utils'

export default defineComponent({
  name: 'users',
  components: { pageForm, pageContent },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('userModule/queryUserAction')
      store.dispatch('roleModule/queryRoleAction')
      store.dispatch('departmentModule/queryDepartmentAction')
    })
    const list = computed(() => store.state.userModule.list)
    const totalCount = computed(() => store.state.userModule.totalCount)

    const handleVisibleChange = (pay: any) => {
      const selectitem = pageDialogConfig.formItems.find((item) => {
        return item.field === pay.field
      })
      if (selectitem?.field === 'roleId') {
        selectitem.selectOptions = mapName.select(
          store.state.roleModule.list,
          'roleId'
        )
      }
      if (selectitem?.field === 'departmentId') {
        selectitem.selectOptions = mapName.select(
          store.state.departmentModule.list,
          'departmentId'
        )
      }
    }
    const listData = ref({
      list,
      totalCount
    })

    return {
      pageFormConfig,
      pageContentConfig,
      pageDialogConfig,
      listData,
      handleVisibleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
