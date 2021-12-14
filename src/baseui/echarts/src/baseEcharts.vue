<template>
  <div
    class="base-echarts"
    ref="baseDivRef"
    :style="{ width: width, height: height }"
  ></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'baseEcharts',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object as PropType<echarts.EChartsOption>
    }
  },
  setup(props) {
    const baseDivRef = ref<HTMLElement>()
    const options = ref<echarts.EChartsOption>({ ...props.options })
    let myEchart: any = null

    onMounted(() => {
      myEchart = echarts.init(baseDivRef.value!)
      myEchart.setOption(options.value)
    })
    window.onresize = () => {
      myEchart.resize()
    }
    const set = (options: echarts.EChartsOption) => {
      myEchart.setOption(options)
    }
    const dispose = () => {
      myEchart.dispose
    }
    onUnmounted(() => {
      myEchart.dispose
    })
    return {
      baseDivRef,
      myEchart,
      set,
      dispose
    }
  }
})
</script>
<style lang="less" scoped></style>
