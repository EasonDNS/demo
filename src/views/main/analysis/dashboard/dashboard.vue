<template>
  <div class="dashbaord">
    <hr />
    <el-row gutter="10">
      <template v-for="(item, index) of goodsAmountList" :key="item">
        <el-col :span="6">
          <jxls-card-one
            :config="{
              title: item.title,
              content: '',
              number: item.number1,
              style: {
                height: '130px',
                background: backgrounds[index]
              },
              footer: {
                link: item.tips,
                Disable: true
              }
            }"
          >
            <template #topIcon>
              <template v-if="item.amount === 'sale'">
                <el-icon :size="24" color="white"><briefcase /></el-icon>
              </template>
              <template v-if="item.amount === 'favor'">
                <el-icon :size="24" color="white"><Cherry /></el-icon>
              </template>
              <template v-if="item.amount === 'inventory'">
                <el-icon :size="24" color="white"><Bowl /></el-icon>
              </template>
              <template v-if="item.amount === 'saleroom'">
                <el-icon :size="24" color="white"><BrushFilled /></el-icon>
              </template>
            </template>
            <template #footerIcon>
              <template v-if="item.amount === 'sale'">
                <el-icon><briefcase /></el-icon>
              </template>
              <template v-if="item.amount === 'favor'">
                <el-icon><Cherry /></el-icon>
              </template>
              <template v-if="item.amount === 'inventory'">
                <el-icon><Bowl /></el-icon>
              </template>
              <template v-if="item.amount === 'saleroom'">
                <el-icon><BrushFilled /></el-icon>
              </template>
            </template>
          </jxls-card-one>
        </el-col>
      </template>
    </el-row>
    <hr />
    <el-row class="row" :gutter="10">
      <el-col :span="8">
        <base-card :config="baseCardConfig">
          <template #header>
            <pie-echarts :pieConfig="pieConfig" ref="pieRef"></pie-echarts>
          </template>
        </base-card>
      </el-col>
      <el-col :span="8">
        <base-card :config="baseCardConfig">
          <template #header>
            <bar-echarts :barConfig="barConfig" ref="barRef"></bar-echarts>
          </template>
        </base-card>
      </el-col>
      <el-col :span="8">
        <base-card :config="baseCardConfig">
          <template #header>
            <pie-echarts :pieConfig="roseConfig" ref="roseRef"></pie-echarts>
          </template>
        </base-card>
      </el-col>
    </el-row>

    <hr />
    <el-row class="row" :gutter="10">
      <el-col :span="12">
        <base-card :config="baseCardConfig">
          <template #header>
            <funnel-echart
              :funnelConfig="funnelConfig"
              ref="funnelRef"
            ></funnel-echart>
          </template>
        </base-card>
      </el-col>
      <el-col :span="12">
        <base-card :config="baseCardConfig">
          <template #header>
            <bar-echarts :barConfig="lineConfig" ref="lineRef"></bar-echarts>
          </template>
        </base-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent, computed, watch } from 'vue'
import { useStore } from '@/store'

import barEcharts from '@/baseui/echarts/src/cpns/barEchart.vue'
import pieEcharts from '@/baseui/echarts/src/cpns/pieEchart.vue'
import funnelEchart from '@/baseui/echarts/src/cpns/funnelEchart.vue'
import { EChartsOption } from 'echarts'

import jxlsCardOne from '@/baseui/card/src/cpns/card-1.vue'
import gsap from 'gsap'

import baseCard from '@/baseui/card/src/cpns/baseCard.vue'

export default defineComponent({
  components: {
    pieEcharts,
    barEcharts,
    funnelEchart,
    jxlsCardOne,
    baseCard
  },
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
    const lineRef = ref<InstanceType<typeof barEcharts>>()
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
      // legend: {
      //   textStyle: {
      //     color: '#fff'
      //   }
      // }
    }
    // 漏斗图
    const funnelOptions: EChartsOption = {
      dataset: {
        dimensions: [{ name: 'saleCount' }, { name: 'id' }],
        source: goodsSaleTop.value
      }
    }
    const lineOptions: EChartsOption = {
      dataset: [
        {
          dimensions: [{ name: 'address' }],
          source: goodsAddressSale.value
        }
      ],
      series: [{ type: 'line', datasetIndex: 0 }],
      dataZoom: [
        {
          xAxisIndex: [0],
          type: 'inside'
          // yAxisIndex: [0]
        }
      ]
    }
    const lineConfig = {
      width: '100%',
      height: '100%',
      options: lineOptions
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
    watch(goodsAddressSale, (newValue) => {
      lineRef.value?.setOption({
        dataset: {
          dimensions: ['address', 'count'],
          source: newValue
        }
      })
    })
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
    const numberone = ref(0)
    const enter = (el: any, done: any) => {
      gsap.from(el, { duration: 10, onComplete: done })
    }
    const backgrounds = ref([
      'linear-gradient(25deg, #e55509, #e19038, #d4c261, #b8f18a)',
      'linear-gradient(to bottom, #f12711, #f5af19)',
      'linear-gradient(to bottom, #59c173, #a17fe0, #5d26c1)',
      'linear-gradient(to bottom, #e1eec3, #f05053)'
    ])

    const baseCardConfig = ref({
      header: {
        height: '320px',
        background: 'linear-gradient(to right, #43c6ac, #f8ffae)'
      },
      content: {
        isShowContent: false
      },
      footer: {
        isShowFooter: false
      }
    })

    return {
      numberone,
      barConfig,
      pieConfig,
      roseConfig,
      lineConfig,
      funnelConfig,
      roseRef,
      barRef,
      pieRef,
      funnelRef,
      lineRef,
      anData,
      goodsAmountList,
      backgrounds,
      enter,
      baseCardConfig
    }
  }
})
</script>

<style lang="less" scoped>
.row {
  margin-top: 10px;
}
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card-foot {
  display: flex;
  justify-content: space-around;
  align-items: center;

  .left {
    font-size: 14px;
  }
  .ritght {
    font-size: 24px;
  }
}
</style>
