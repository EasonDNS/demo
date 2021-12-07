<template>
  <div class="dashboard">dashboard</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const msg = ref('msg in app')
    return { msg }
  }
})
</script>
<style lang="less" scoped></style>
