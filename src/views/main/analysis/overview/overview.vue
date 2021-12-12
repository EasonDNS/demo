<template>
  <div class="overview">
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

<script lang="ts" setup>
import { reactive } from 'vue'

import jxlsCard from '@/baseui/card'

const jxlsCardConfig = reactive({
  header: {
    title: 'Echarts-one'
  }
})
</script>

<style scoped></style>
