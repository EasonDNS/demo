<template>
  <div class="goods">goods</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'goods',
  setup() {
    const msg = ref('msg in app')
    return { msg }
  }
})
</script>
<style lang="less" scoped></style>
