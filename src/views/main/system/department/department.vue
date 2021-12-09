<template>
  <div class="department">
    <page-form
      :pageFormConfig="pageFormConfig"
      @handleVisibleChange="handleVisibleChange"
    ></page-form>
    <page-content
      :pageContentConfig="pageContentConfig"
      :pageDialogConfig="pageDialogConfig"
      :listData="listData"
      @handleVisibleChange="handleVisibleChange"
    >
    </page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'

import { pageContentConfig } from './config/pageContentConfig'
import { pageDialogConfig } from './config/pageDialogConfig'
import { pageFormConfig } from './config/pageFormConfig'

import pageContent from '@/components/page-content'
import pageForm from '@/components/page-form'

import { mapName } from '@/utils'

import { useStore } from '@/store'

export default defineComponent({
  name: 'department',
  components: {
    pageForm,
    pageContent
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('departmentModule/queryDepartmentAction')
    })
    const listData = ref<any>({})
    const list = computed(() => store.state.departmentModule.list)
    const totalCount = computed(() => store.state.departmentModule.totalCount)
    listData.value = {
      list,
      totalCount
    }
    // list 数据,config:配置文件 ,field:查询的字段 ,value:selectOption Value值. label: 显示的值  pay:下拉触发传过来的 值
    const handleVisibleChange = (pay: any) => {
      mapName.visible(
        list.value,
        pageFormConfig,
        'leader',
        'leader',
        'leader',
        pay
      )
      mapName.visible(
        list.value,
        pageDialogConfig,
        'leader',
        'leader',
        'leader',
        pay
      )
    }

    return {
      pageContentConfig,
      pageDialogConfig,
      pageFormConfig,
      listData,

      handleVisibleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
