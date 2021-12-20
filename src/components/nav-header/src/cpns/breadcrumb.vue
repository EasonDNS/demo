<template>
  <div class="breadcrumb">
    <el-breadcrumb>
      <el-breadcrumb-item v-if="openFatherItem">
        <strong> {{ openFatherItem }}</strong>
      </el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="item of breadArrs"
        :key="item.id"
        :to="item.url"
      >
        <el-alert
          :title="item.name"
          type="info"
          :center="true"
          @close="handleAlertClose(item)"
        >
        </el-alert>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import { mapMenu } from '@/utils'
import { mitt } from '@/services'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'breadcrumb',
  setup() {
    const store = useStore()
    const route = useRoute()
    const breadArrs: any = ref([])

    onMounted(() => {
      const defautItem = mapMenu.findByPath(userMenuList, route.path)
      // 在挂载的时候去拿到path 再去查询到item  因为有一个firstmenu 所以去填充他就能正常显示 了.
      breadArrs.value.fill(defautItem)
    })
    const userMenuList = store.state.loginModule.userMenuList
    const handleAlertClose = (pay: any) => {
      const rmMenu = breadArrs.value.find((menu: any) => {
        return pay.url === menu.url
      })
      const key = breadArrs.value.indexOf(rmMenu)
      breadArrs.value.splice(key, 1)
    }
    let openFatherItem: any = ref()
    let openSubItem: any = ref()
    breadArrs.value.push(mapMenu.firstMenu)
    mitt.on('handleOpen', (item: any) => {
      openFatherItem.value = mapMenu.findByPath(userMenuList, item).name
      // console.log(mapMenu.firstMenu)
    })

    openSubItem.value = mapMenu.findByPath(userMenuList, route.path).name
    mitt.on('handleSelect', (item: any) => {
      const menu = mapMenu.findByPath(userMenuList, item)
      openSubItem.value = menu.name

      const a = breadArrs.value.find((key: any) => {
        return menu.url === key.url
      })
      if (!a) {
        breadArrs.value.push(menu)
      }
    })

    return {
      openSubItem,
      openFatherItem,
      breadArrs,
      handleAlertClose
    }
  }
})
</script>
<style lang="less" scoped>
.el-alert__title {
  display: inline-block;
  margin-right: 5px;
}

.el-breadcrumb__item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.el-breadcrumb {
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    padding-left: 5px;
  }
}
.el-alert__content {
  .el-icon {
    padding-left: 5px;
  }
}
</style>
