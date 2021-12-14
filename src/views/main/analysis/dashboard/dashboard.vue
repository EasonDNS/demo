<template>
  <div class="dashbaord">
    <hr />
    <el-row :gutter="10">
      <el-col :span="12">
        <jxls-card>
          <bar-echarts :barConfig="barConfig" ref="barRef"></bar-echarts>
        </jxls-card>
      </el-col>
      <el-col :span="12">
        <jxls-card>
          <bar-echarts :barConfig="pieConfig" ref="pieRef"></bar-echarts>
        </jxls-card>
      </el-col>
      <el-col :span="8"> </el-col>
    </el-row>
    <el-button @click="btn">change</el-button>
  </div>
</template>

<script lang="ts">
import {
  onMounted,
  ref,
  defineComponent,
  computed,
  reactive,
  nextTick,
  watchEffect,
  watch
} from 'vue'
import { useStore } from '@/store'

import jxlsCard from '@/baseui/card'
import barEcharts from '@/baseui/echarts/src/cpns/barEchart.vue'

import { EChartsOption } from 'echarts'
export default defineComponent({
  components: { jxlsCard, barEcharts },
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
    const pieRef = ref<InstanceType<typeof barEcharts>>()
    const options: EChartsOption = {
      title: {
        text: 'goodsCount'
      },
      series: [{ type: 'bar' }],
      dataset: {
        dimensions: [{ name: 'name' }, { name: 'goodsCount' }],
        // dimensions: ['name', 'goodsCount'],
        source: goodsCount.value
      }
    }
    // pie 饼图
    const pieOptions = reactive<EChartsOption>({
      title: { text: 'pie' },
      series: [{ type: 'pie' }]
    })
    const pieConfig = {
      width: '100%',
      height: '100%',
      options: pieOptions
    }
    const barConfig = {
      width: '100%',
      height: '100%',
      options: options
    }
    const btn = () => {
      const opa = {
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 100, 10, 20]
          },
          {
            name: 'a',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
      barRef.value?.setOption(opa)
    }
    // watchEffect((newValue: any) => {

    //   console.log('pieOptions.value :>> ', pieOptions.value)
    //   pieRef.value?.setOption({ ...pieOptions.value })
    //   console.log('newValue :>> ', newValue.value)
    // })
    watch(goodsCount, (newValue) => {
      console.log('newValue.value :>> ', newValue)
      pieRef.value?.setOption({
        dataset: {
          dimensions: ['name', 'goodsCount'],
          source: goodsSale.value
        }
      })
    })
    // nextTick(() => {
    //   console.log('goodsSale.value :>> ', goodsSale.value)
    //   pieRef.value?.setOption({
    //     title: { text: 'pie' },
    //     series: [{ type: 'pie' }],
    //     dataset: {
    //       dimensions: ['name', 'goodsCount'],
    //       source: goodsSale.value
    //     }
    //   })
    // })
    return {
      barConfig,
      pieConfig,
      barRef,
      pieRef,
      btn
    }
  }
})
</script>

<style scoped></style>
