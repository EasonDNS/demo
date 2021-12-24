<template>
  <div class="login">
    <h1 class="header">吉祥超市后台</h1>
    <div class="content">
      <el-form ref="elformRef" :rules="rules" :model="formData">
        <el-form-item prop="user" required show-message
          ><el-input
            v-model="formData.user"
            placeholder="请输入用户名~"
            prefix-icon="User"
            class="user"
          ></el-input
        ></el-form-item>
        <el-form-item prop="password" required show-message
          ><el-input
            v-model="formData.password"
            placeholder="输入密码~"
            prefix-icon="Unlock"
            show-password
            class="password"
          ></el-input
        ></el-form-item>
      </el-form>
    </div>
    <el-button type="primary" Round class="login-btn" @click="login"
      >登陆</el-button
    >
    <div class="footer">
      <el-checkbox v-model="isRemenber" label="记住密码"></el-checkbox>
      <el-link href="#" type="info">忘记密码?</el-link>
    </div>
    <el-link href="/regester" type="info" @click="handleRegester"
      >还没注册帐号!</el-link
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { ElForm } from 'element-plus'
import { localcach } from '@/utils'
import { useStore } from '@/store'

import { rules } from './config/login-roules'

export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const elformRef = ref<InstanceType<typeof ElForm>>()
    const formData = ref({
      user: localcach.get('user'),
      password: localcach.get('password')
    })
    const isRemenber = ref(true)

    const login = () => {
      console.log('one')
      elformRef.value?.validate((vali) => {
        if (vali) {
          // 验证通过可以开始登陆 了..
          // 判定是否记住密码
          if (isRemenber.value) {
            localcach.set('user', formData.value.user)
            localcach.set('password', formData.value.password)
          }
          const account = {
            name: formData.value.user,
            password: formData.value.password
          }
          console.log('account :>> ', account)
          store.dispatch('loginModule/accountLoignAction', account)
        }
      })
    }
    return {
      formData,
      isRemenber,
      login,
      rules,
      elformRef
    }
  }
})
</script>
<style lang="less" scoped>
.login {
  --el-color-white: rgba(12, 12, 12, 0);
  --el-input-font-colo: red;
  --el-input-font-color: rgba(243, 239, 239, 0.808);
  --el-text-color-regular: rgba(253, 247, 247, 0.822);
  --el-border-radius-base: 20px;
}

.login::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  filter: blur(5px);
  z-index: -1;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  // background-image: url('~@/assets/background.png');
}

.login {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: rgba(245, 245, 245, 0.822);
  }
  .content {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 20px;

    .el-form {
      width: 100%;
    }

    .el-input {
      margin-top: 20px;
      line-height: 40px;
      padding-left: 10px;
      // width: 30%;
    }
  }
  .login-btn {
    width: 30%;
  }
  .footer {
    width: 30%;
    // padding: 0 40px 0 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
<style lang="less">
.el-input__prefix {
  left: 15px;
}
</style>
