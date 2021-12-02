<template>
  <div class="page-dialog">
    <el-dialog v-model="isShowDialog">
      <jxls-form
        class="jxls-form"
        :searchFormConfig="dialogConfig"
        v-model="formData"
        @handleReSearch="handleReSearch"
        @handleVisibleChange="handleVisibleChange"
        @handleReset="handleReset"
        @handleChange="handleChange"
        ref="jxlsFormRef"
      ></jxls-form>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'

// import { pageDialogConfig } from './config/pageDialogConfig'
// import { pageDialogConfig } from './config/pageDialogConfig'
import { dialogConfig } from './config/dialogConfig'
import jxlsForm from '@/baseui/form/src/form.vue'

import { useStore } from '@/store'

export default defineComponent({
  name: 'page-dialog',
  components: { jxlsForm },
  setup() {
    const store = useStore()
    const roleList = computed(() => store.state.roleModule.roleList)
    const departmentList = computed(
      () => store.state.departmentModule.departmentList
    )
    const isShowDialog = ref(false)
    const formData = ref({})
    const jxlsFormRef = ref<InstanceType<typeof jxlsForm>>()
    const handleReSearch = () => {
      store.dispatch('userModule/resRegesterUserAction', formData.value)
      isShowDialog.value = false
      // store.dispatch('userModule/getUserDataAction')
    }
    const handleChange = () => {
      console.log(1)
    }
    const handleReset = () => {
      console.log('handleReset')
    }
    const handleVisibleChange = (payload: any) => {
      console.log(payload)

      // console.log(roleList.value)
      payload.selectOptions = []
      if (payload.field === 'roleId') {
        roleList.value.forEach((item: any) => {
          payload.selectOptions.push({
            value: item.id,
            label: item.name
          })
        })
      } else if (payload.field === 'departmentId') {
        departmentList.value.forEach((item: any) => {
          payload.selectOptions.push({
            value: item.id,
            label: item.name
          })
        })
      }
    }
    return {
      isShowDialog,
      formData,
      dialogConfig,
      // pageDialogConfig,
      jxlsFormRef,
      handleChange,
      handleReset,
      handleReSearch,
      handleVisibleChange
    }
  }
})
</script>
<style lang="less" scoped>
.jxls-form {
  text-align: left;
}
</style>
