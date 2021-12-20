<template>
  <div class="overview">
    <el-button @click="btn">测试</el-button>

    <el-table
      :data="arr"
      stripe
      highlight-current-row
      border
      :row-class-name="rowClassName"
      @cell-mouse-enter="cellMouseEnter"
    >
      <el-table-column prop="name"></el-table-column>
      <el-table-column prop="age"></el-table-column>
    </el-table>
    <hr />
    <ul>
      <li v-for="item of arr" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

import gsap from 'gsap'
export default defineComponent({
  name: 'overview',
  setup() {
    const arr = ref([
      {
        name: 'jxls',
        age: 18
      },
      {
        name: 'eason',
        age: 19
      },
      {
        name: 'xiao',
        age: 99
      },
      {
        name: 'bai',
        age: 19
      }
    ])

    const isShow = ref(true)
    const rowClassName = (row: any) => {
      // console.log(row)
      // console.log(rowIndex)
    }
    const num = Math.random() * arr.value.length
    const btn = () => {
      // arr.value.pop()
      arr.value.splice(num, 1)
    }
    const cellMouseEnter = (data: any) => {
      console.log('data.row :>> ', data)
      // gsap.from(data.cell, { duration: 4, x: 500 })
    }
    return {
      arr,
      isShow,
      rowClassName,
      btn,
      cellMouseEnter
    }
  }
})
</script>
<style lang="less" scoped>
.overview {
  text-align: left;
}
</style>
