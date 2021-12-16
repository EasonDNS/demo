<template>
  <div class="overview">
    <hr />
    <el-row :gutter="10">
      <el-col :span="12">
        <jxls-card sb="sssssssssssiii"> 000</jxls-card>
      </el-col>
      <el-col :span="12">
        <jxls-card title="我是头部"> 000</jxls-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import jxlsCard from '@/baseui/card'

const cardConfig = reactive({
  title: 'overview-test'
})
</script>

<style scoped></style>
