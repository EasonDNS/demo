<template>
  <div class="">
    <el-dialog v-model="isShowDig" destroy-on-close width="40%" center>
      <!-- <template #title>
        <el-button>
          {{ config.pageName }}
        </el-button>
      </template> -->

      <jxls-form
        :searchFormConfig="config"
        v-model="formData"
        @handleReset="handleReset"
        @handleReSearch="handleReSearch"
      >
      </jxls-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import jxlsForm from '@/baseui/form/src/form.vue'
export default defineComponent({
  name: 'dialogname',
  props: {
    config: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  components: {
    jxlsForm
  },
  emits: ['update:modelValue'],
  setup(prop, content) {
    const formData = ref({
      ...prop.modelValue
    })
    watch(
      formData,
      (newValue) => {
        content.emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )
    const isShowDig = ref(true)
    const handleReset = () => {
      console.log(1)
    }
    const handleReSearch = (data: any) => {
      console.log(data)
    }
    return {
      formData,
      isShowDig,
      handleReset,
      handleReSearch
    }
  }
})
</script>
<style lang="less" scoped>
.footer {
  text-align: center;
}
</style>
