<template>
  <div class="">
    <page-form
      :pageFormConfig="loginConfig"
      ref="pageFormRef"
      :data="loginData"
    ></page-form>
    <el-switch
      v-model="isRemember"
      inline-prompt
      active-text="是"
      inactive-text="否"
      @change="rememberPassword"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, onMounted } from 'vue'

import { localcach } from '@/utils'
import pageForm from '@/components/page-form'
import { loginConfig } from './config/login-config'
export default defineComponent({
  components: {
    pageForm
  },
  setup() {
    const msg = ref('msg in app')
    const isRemember = ref(true)
    const pageFormRef = ref<InstanceType<typeof pageForm>>()
    const loginData = ref({
      name: localcach.get('name'),
      password: localcach.get('password')
    })
    // const name = localcach.get('name')
    // const password = localcach.get('password')

    onMounted(() => {
      //
    })
    const rememberPassword = () => {
      console.log(isRemember.value)
      console.log(name)
    }
    return {
      isRemember,
      rememberPassword,
      loginConfig,
      loginData
    }
  }
})
</script>
<style lang="less" scoped></style>
