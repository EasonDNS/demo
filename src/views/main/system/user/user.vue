<template>
  <div class="">
    <h1>msg</h1>
    <jxls-form
      :searchFormConfig="searchFormConfig"
      v-model="formData"
    ></jxls-form>
  </div>
  <hr />
  <div>
    <jxls-table :tableConfig="tableConfig" :listData="listData"></jxls-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue'
import { jxlsTable } from '@/baseui/tabel'
import { jxlsForm } from '@/baseui/form'

import { useStore } from '@/store'

import { searchFormConfig } from './config/formConfig'
import { tableConfig } from './config/tableConfig'
export default defineComponent({
  components: { jxlsForm, jxlsTable },
  setup() {
    const formData = ref({})
    const store = useStore()
    const listData = computed(() => store.state.userModule.userList)

    onMounted(() => {
      store.dispatch('userModule/getUserDataAction', { url: '/users/list' })
    })

    return {
      searchFormConfig,
      tableConfig,
      formData,
      listData
    }
  }
})
</script>
<style lang="less" scoped></style>
