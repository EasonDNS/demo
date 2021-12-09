<template>
  <div class="page-dialog">
    <el-dialog
      v-model="isShowDialog"
      :title="pageDialogConfig.pageName"
      center
      destroy-on-close
    >
      <jxls-form
        :formConfig="pageDialogConfig"
        v-model="dialogData"
        @handleReSearch="dialogResearch"
        @handleVisibleChange="handleVisibleChange"
      >
        //把所有的插槽再次提交出去...
        <template v-for="item of formSlots" :key="item" #[item]="scop">
          <slot :name="item" :row="scop"></slot>
        </template>
      </jxls-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'

import { mapName } from '@/utils'
import jxlsForm from '@/baseui/form/src/form.vue'
import { IPageDialogConfig } from './type'
export default defineComponent({
  name: 'page-dialog',
  // 发出的事件
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
    //拿配置文件里所有的插槽
    const formSlots = mapName.slots(props.pageDialogConfig.formItems)
    return {
      isShowDialog,
      dialogData,
      dialogResearch,
      formSlots,
      handleVisibleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
