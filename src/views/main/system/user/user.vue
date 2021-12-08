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
      console.log(pay)
      // list 数据,config:配置文件 ,field:查询的字段 ,value:selectOption Value值.pay:下拉触发传过来的 值
      mapName.visible(
        store.state.roleModule.list,
        pageDialogConfig,
        'roleId',
        'id',
        pay
      )
      mapName.visible(
        store.state.departmentModule.list,
        pageDialogConfig,
        'departmentId',
        'id',
        pay
      )
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
