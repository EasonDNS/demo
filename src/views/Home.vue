<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const msg = ref('home')
    return {
      msg
    }
  }
})
</script>
