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
      // 把所有的插槽再重新分配给pageForm
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
import { defineComponent, PropType, ref } from 'vue'
import { useStore } from '@/store'

import { mapName } from '@/utils'

import { IPageFormConfig } from './type'
import jxlsForm from '@/baseui/form/src/form.vue'

export default defineComponent({
  name: 'page-form',
  emits: ['handleResearch', 'handleVisibleChange'],
  components: { jxlsForm },
  props: {
    pageFormConfig: {
      type: Object as PropType<IPageFormConfig>,
      required: true
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup(props, content) {
    const store = useStore()
    const pageData = ref<any>({})

    //  1,重置基础数据
    const resetData = () => {
      for (const item of props.pageFormConfig.formItems) {
        pageData.value[item.field] = props.data[item.field]
      }
    }
    resetData()
    // 2,拿到 form 所有的插槽
    const slotNames = ref<any[]>([])
    props.pageFormConfig.formItems.forEach((item: any) => {
      if (item.slotName) {
        slotNames.value.push(item)
      }
    })
    // 3, 监听到重置会去重新查询数据
    const handleReset = () => {
      resetData()
      store.dispatch(
        mapName.page(props.pageFormConfig.pageName).queryAction!,
        pageData.value
      )
    }

    const jxlsFormRef = ref<InstanceType<typeof jxlsForm>>()

    // 4, 监听到搜索验证是否符合规则,再发射出事件<handleResearch>
    const handleReSearch = () => {
      jxlsFormRef.value?.formRef?.validate((vali) => {
        if (vali) {
          store.dispatch(
            mapName.page(props.pageFormConfig.pageName).queryAction!,
            pageData.value
          )
          content.emit('handleResearch', pageData.value)
        }
      })
    }
    // 5,监听特殊事件 change <select> 中菜单改变事件
    const handleChange = (data: any) => {
      console.log(data)
      console.log('+++++++++++++++')
    }
    // 6, 监听特殊事件  visibleChange <select> 下拉菜单触发事件
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
