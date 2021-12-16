<template>
  <div
    class="pie-eacharts"
    :style="{ width: pieConfig.width, height: pieConfig.height }"
  >
    <base-echarts
      ref="baseEchartsRef"
      :options="options"
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
  name: 'pie-eacharts',
  props: {
    //  圆饼图 的配置文件 {w:str,h:str,op:op}
    pieConfig: {
      type: Object as PropType<IBarEchartConfig>,
      required: true
    }
  },
  components: { baseEcharts },
  setup(props) {
    const baseEchartsRef = ref<InstanceType<typeof baseEcharts>>()
    // 默认的 pie 配置选项
    const baseOptions: echarts.EChartsOption = {
      // 设置图例显示的位置及排列
      legend: {
        left: 'center'
        // orient: 'vertical'
      },
      // 设置高亮
      emphasis: {
        label: {
          show: true,
          fontSize: '16',
          fontWeight: 'bold'
        }
      },
      tooltip: { trigger: 'item' },
      // 系列的默认设置
      // series: [{ type: 'pie', radius: ['20%', '50%'], selectedMode: 'single' }]
      series: [
        {
          selectedMode: 'single',
          type: 'pie',
          radius: ['10%', '80%'],
          center: ['50%', '50%'],
          // roseType: 'area',
          itemStyle: {
            borderRadius: 8
          },
          label: {
            show: true,
            position: 'inside'
          }
        }
      ]
    }
    //传递给baseEcharts
    const options = { ...baseOptions, ...props.pieConfig.options }
    const setOption = (op: echarts.EChartsOption) => {
      const option = { ...options, ...op }
      baseEchartsRef.value?.set(option)
    }
    // 传递一个数据过来 可以再传递一个方法过来 设置这个数据上去就可以....
    const setData = (data: echarts.DatasetComponentOption) => {
      const option: echarts.EChartsOption = { ...baseOptions, data }
      baseEchartsRef.value?.set(option)
    }
    onMounted(() => {
      const option = { ...baseOptions, ...props.pieConfig.options }
      baseEchartsRef.value?.set(option)
    })
    return {
      baseEchartsRef,
      options,
      setOption,
      setData
    }
  }
})
</script>
<style lang="less" scoped></style>
