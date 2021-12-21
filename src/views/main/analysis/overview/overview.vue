<template>
  <div class="overview">
    <el-button @click="btn">测试</el-button>
    <hr />
    <input v-model="name" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import gsap from 'gsap'

import Schema from 'async-validator'

export default defineComponent({
  name: 'overview',
  setup() {
    const name = ref('xiao')
    const password = ref(123456)

    const volidator = (value: any) => {
      if (value === '123456') {
        return false
      } else {
        return new Error('不要设置这么简单的名字')
      }
    }

    const rules = {
      name: [
        {
          required: true,
          message: '用户名是必传内容~',
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: '用户名必须是5~10个字母或者数字~',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: '密码是必传内容~',
          volidator: volidator,
          trigger: 'blur'
        },
        {
          pattern: /^[a-z0-9]{3,}$/,
          message: '用户名必须是3位以上的字母或者数字~',
          trigger: 'blur'
        }
      ]
    }

    const jxls = new Schema(rules)
    jxls.validate({ name: 'go' }, (errors, fields) => {
      if (errors) {
        return 'errors ' + fields
      }
    })
    return {
      password,
      name
    }
  }
})
</script>
<style lang="less" scoped>
.overview {
  text-align: left;
}
</style>
