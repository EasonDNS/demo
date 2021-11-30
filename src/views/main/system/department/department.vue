<template>
  <div class="department">
    <h2>department</h2>

    <hr />
    <jxls-form
      :searchFormConfig="searchFormConfig"
      v-model="formData"
      @handleReSearch="handleReSearch"
      @handleReset="handleReset"
    ></jxls-form>
    <hr />
    <jxls-table :tableConfig="tableConfig" :listData="listData"></jxls-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { searchFormConfig } from './config/searchFormConfig'
import jxlsForm from '@/baseui/form/src/form.vue'
import { tableConfig } from './config/tableConfig'
import jxlsTable from '@/baseui/tabel/src/table.vue'
export default defineComponent({
  name: 'department',
  components: {
    jxlsForm,
    jxlsTable
  },
  setup() {
    const store = useStore()
    const formData: any = ref({})
    onMounted(() => {
      store.dispatch('departmentModule/getDepartmentListAction')
    })
    const handleReset = () => {
      store.dispatch('departmentModule/getDepartmentListAction')
    }
    const handleReSearch = () => {
      console.log(formData.value)
      store.dispatch(
        'departmentModule/getDepartmentListAndQueryAction',
        formData.value
      )
    }
    const listData = computed(() => store.state.departmentModule.departmentList)
    return {
      searchFormConfig,
      tableConfig,
      listData,
      formData,
      handleReSearch,
      handleReset
    }
  }
})
</script>

<style scoped></style>
