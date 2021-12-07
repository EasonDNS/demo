<template>
  <div class="ssss">ssss</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ssss',
  setup() {
    const msg = ref('msg in app')
    return { msg }
  }
})
</script>
<style lang="less" scoped></style>
