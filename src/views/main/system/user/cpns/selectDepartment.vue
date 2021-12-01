<template>
  <div class="select-deparment">
    {{ selsectValue }}

    <el-select
      v-model="selsectValue"
      placeholder="修改到部门~"
      @visible-change="visibleChange"
      @change="handleChange"
    >
      <el-option
        v-for="item of departmentList"
        :key="item.id"
        :value="item.id"
        :label="item.name"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'

import { useStore } from '@/store'
export default defineComponent({
  name: 'select-deparment',
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  emits: ['handleChange'],
  setup(prop, content) {
    const store = useStore()

    const departmentName = ref([])

    const departmentList = computed(
      () => store.state.departmentModule.departmentList
    )
    const selsectValue = ref({})

    const visibleChange = (va: any) => {
      store.dispatch('departmentModule/getDepartmentListAction')
    }
    const handleChange = (val: any) => {
      selsectValue.value = val
      content.emit('handleChange', val)
    }
    return {
      departmentName,
      departmentList,
      selsectValue,
      visibleChange,
      handleChange
    }
  }
})
</script>
<style lang="less" scoped></style>
