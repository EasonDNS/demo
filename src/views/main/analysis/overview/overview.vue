<template>
  <div class="overview">
    <hr />
    <el-row :gutter="10">
      <el-col :span="24" class="one">
        <el-button type="success" @click="btn">测试</el-button>
        <el-input v-model="it"></el-input>
        <h2 class="it" ref="hRef">{{ it }}</h2>
      </el-col>
      <el-col>
        <div class="box"></div>
      </el-col>
    </el-row>
    <hr />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { localcach } from '@/utils'
import _ from 'lodash'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { Flip } from 'gsap/Flip'
export default defineComponent({
  name: 'overview',
  components: {},
  setup() {
    const userInfo = localcach.get('userInfo')
    const hRef = ref<HTMLElement>()
    const boxref = ref<HTMLElement>()
    gsap.registerPlugin(TextPlugin, ScrollTrigger)

    const it = ref('this is jxls')
    gsap.defaults({
      ease: 'bounce.out',
      duration: 1
    })

    const anime = require('animejs')
    onMounted(() => {
      console.log('object')
    })
    gsap.to(boxref.value!, {
      x: 400,
      y: 400
    })
    const btn = () => {
      console.log('object')
    }

    return {
      userInfo,
      it,
      btn,
      hRef,
      boxref
    }
  }
})
</script>
<style lang="less">
.new {
  color: #bfa;
  font-size: 90px;
  width: 200px;
  height: 200px;
  left: 0;
}
.old {
  color: orange;
  font-size: 90px;
  width: 400px;
  height: 500px;
  bottom: 0;
  border-radius: 50%;
}

.overview {
  text-align: left;
  .it {
    // display: inline-block;
    height: 200px;
    width: 900px;
    background-color: orangered;
  }
}
</style>
