<template>
  <div class="page-content">
    <jxlstable
      :tableConfig="pageContentConfig"
      :listData="mapName.footerData(pageContentConfig.pageName).listData"
    >
      <template #footer>
        <n-button>sssssssssssssssssss</n-button>
        <n-pagination
          v-model:page="page"
          v-model:page-size="pageSize"
          :page-count="100"
          show-size-picker
          :page-sizes="[10, 20, 30, 40]"
        />
      </template>
    </jxlstable>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { mapName } from '@/utils'
import jxlstable from '@/baseui/tabel/src/table.vue'
export default defineComponent({
  name: 'page-content',
  components: { jxlstable },
  props: {
    pageContentConfig: {
      type: Object
    }
  },
  setup(props, content) {
    const page = ref(2)
    const pageSize = ref(20)
    return { mapName, page, pageSize }
  }
})
</script>
<style lang="less" scoped></style>
