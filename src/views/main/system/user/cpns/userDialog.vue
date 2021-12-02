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
        @handleVisibleChange="handleVisibleChange"
        @handleReset="handleReset"
        @handleReSearch="handleReSearch"
        @handleChange="handleChange"
        ref="jxlsFormRef"
      >
        <template #departmentId="scop">
          <span> {{ scop.row.name }} </span>
        </template>
        <template #role="scop">
          <span>
            {{ scop.row }}
          </span>
        </template>
        <!-- <template #createAt="scop">
          <el-date-picker></el-date-picker>
        </template> -->
      </jxls-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

import { ElDialog } from 'element-plus'

import { day } from '@/utils'
import jxlsForm from '@/baseui/form/src/form.vue'
import { useStore } from '@/store'
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
    const store = useStore()
    const jxlsFormRef = ref<InstanceType<typeof jxlsForm>>()
    const departmentList = computed(
      () => store.state.departmentModule.departmentList
    )
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

    const handleVisibleChange = () => {
      const departmentItem = prop.config.formItems.find((item: any) => {
        return item.field === 'departmentId'
      })
      departmentItem.selectOptions = []
      departmentList.value.forEach((item: any) => {
        departmentItem.selectOptions.push({ value: item.id, label: item.name })
      })
    }
    const handleChange = (pay: any) => {
      // console.log(prop.config.formItems)
    }
    const handleReset = () => {
      console.log(1)
    }
    const handleReSearch = (itemData: any) => {
      const data = ref<any>({})
      for (const item of prop.config.formItems) {
        if (item.type === 'datepicker') {
          data.value[`${item.field}`] = day.format(itemData[`${item.field}`])
        } else {
          data.value[`${item.field}`] = itemData[`${item.field}`]
        }
      }
      store.dispatch('userModule/resPatchUserDataAction', data.value)
      store.dispatch('userModule/getUserDataAction', { url: '/users/list' })
      isShowDig.value = false
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
      handleChange,
      handleReset,
      handleReSearch,
      handleVisibleChange,
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
