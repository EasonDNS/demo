<template>
  <div class="page-form">
    <el-button @click="btn" type="success">测试</el-button>
    <jxls-form
      :formConfig="pageFormConfig"
      v-model="pageData"
      @handleReSearch="handleReSearch"
      @handleChange="handleChange"
      @handleReset="handleReset"
    ></jxls-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

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
    }

    const handleReSearch = () => {
      console.log('-------------------------------')

      console.log('-------------------------------')
    }

    const handleChange = (data: any) => {
      console.log(data)
      console.log('+++++++++++++++')
    }

    const btn = () => {
      pageData.value = { id: '888' }
      console.log(pageData.value)
    }
    return {
      btn,
      pageData,
      handleReset,
      handleReSearch,
      handleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
