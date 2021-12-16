<template>
  <div
    class="bar-eacharts"
    :style="{ width: barConfig.width, height: barConfig.height }"
  >
    <base-echarts
      :options="options"
      ref="baseEchartsRef"
      :width="'100%'"
      :height="'100%'"
    ></base-echarts>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue'

import * as echarts from 'echarts'
import baseEcharts from '../baseEcharts.vue'

import { IBarEchartConfig } from '../type'

export default defineComponent({
  name: 'bar-eacharts',
  props: {
    //  bar 柱状图的配置文件 {w:str,h:str,op:op}
    barConfig: {
      type: Object as PropType<IBarEchartConfig>,
      required: true
    }
  },
  components: { baseEcharts },
  setup(props) {
    const baseEchartsRef = ref<InstanceType<typeof baseEcharts>>()
    const baseOptions: echarts.EChartsOption = {
      xAxis: { type: 'category' },
      yAxis: {},
      legend: {},
      // 默认触发
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      }

      // series: [
      //   {
      //     type: 'bar',
      //     //高亮显示
      //     emphasis: {
      //       label: {
      //         show: true,
      //         fontSize: '16',
      //         fontWeight: 'bold'
      //       }
      //     }
      //   }
      // ]
    }
    const options = { ...baseOptions, ...props.barConfig.options }
    const setOption = (op: echarts.EChartsOption) => {
      const option = { ...options, ...op }
      baseEchartsRef.value?.set(option)
    }
    onMounted(() => {
      const option = { ...baseOptions, ...props.barConfig.options }
      baseEchartsRef.value?.set(option)
    })
    return {
      baseEchartsRef,
      options,
      setOption
    }
  }
})
</script>
<style lang="less" scoped></style>
