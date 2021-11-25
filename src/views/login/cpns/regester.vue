<template>
  <div class="regester">
    <div>
      <el-dialog v-model="isShowDialog">
        <jxls-form :searchFormConfig="regesterConfig" v-model="formData">
        </jxls-form
      ></el-dialog>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { regesterConfig } from '../config/regester.config'
import { jxlsForm } from '@/baseui/form'
export default defineComponent({
  name: 'regester',

  components: {
    jxlsForm
  },
  setup() {
    const msg = ref('msg in app')
    const formData = ref({})
    const isShowDialog = ref(true)
    return {
      formData,
      regesterConfig,
      isShowDialog
    }
  }
})
</script>
<style lang="less" scoped></style>
