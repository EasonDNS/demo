<template>
  <div class="overview">
    <hr />
    <el-row :gutter="10">
      <el-col :span="8">
        <jxls-card :cardConfig="cardConfig"
          >ssssskikddddddssssssssssssssssssssssssssssssssssssssddddddddddd
        </jxls-card>
      </el-col>
      <el-col :span="8">
        <jxls-card :cardConfig="cardConfig"> </jxls-card>
      </el-col>
      <el-col :span="8">
        <jxls-card :cardConfig="cardConfig"> </jxls-card>
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
