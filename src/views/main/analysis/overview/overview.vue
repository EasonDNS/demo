<template>
  <div class="overview">
    <hr />
    <el-row :gutter="10">
      <el-col :span="24" class="one">
        <el-table
          :data="userInfo"
          :row-style="rowStyle"
          size="small"
          highlight-current-row
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column type="expand"></el-table-column>
          <el-table-column type="index"></el-table-column>
          <el-table-column
            label="id"
            prop="id"
            class-name="id"
            label-class-name="labelclassname"
            fixed
          >
          </el-table-column>
          <el-table-column label="cellphone" prop="cellphone">
          </el-table-column>
          <el-table-column label="name" prop="name"> </el-table-column>
          <el-table-column label="realname" prop="realname"> </el-table-column>
          <el-table-column label="createAt" prop="createAt"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <hr />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { localcach } from '@/utils'
export default defineComponent({
  name: 'overview',
  components: {},
  setup() {
    const userInfo = localcach.get('userInfo')
    const tabelColors = ref<string[]>([
      'linear-gradient(to right, #159957, #155799)',
      'linear-gradient( 135deg, #5EFCE8 50%, #736EFE 100%)'
    ])

    const rowStyle = (pay: any) => {
      const index = pay.rowIndex
      if (index % 2) {
      }
    }
    return {
      userInfo,

      rowStyle
    }
  }
})
</script>
<style lang="less" scoped>
.overview {
  text-align: left;

  .id {
    background: orangered;
  }
  .labelclassname {
    background-color: #bfa;
  }
}
</style>
<style lang="less">
.one {
  // .id {
  //   background: orangered;
  // }
  .l3 {
    // background-color: rgba(205, 233, 206, 0.8);
    background-color: red;
  }
  .l2 {
    background-color: rgb(76, 0, 255);
    // background-color: rgb(184, 236, 243);
  }
  .l1 {
    background-color: yellowgreen;
    // background-color: rgb(255, 249, 200);
  }
}
</style>
