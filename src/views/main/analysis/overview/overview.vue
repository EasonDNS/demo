<template>
  <div class="overview">
    <el-button @click="isShow = !isShow">sss</el-button>
    <transition-group
      appear="true"
      tag="ul"
      name="jxls"
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated,animate__bounceOutLeft"
    >
      <li v-for="(item, index) of arr" :key="item" :data-index="index">
        {{ item }}-{{ index }}
      </li>
      <h2 v-if="isShow">{{ item }}00000</h2>
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import gsap from 'gsap'
export default defineComponent({
  name: 'overview',
  setup() {
    const arr = ref([1, 2, 4, 5, 6, 7, 9, 87])
    // const beforeEnter = (el: gsap.TweenTarget) => {
    //   gsap.from(el, { opacity: 0, scale: 0 })
    // }
    // const enter = (el: any, done: any) => {
    //   gsap.from(el, {
    //     duration: 2,
    //     x: 400,
    //     opacity: 0,
    //     onComplete: done,
    //     delay: el.dataset.index * 0.5
    //   })
    // }
    // const afterEnter = (el: gsap.TweenTarget, done: any) => {
    //   // gsap.to(el, { opacity: 1, onComplete: done })
    // }
    const isShow = ref(true)
    return {
      arr,
      isShow
      // beforeEnter,
      // enter,
      // afterEnter
    }
  }
})
</script>
<style lang="less" scoped>
.overview {
  text-align: left;
}
</style>
