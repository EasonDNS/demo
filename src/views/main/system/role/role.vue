<template>
  <div class="roles">
    <page-form :pageFormConfig="pageFormConfig"></page-form>
    <page-content
      :listData="listData"
      :pageDialogConfig="pageDialogConfig"
      :pageContentConfig="pageContentConfig"
    ></page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { mapName } from '@/utils'

import { pageFormConfig } from './config/pageFormConfig'
import { pageContentConfig } from './config/pageContentConfig'
import { pageDialogConfig } from './config/pageDialogConfig'

import pageForm from '@/components/page-form'
import pageContent from '@/components/page-content'

export default defineComponent({
  name: 'roles',
  components: { pageForm, pageContent },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('roleModule/queryRoleAction')
    })
    const list = computed(() => store.state.roleModule.list)
    const totalCount = computed(() => store.state.roleModule.totalCount)

    const listData = ref<any>({
      list,
      totalCount
    })
    return {
      pageFormConfig,
      pageContentConfig,
      pageDialogConfig,
      listData
    }
  }
})
</script>
<style lang="less" scoped></style>
