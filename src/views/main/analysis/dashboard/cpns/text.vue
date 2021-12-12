<template>
  <div></div>
</template>

<script lang="ts" setup>
import { EChartsOption } from 'echarts'
import { ref, defineProps, withDefaults, defineEmits, defineExpose } from 'vue'

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '400px'
  }
)
</script>

<style scoped></style>
