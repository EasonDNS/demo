<template>
  <div
    class="funnel-eacharts"
    :style="{ width: funnelConfig.width, height: funnelConfig.height }"
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

import { IEchartConfig } from '../type'

export default defineComponent({
  name: 'pie-eacharts',
  props: {
    //  圆饼图 的配置文件 {w:str,h:str,op:op}
    funnelConfig: {
      type: Object as PropType<IEchartConfig>,
      required: true
    }
  },
  components: { baseEcharts },
  setup(props) {
    const baseEchartsRef = ref<InstanceType<typeof baseEcharts>>()
    // 默认的 pie 配置选项
    const baseOptions: echarts.EChartsOption = {
      // 设置图例显示的位置及排列
      legend: { show: true, data: [{ name: 'id' }] },
      tooltip: { trigger: 'item' },
      // 设置高亮
      emphasis: {
        label: {
          show: true,
          fontSize: '16',
          fontWeight: 'bold'
        }
      },
      // 系列的默认设置
      series: [
        {
          type: 'funnel',
          // min: 0,
          // max: 10,
          funnelAlign: 'center',
          minSize: '0%',
          maxSize: '100%',
          gap: 2,
          // sort: 'ascending', // descending ==倒
          orient: 'vertical',
          legendHoverLink: true,
          label: {
            show: true,
            position: 'inside',
            formatter: '{@[0]}'
          },
          itemStyle: {
            borderWidth: 2
          },
          emphasis: {
            label: {
              fontSize: 20
            }
          }
        }
      ]
    }
    //传递给baseEcharts
    const options = { ...baseOptions, ...props.funnelConfig.options }
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
      const option = { ...baseOptions, ...props.funnelConfig.options }
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
