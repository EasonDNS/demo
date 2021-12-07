<!-- -------------------------pageform-


pageform : 接受一个 data  来初始化 pagedata 的值, 但以后不会再去改变父组件的值 ,只是做一个初始化

要拿最新的值需要 ref 拿到 pageform 这个子组件.. 再去拿 pagedata




--------------------------- -->

<template>
  <div class="page-form">
    <jxls-form
      ref="jxlsFormRef"
      :formConfig="pageFormConfig"
      v-model="pageData"
      @handleReSearch="handleReSearch"
      @handleChange="handleChange"
      @handleReset="handleReset"
      @handleVisibleChange="handleVisibleChange"
    >
      <template v-for="item of slotNames" :key="item.field" #[item.slotName]>
        <template v-if="item.slotName">
          <slot :name="item.slotName"></slot>
        </template>
      </template>
    </jxls-form>
    <hr />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import { mapName } from '@/utils'
import { useStore } from '@/store'
import jxlsForm from '@/baseui/form/src/form.vue'
export default defineComponent({
  name: 'page-form',
  components: { jxlsForm },
  props: {
    pageFormConfig: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  emits: ['handleResearch', 'handleVisibleChange'],
  setup(props, content) {
    const store = useStore()
    const pageData = ref<any>({})

    // 重置基础数据
    const resetData = () => {
      for (const item of props.pageFormConfig.formItems) {
        pageData.value[item.field] = props.data[item.field]
      }
    }
    resetData()
    const handleReset = () => {
      resetData()
      store.dispatch(
        mapName.page(props.pageFormConfig.pageName).queryAction!,
        pageData.value
      )
    }

    const jxlsFormRef = ref<InstanceType<typeof jxlsForm>>()
    const handleReSearch = () => {
      jxlsFormRef.value?.formRef?.validate((vali) => {
        if (vali) {
          content.emit('handleResearch', pageData.value)
        }
      })
    }
    const slotNames = ref<any[]>([])
    props.pageFormConfig.formItems.forEach((item: any) => {
      if (item.slotName) {
        slotNames.value.push(item)
      }
    })

    const handleChange = (data: any) => {
      console.log(data)
      console.log('+++++++++++++++')
    }
    const handleVisibleChange = (item: any) => {
      content.emit('handleVisibleChange', item)
    }
    return {
      jxlsFormRef,
      slotNames,
      pageData,
      handleReset,
      handleReSearch,
      handleChange,
      handleVisibleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
