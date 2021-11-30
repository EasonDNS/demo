<template>
  <div class="">
    <el-dialog
      v-model="isShowDig"
      destroy-on-close
      width="40%"
      center
      ref="dialogRef"
      @open="dialogOpen"
      @close="dialogClose"
    >
      <jxls-form
        :searchFormConfig="config"
        v-model="formData"
        @handleReset="handleReset"
        @handleReSearch="handleReSearch"
      >
        <template #departmentId="scop">
          <span> {{ scop.row }} </span>
        </template>
        <template #role="scop">
          <span>
            {{ scop.row }}
          </span>
        </template>
      </jxls-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

import { ElDialog } from 'element-plus'

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
    const isShowDig = ref(false)
    const formData = ref({
      ...prop.modelValue
    })
    const dialogRef = ref<InstanceType<typeof ElDialog>>()
    watch(
      formData,
      (newValue) => {
        content.emit('update:modelValue', newValue)
      },
      {
        immediate: true,
        deep: true
      }
    )

    const handleReset = () => {
      console.log(1)
    }
    const handleReSearch = (data: any) => {
      console.log(data)
    }
    // 外部调用 了这个函数 去设置 dialog 的model值 为true 因为这里也是一个回调所以会调用 两次
    const dialogOpen = () => {
      isShowDig.value = true
    }
    const dialogClose = () => {
      // console.log('dialogClose')
      isShowDig.value = false
    }
    return {
      formData,
      isShowDig,
      dialogRef,
      handleReset,
      handleReSearch,
      dialogOpen,
      dialogClose
    }
  }
})
</script>
<style lang="less" scoped>
.footer {
  text-align: center;
}
</style>
