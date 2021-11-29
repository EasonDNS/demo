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
          <jxls-form
            ref="jxlsFormRef"
            :searchFormConfig="loginConfig"
            v-model="userLogin"
          ></jxls-form>
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

import { loginConfig } from '../config/login-config'
import { jxlsForm } from '@/baseui/form'
import { localcach } from '@/utils'

export default defineComponent({
  components: {
    jxlsForm
  },
  setup() {
    const store = useStore()

    const userLogin = ref({
      name: localcach.get('name') ?? '',
      password: localcach.get('password') ?? ''
    })
    const isRemember = ref(true)
    const rememberPassword = (newvalue: boolean) => {
      isRemember.value = newvalue
    }
    // 拿到form 表单 可以从里面去取到 form 再去拿到form的一个方法 validate 校验 表单是否全部通过 验证
    const jxlsFormRef = ref<InstanceType<typeof jxlsForm>>()
    const handleLogin = () => {
      jxlsFormRef.value?.formRef?.validate((valid) => {
        if (valid) {
          // 1, 判定是不是要记住密码
          if (isRemember.value) {
            localcach.set('name', userLogin.value.name)
            localcach.set('password', userLogin.value.password)
            // 2, 拿到user data 分发一个action
            store.dispatch('loginModule/accountLoignAction', {
              url: '/login',
              data: userLogin.value
            })
          } else {
            localcach.delete('name')
            localcach.delete('password')
          }
        }
      })
    }

    return {
      loginConfig,
      userLogin,
      isRemember,
      rememberPassword,
      handleLogin,
      jxlsFormRef
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
