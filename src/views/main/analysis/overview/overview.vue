<template>
  <div class="overview">
    <hr />
    <el-row>
      <el-col :span="24">
        <!-- <card-two></card-two> -->
        <el-card>
          <base-card> </base-card>
        </el-card>
      </el-col>
    </el-row>
    <hr />

    <card-one :config="config">
      <template #footerIcon>
        <el-icon><edit /></el-icon>
      </template>
    </card-one>
    <hr />

    <hr />
    <!-- <el-card> <card-two></card-two></el-card> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import baseCard from '@/baseui/card/src/cpns/baseCard.vue'
import cardOne from '@/baseui/card/src/cpns/card-1.vue'
import { CountUp } from 'countup.js'
export default defineComponent({
  name: 'overview',
  components: { baseCard, cardOne },
  setup() {
    const name = ref('xiao')
    const password = ref(123456)
    const numRef = ref<HTMLElement>()
    const countup = new CountUp(numRef.value!, 2, { startVal: 0 })
    const num = ref(100)
    if (!countup.error) {
      countup.start()
    } else {
      console.log('object')
    }

    const btn = () => {
      countup.start()
      countup.update(99999)
    }
    const config = {
      style: {
        background: 'linear-gradient(to bottom, #1f4037, #99f2c8)'
        // height: '500px'
      },
      title: '我是小标题',
      content: '我是内容',
      footer: {
        url: '#',
        icon: 'Remove',
        Disable: true
        // link: '#'
      }
    }

    return {
      password,
      name,
      num,
      btn,
      numRef,
      config
    }
  }
})
</script>
<style lang="less" scoped>
.overview {
  text-align: left;
}
</style>
