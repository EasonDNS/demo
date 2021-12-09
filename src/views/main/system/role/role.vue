<template>
  <div class="roles">
    <page-form :pageFormConfig="pageFormConfig"></page-form>
    <page-content
      ref="pageContentRef"
      :listData="listData"
      :pageDialogConfig="pageDialogConfig"
      :pageContentConfig="pageContentConfig"
      @handleEdit="handleEdit"
    >
      <template #menuList>
        <!-- <el-tree-v2
          ref="eltreeRef"
          hight-current
          check-on-click-node
          show-checkbox
          :data="menuList"
          :default-checked-keys="defaultCheckedKeys ?? []"
          :props="defaultProps"
          @check-change="checkChange"
        >
          <template #default="{ node }">
            <el-icon>
              <edit />
            </el-icon>
            {{ node.label }}
          </template>
        </el-tree-v2> -->

        <el-tree
          ref="eltreeRef"
          accordion
          expand-on-click-node
          show-checkbox
          node-key="id"
          :default-checked-keys="defaultCheckedKeys"
          :data="menuList"
          :props="defaultProps"
          @check-change="checkChange"
        >
        </el-tree>
      </template>
    </page-content>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from '@/store'

import { pageFormConfig } from './config/pageFormConfig'
import { pageContentConfig } from './config/pageContentConfig'
import { pageDialogConfig } from './config/pageDialogConfig'

import pageForm from '@/components/page-form'
import pageContent from '@/components/page-content'

import { ElTreeV2, ElTree } from 'element-plus'
import { mapName } from '@/utils'

export default defineComponent({
  name: 'roles',
  components: { pageForm, pageContent },
  setup() {
    const pageContentRef = ref<InstanceType<typeof pageContent>>()
    const store = useStore()
    const eltreeRef = ref<InstanceType<typeof ElTree>>()
    onMounted(() => {
      store.dispatch('roleModule/queryRoleAction')
      store.dispatch('menuModule/queryMenuAction')
    })

    const list = computed(() => store.state.roleModule.list)
    const totalCount = computed(() => store.state.roleModule.totalCount)
    const listData = ref<any>({
      list,
      totalCount
    })
    const menuList = computed(() => store.state.menuModule.list)
    const defaultCheckedKeys = ref<any[]>([])
    const checkChange = () => {
      if (eltreeRef.value) {
        // 得到半选的所有 KEY
        const getHalfCheckedKeys = eltreeRef.value.getHalfCheckedKeys()
        console.log('getHalfCheckedKeys :>> ', getHalfCheckedKeys)
        // 得到半选的所有 节点
        const getHalfCheckNodes = eltreeRef.value.getHalfCheckedNodes()
        // console.log('getHalfCheckNodes :>> ', getHalfCheckNodes)
        // 获取某个节点的数据 传 key 或者 data
        const getNode = eltreeRef.value.getNode(38)
        // console.log('getNode :>> ', getNode)
        // 获取所有被选中的 key  getCheckedKeys(true) 需要传一个boolen值
        // 这个Boolen值  控制是否是只选择子节点.为 true 时 只返回 子节点 所有的被选中的节点 key
        // false 时会监听父节点的选中状态..半选不会被加入 它会全局监听所有被选中的 key
        const getCheckedKeys = eltreeRef.value.getCheckedKeys(false)
        console.log('getcheckedkeys :>> ', getCheckedKeys)
        if (pageContentRef.value) {
          const dialogformdata = pageContentRef.value.pageDialogRef?.dialogData
          dialogformdata.menuList = getCheckedKeys.concat(getHalfCheckedKeys)
        }
      }
    }
    // 监听 pagecontent 传递出来的编辑按钮点击事件
    const handleEdit = (item: any) => {
      defaultCheckedKeys.value = mapName.getid(list.value, item.id)
    }
    // 这是测试哪些设置哪些可以被 选择 即前边的选择框 但不影响其子选项先中他会是半先状态...
    const test = (pay: any) => {
      if (pay.type === 5) {
        return true
      } else {
        return false
      }
    }
    const defaultProps = ref({
      children: 'children',
      label: 'name',
      disabled: test
    })
    return {
      pageFormConfig,
      pageContentConfig,
      pageDialogConfig,
      eltreeRef,
      pageContentRef,
      listData,
      menuList,
      defaultCheckedKeys,
      defaultProps,
      checkChange,
      handleEdit
    }
  }
})
</script>
<style lang="less" scoped></style>
