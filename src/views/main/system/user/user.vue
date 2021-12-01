<template>
  <div class="">
    <jxls-form
      :searchFormConfig="searchFormConfig"
      v-model="formData"
      @handleReset="handleReset"
      @handleReSearch="handleReSearch"
    ></jxls-form>
    <div></div>
  </div>
  <hr />
  <div>
    <user-dialog
      :config="dialogConfig"
      v-model="dialogData"
      ref="userdialogRef"
    ></user-dialog>
  </div>
  <hr />
  <div>
    <jxls-table
      :tableConfig="tableConfig"
      :listData="listData"
      @handleEdit="handleEdit"
      @handleRemove="handleRemove"
      @handleRegester="handleRegester"
    >
      <template #status="scop">
        <template v-if="scop.row.enable === 1">
          <el-button type="primary" size="mini" plain>正常</el-button>
        </template>
        <template v-else-if="scop.row.enable === 0">
          <el-button type="danger" size="mini" plain>掉线</el-button>
        </template>
      </template>

      <template #departmentId="scop">
        {{ mapName.findDeparmentNamebyId(scop.row.departmentId) }}
      </template>
    </jxls-table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, onMounted } from 'vue'

import { useStore } from '@/store'

import userDialog from './cpns/userDialog.vue'
import { searchFormConfig } from './config/searchFormConfig'
import jxlsForm from '@/baseui/form/src/form.vue'
import { jxlsTable } from '@/baseui/tabel'
import { tableConfig } from './config/tableConfig'

import { dialogConfig } from './config/dialogConfig'
import { mapMenu, mapName } from '@/utils'
import { day } from '@/utils'
export default defineComponent({
  components: { jxlsForm, jxlsTable, userDialog },
  setup() {
    const formData = ref({})
    const store = useStore()

    const dialogData: any = ref({})
    // const dialogConfig = ref({})
    const userdialogRef = ref<InstanceType<typeof userDialog>>()

    const listData = computed(() => store.state.userModule.userList)

    onMounted(() => {
      store.dispatch('userModule/getUserDataAction', { url: '/users/list' })
    })

    const handleReset = () => {
      store.dispatch('userModule/getUserDataAction', { url: 'users/list' })
    }
    const handleReSearch = (data: any) => {
      const a = day.format(data[0])
      store.dispatch('userModule/resSearchUserDataAction', formData.value)
    }

    const handleRegester = () => {
      console.log(1)
    }
    const isRight = mapMenu.verificationJurisdiction('system:users:create')
    // console.log('====================')
    // console.log(isRight)
    // console.log('====================')
    const handleEdit = (row: any) => {
      for (const prop in row) {
        dialogData.value[prop] = row[prop]
      }
      userdialogRef.value?.dialogOpen()
    }
    const handleRemove = (scop: any) => {
      console.log(scop)
    }

    return {
      searchFormConfig,
      dialogConfig,
      tableConfig,
      userdialogRef,
      formData,
      listData,
      handleRegester,
      dialogData,
      handleReset,
      handleReSearch,
      handleEdit,
      handleRemove,
      mapName
    }
  }
})
</script>
<style lang="less" scoped></style>
