<template>
  <div class="">
    <h1>
      {{ msg }}
    </h1>
    <jxls-form
      :searchFormConfig="searchFormConfig"
      v-model="formData"
    ></jxls-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { jxlsForm } from '@/baseui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: { jxlsForm },
  setup() {
    const formData = ref({})
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>
<style lang="less" scoped></style>
