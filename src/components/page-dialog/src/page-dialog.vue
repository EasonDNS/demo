<template>
  <div class="page-dialog">
    <el-dialog
      v-model="isShowDialog"
      :title="pageDialogConfig.pageName"
      center
      :destroy-on-close="true"
    >
      <page-form
        :pageFormConfig="pageDialogConfig"
        @handleResearch="handleReSearch"
      ></page-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { IForm } from '@/baseui/form/src/type'
import pageForm from '@/components/page-form'
export default defineComponent({
  name: 'page-dialog',
  emits: ['dialogresearch'],
  props: {
    pageDialogConfig: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    btn: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  components: {
    pageForm
  },
  setup(props, content) {
    const handleReSearch = (pageformData: any) => {
      content.emit('dialogresearch', pageformData)
    }
    const isShowDialog = ref(true)
    const dialogData = ref({ ...props.data })
    return { dialogData, isShowDialog, handleReSearch }
  }
})
</script>
<style lang="less" scoped></style>
