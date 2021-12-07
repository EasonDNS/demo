<template>
  <div class="login-content">
    <el-tabs type="card" stretch model-value="login">
      <el-tab-pane label="登陆" name="login">
        <template #label>
          <div class="user-account">
            <el-icon><user-filled /></el-icon>
            <strong> 登陆 </strong>
          </div>
        </template>
        <div class="login">
          <page-form
            :pageFormConfig="loginConfig"
            :data="loginData"
            ref="pageFormRef"
          >
          </page-form>
        </div>
        <div class="loginBtn">
          <el-switch
            v-model="isRemember"
            inline-prompt
            active-text="是"
            inactive-text="否"
            @change="rememberPassword"
          />
          <el-button type="primary" class="primary" @click="handleLogin"
            >登陆</el-button
          >
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册" name="regester"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from '@/store'

import pageForm from '@/components/page-form'
import { loginConfig } from '../config/login-config'
import { localcach } from '@/utils'

export default defineComponent({
  components: {
    pageForm
  },
  setup() {
    const store = useStore()
    const loginData = ref({
      name: localcach.get('name') ?? '',
      password: localcach.get('password') ?? ''
    })
    const isRemember = ref(true)
    const rememberPassword = (newvalue: boolean) => {
      isRemember.value = newvalue
    }

    const pageFormRef = ref<InstanceType<typeof pageForm>>()
    const handleLogin = () => {
      pageFormRef.value?.jxlsFormRef?.formRef?.validate((vali) => {
        if (vali) {
          store.dispatch(
            'loginModule/accountLoignAction',
            pageFormRef.value?.pageData
          )
        }
      })
    }
    return {
      loginConfig,
      loginData,
      isRemember,
      pageFormRef,
      rememberPassword,
      handleLogin
    }
  }
})
</script>
<style lang="less" scoped>
.login-content {
  .login {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 40px;
  }
  .user-account {
    // background-color: orange;
    .el-icon {
      size: 30px;
      color: rgba(34, 33, 33, 0.514);
      margin-right: 10px;
    }
    strong {
      font-family: Helvetica, Arial, sans-serif;
      size: 20px;
      color: rgba(160, 107, 9, 0.897);
    }
  }
  .loginBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 100px;
    padding-right: 40px;

    .primary {
      width: 50%;
    }
  }
}
</style>
