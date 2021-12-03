<template>
  <div class="page-form">
    <jxls-form
      ref="jxlsFormRef"
      :formConfig="pageFormConfig"
      v-model="pageData"
      @handleReSearch="handleReSearch"
      @handleChange="handleChange"
      @handleReset="handleReset"
    >
    </jxls-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { mapName } from '@/utils'
import { useStore } from '@/store'
import jxlsForm from '@/baseui/form/src/form.vue'
export default defineComponent({
  name: 'page-form',
  components: { jxlsForm },
  props: {
    pageFormConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const pageData = ref<any>({})
    // 重置基础数据
    const resetData = () => {
      for (const item of props.pageFormConfig.formItems) {
        pageData.value[item.field] = ''
      }
    }
    resetData()
    const handleReset = () => {
      resetData()
      store.dispatch(
        mapName.page(props.pageFormConfig.pageName).queryAction!,
        pageData.value
      )
    }
    const jxlsFormRef = ref<InstanceType<typeof jxlsForm>>()
    const handleReSearch = () => {
      jxlsFormRef.value?.formRef?.validate((vali) => {
        if (vali) {
          store.dispatch(
            mapName.page(props.pageFormConfig.pageName).queryAction!,
            pageData.value
          )
        }
      })
    }

    const handleChange = (data: any) => {
      console.log(data)
      console.log('+++++++++++++++')
    }

    return {
      jxlsFormRef,
      pageData,
      handleReset,
      handleReSearch,
      handleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
