<template>
  <div class="page-dialog">
    <el-dialog
      v-model="isShowDialog"
      :title="pageDialogConfig.pageName"
      center
      :destroy-on-close="true"
    >
      <jxls-form
        :formConfig="pageDialogConfig"
        v-model="dialogData"
        @handleReSearch="dialogResearch"
        @handleVisibleChange="handleVisibleChange"
      ></jxls-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import jxlsForm from '@/baseui/form/src/form.vue'
import { IPageDialogConfig } from './type'
export default defineComponent({
  name: 'page-dialog',
  emits: ['dialogResearch', 'handleVisibleChange'],
  props: {
    pageDialogConfig: {
      type: Object as PropType<IPageDialogConfig>,
      required: true
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    jxlsForm
  },
  setup(props, content) {
    const isShowDialog = ref(false)
    const dialogData = ref<any>({ ...props.data })
    // 监听到form中的hadleResearch 并把pagedata发出
    const dialogResearch = () => {
      content.emit('dialogResearch', dialogData.value)
    }
    const handleVisibleChange = (item: any) => {
      content.emit('handleVisibleChange', item)
    }
    return { isShowDialog, dialogData, dialogResearch, handleVisibleChange }
  }
})
</script>
<style lang="less" scoped></style>
