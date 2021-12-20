<template>
  <div class="dashbaord">
    <hr />
    <el-row :gutter="10">
      <el-col :span="8">
        <jxls-card title="goodsSale">
          <pie-echarts :pieConfig="pieConfig" ref="pieRef"></pie-echarts>
        </jxls-card>
      </el-col>
      <el-col :span="8">
        <jxls-card title="goodsCount">
          <bar-echarts :barConfig="barConfig" ref="barRef"></bar-echarts>
        </jxls-card>
      </el-col>
      <el-col :span="8">
        <jxls-card title="goodsFavor">
          <pie-echarts :pieConfig="roseConfig" ref="roseRef"></pie-echarts>
        </jxls-card>
      </el-col>
    </el-row>
    <el-row class="row">
      <el-col :span="12">
        <div class="goods-sale-top">
          <jxls-card :bodyStyle="{ height: '360px' }" title="goodsSaleTop">
            <funnel-echart
              :funnelConfig="funnelConfig"
              ref="funnelRef"
            ></funnel-echart>
          </jxls-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="goods-sale-top">
          <jxls-card :bodyStyle="{ height: '360px' }" title="goodsSaleTop">
            <custom-echart :anData="anData"></custom-echart>
          </jxls-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent, computed, watch } from 'vue'
import { useStore } from '@/store'

import jxlsCard from '@/baseui/card'
import barEcharts from '@/baseui/echarts/src/cpns/barEchart.vue'
import pieEcharts from '@/baseui/echarts/src/cpns/pieEchart.vue'
import funnelEchart from '@/baseui/echarts/src/cpns/funnelEchart.vue'
import { EChartsOption } from 'echarts'

import customEchart from '@/baseui/echarts/src/cpns/customEchart.vue'

export default defineComponent({
  components: { jxlsCard, pieEcharts, barEcharts, funnelEchart },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('dashboardModule/queryDashboardAction')
    })
    // 每个分类商品个数 {id:num,name:str,goodsCount:num}
    const goodsCount = computed(() => store.state.dashboardModule.goodsCount)
    // 每个分类商品的销量 {id:num,name:str,goodsCount:num}
    const goodsSale = computed(() => store.state.dashboardModule.goodsSale)
    // 每个分类商品的收藏 {id:num,name:str,goodsFavor:num}
    const goodsFavor = computed(() => store.state.dashboardModule.goodsFavor)
    // 销量前10 {id:num,name:str,saleCount:num}
    const goodsSaleTop = computed(
      () => store.state.dashboardModule.goodsSaleTop
    )
    // 不同城市的销量 {address:str,count:num}
    const goodsAddressSale = computed(
      () => store.state.dashboardModule.goodsAddressSale
    )
    // 商品数据统计的数量 {amount:str,title:str,tips:str,subtitle:str,number1:num,number2:num}
    const goodsAmountList = computed(
      () => store.state.dashboardModule.goodsAmountList
    )
    // 绑定容器
    const barRef = ref<InstanceType<typeof barEcharts>>()
    const pieRef = ref<InstanceType<typeof pieEcharts>>()
    const roseRef = ref<InstanceType<typeof pieEcharts>>()
    const funnelRef = ref<InstanceType<typeof funnelEchart>>()
    const anData = goodsFavor.value

    // 柱状图
    const barOptions: EChartsOption = {
      dataset: [
        {
          dimensions: [{ name: 'name' }, { name: 'goodsCount' }],
          source: goodsCount.value
        }
      ],
      series: [
        { type: 'bar', datasetIndex: 0 },
        { type: 'bar', datasetIndex: 1 }
      ],
      dataZoom: [
        {
          xAxisIndex: [0],
          type: 'inside'
          // yAxisIndex: [0]
        }
      ]
    }
    // pie 饼图
    const pieOptions: EChartsOption = {
      dataset: {
        dimensions: [{ name: 'name' }, { name: 'goodsCount' }],
        source: goodsSale.value
      }
    }
    // 玫瑰图
    const roseOptions: EChartsOption = {
      dataset: {
        dimensions: [{ name: 'name' }, { name: 'goodsCount' }],
        source: goodsSale.value
      },
      series: [
        {
          selectedMode: 'single',
          type: 'pie',
          radius: ['10%', '80%'],
          center: ['50%', '50%'],
          roseType: 'area',
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
    // 漏斗图
    const funnelOptions: EChartsOption = {
      dataset: {
        dimensions: [{ name: 'saleCount' }, { name: 'id' }],
        source: goodsSaleTop.value
      }
    }
    const barConfig = {
      width: '100%',
      height: '100%',
      options: barOptions
    }
    const pieConfig = {
      width: '100%',
      height: '100%',
      options: pieOptions
    }
    const roseConfig = {
      width: '100%',
      height: '100%',
      options: roseOptions
    }
    const funnelConfig = {
      width: '100%',
      height: '100%',
      options: funnelOptions
    }

    watch(goodsSale, (newValue) => {
      pieRef.value?.setOption({
        dataset: {
          dimensions: ['name', 'goodsCount'],
          source: newValue
        }
      })
    })
    watch(goodsSaleTop, (newValue) => {
      funnelRef.value?.setOption({
        dataset: {
          dimensions: [{ name: 'id' }, { name: 'name' }, { name: 'saleCount' }],
          source: newValue
        }
      })
    })
    watch(goodsCount, (newValue) => {
      barRef.value?.setOption({
        dataset: {
          dimensions: ['name', 'goodsCount', 'id'],
          source: newValue
        }
      })
    })
    watch(goodsFavor, (newValue) => {
      roseRef.value?.setOption({
        dataset: {
          dimensions: ['name', 'goodsFavor'],
          source: newValue
        }
      })
    })

    return {
      barConfig,
      pieConfig,
      roseConfig,
      funnelConfig,
      roseRef,
      barRef,
      pieRef,
      funnelRef,
      anData
    }
  }
})
</script>

<style lang="less" scoped>
.row {
  margin-top: 10px;
}
</style>
