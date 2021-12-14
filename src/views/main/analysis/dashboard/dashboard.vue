<template>
  <div class="dashbaord">
    <hr />
    <el-row :gutter="10">
      <el-col :span="8">
        <jxls-card>
          <base-echarts :width="'100%'" :height="'100%'"></base-echarts>
        </jxls-card>
      </el-col>
      <el-col :span="8"> </el-col>
      <el-col :span="8"> </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, defineComponent } from 'vue'
import { useStore } from '@/store'

import jxlsCard from '@/baseui/card'
import baseEcharts from '@/baseui/echarts'
export default defineComponent({
  components: { jxlsCard, baseEcharts },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('dashboardModule/queryDashboardAction')
    })

    //发送Action
    return {}
  }
})
</script>

<style scoped></style>
