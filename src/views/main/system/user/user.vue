<template>
  <div class="">
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue'

export default defineComponent({
  components: {},
  setup() {
    const msg = ref('msg in app')
    return {
      msg
    }
  }
})
</script>
<style lang="less" scoped></style>
