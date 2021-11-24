<template>
  <div class="login">
    <div class="header"></div>

    <div class="content"></div>

    <div class="footer"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const msg = ref('msg in app')
    return {}
  }
})
</script>
<style lang="less" scoped></style>
