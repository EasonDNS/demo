<template>
  <div class="dashbaord">
    <hr />
    <el-row :gutter="10">
      <el-col :span="8">
        <jxls-card :cardConfig="jxlsCardConfig">
          <template #body> p jfdslsl </template>
        </jxls-card>
      </el-col>
      <el-col :span="8">
        <jxls-card :cardConfig="jxlsCardConfig">
          <template #body> p jfdslsl </template>
        </jxls-card>
      </el-col>
      <el-col :span="8">
        <jxls-card :cardConfig="jxlsCardConfig">
          <template #body> p jfdslsl </template>
        </jxls-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, defineComponent } from 'vue'
import jxlsCard from '@/baseui/card'
import { useStore } from '@/store'
export default defineComponent({
  components: { jxlsCard },
  setup() {
    const store = useStore()
    onMounted(() => {
      console.log('+++++++++++++++++++++')
      store.dispatch('dashboardModule/queryDashboardAction')
    })
    console.log('=================')
    const jxlsCardConfig = reactive({
      header: {
        title: 'Echarts-one'
      }
    })
    //发送Action
    return {
      jxlsCardConfig
    }
  }
})
</script>

<style scoped></style>
