<template>
  <span ref="counterRef" :style="style"></span>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watch } from 'vue'
import { CountUp } from 'countup.js'
import type { CountUpOptions } from 'countup.js'
export default defineComponent({
  name: 'count-up',

  props: {
    // 接受父组件传递过来的样式值
    style: {
      type: Object,
      default: () => {
        return {
          // fontSize: '40px',
          // color: 'red'
        }
      }
    },
    // 接受父组件传递过来的options 它会去覆盖默认值
    options: {
      type: Object as PropType<CountUpOptions>,
      default: () => {
        return {}
      }
    },
    // 需要做动画的数字
    number: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const counterRef = ref<HTMLElement>()
    const instance = ref<CountUp | null>(null)
    // 定义默认值
    const defaultOptions: CountUpOptions = {
      decimalPlaces: 2, //保留两位
      duration: 2, // 动画时长
      separator: ',', // 千位分隔
      decimal: '.' // 小数分隔
      // prefix: '￥' //单位
    }
    // 定义方法 1,需要去判定是否拿到了这个实例!,2,再去添加这个方法
    const start = () => {
      if (!instance.value) return
      instance.value.start()
    }
    const update = (newNum: number) => {
      if (!instance.value) return
      instance.value.update(newNum)
    }
    // 定义一个方法 创建 countup的方法.1,判定是否有这个标签 ,2,再传入初始值  3,new 出来一个实例
    const createCounter = () => {
      // 判定是否拿到 标签
      if (!counterRef.value) return
      const opts = { ...defaultOptions, ...props.options }
      instance.value = new CountUp(counterRef.value, props.number, opts)
      start()
    }
    // 侦听 props传入过来 的num 因为未定义 尽量用 函数 侦听源
    watch(
      () => props.number,
      () => {
        update(props.number)
      }
    )
    onMounted(() => {
      createCounter()
    })
    return {
      counterRef,
      update
    }
  }
})
</script>
<style lang="less" scoped></style>
