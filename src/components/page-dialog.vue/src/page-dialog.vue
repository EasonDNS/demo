<template>
  <div class="page-dialog">page-dialog</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'page-dialog',
  setup() {
    const msg = ref('msg in app')
    return { msg }
  }
})
</script>
<style lang="less" scoped></style>
