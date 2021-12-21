<template>
  <div class="regester">
    <div class="content">
      <h2>注册用户</h2>
      <page-form
        :pageFormConfig="regesterConfig"
        @handleVisibleChange="handleVisibleChange"
        @handleResearch="handleReSearch"
      ></page-form>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { regesterConfig } from './config/regester'
import pageForm from '@/components/page-form'

import { mapName } from '@/utils'

export default defineComponent({
  name: 'regester',

  components: { pageForm },
  setup() {
    const msg = ref('msg in app')
    const store = useStore()
    onMounted(() => {
      store.dispatch('roleModule/queryRoleAction')
      store.dispatch('departmentModule/queryDepartmentAction')
    })

    const roleList = computed(() => store.state.roleModule.list)
    const departmentList = computed(() => store.state.departmentModule.list)

    const handleVisibleChange = (item: any) => {
      if (item.field === 'roleId') {
        mapName.visible(
          roleList.value,
          regesterConfig,
          'roleId',
          'id',
          'name',
          item
        )
      }
      if (item.field === 'departmentId') {
        mapName.visible(
          departmentList.value,
          regesterConfig,
          'departmentId',
          'id',
          'name',
          item
        )
      }
    }
    const handleReSearch = (formdata: any) => {
      console.log(formdata)
      store.dispatch('userModule/regesterUserAction', formdata)
    }
    return {
      msg,
      regesterConfig,
      handleVisibleChange,
      handleReSearch
    }
  }
})
</script>
<style lang="less" scoped>
.regester {
  width: 100%;
  height: 100%;
  display: flex;

  .content {
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

<style lang="less">
// .el-select {
//   width: 100%;
// }
</style>
