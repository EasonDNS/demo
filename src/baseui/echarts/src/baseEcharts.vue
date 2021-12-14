<template>
  <div
    class="base-echarts"
    ref="baseEchartsRef"
    :style="{ width: width, height: height }"
  ></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import * as echarts from 'echarts'

export default defineComponent({
  name: 'baseEcharts',
  props: {
    width: String,
    height: String
  },
  setup() {
    const baseEchartsRef = ref<HTMLElement>()
    const width = ref('360px')
    const height = ref('400px')
    const options = ref({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    })
    const myEchart = ref<any>()

    onMounted(() => {
      myEchart.value = echarts.init(baseEchartsRef.value!)
      myEchart.value.setOption(options.value)
    })
    return {
      width,
      height,
      baseEchartsRef
    }
  }
})
</script>
<style lang="less" scoped></style>
