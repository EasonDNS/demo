<template>
  <div class="nav-asdie">
    <div class="header">
      <div class="image" ref="imgRef">
        <el-image :src="require('/src/assets/girl.jpg')" fit="contain" />
      </div>
      <template v-if="!isCollapse">
        <strong class="title">吉祥超市</strong>
      </template>
    </div>
    <el-menu
      v-bind="defaultUserMenuStyle"
      :default-active="defaultActive"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <template v-for="item of userMenuList" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.url">
            <template #title>
              <template v-if="item.name === '系统总览'">
                <el-icon>
                  <monitor />
                </el-icon>
              </template>

              <template v-if="item.name === '系统管理'">
                <el-icon> <setting /> </el-icon>
              </template>

              <template v-if="item.name === '商品中心'">
                <el-icon>
                  <goods />
                </el-icon>
              </template>

              <template v-if="item.name === '随便聊聊'">
                <el-icon>
                  <chatLineRound />
                </el-icon>
              </template>
              <strong v-if="!isCollapse">
                {{ item.name }}
              </strong>
            </template>

            <template v-for="subitem of item.children" :key="subitem.id">
              <template v-if="subitem.type === 2">
                <el-menu-item :index="subitem.url">
                  <template #title>
                    <span>
                      {{ subitem.name }}
                    </span>
                  </template>
                </el-menu-item>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import { gsap } from 'gsap'
import { useStore } from '@/store'
import { mapMenu } from '@/utils'
import { mitt } from '@/services'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()
    const route = useRoute()

    const imgSize = ref('60px')
    const defaultUserMenuStyle = ref({
      backgroundColor: '#545c64',
      textColor: '#fff',
      activeTextColor: '#ffd04b',
      router: true,
      collapseTransition: false
    })
    const imgRef = ref()
    const isCollapse: any = ref(false)
    mitt.on('isFold', (pay) => {
      isCollapse.value = pay
      if (isCollapse.value) {
        gsap.to('.image', { duration: 0.5, width: 30 })
        gsap.to('.title', { duration: 0.5, opacity: 0 })
      } else {
        gsap.to('.image', { duration: 0.5, width: 60 })
      }
    })
    // 默认需要打开的第一个子菜单

    const defaultActive = ref(mapMenu.firstMenu.url)

    // 这里监听 的是 菜单的打开  elsubmenu 会返回 type 1的 index 菜单
    const handleOpen = (subitem: any) => {
      mitt.emit('handleOpen', subitem)
      // console.log(mapMenu.firstMenu)
      const a = mapMenu.findByPath(
        store.state.loginModule.userMenuList,
        route.path
      )
      defaultActive.value = a.url
    }
    const handleClose = (subitem: any) => {
      mitt.emit('handleClose', subitem)
      // console.log(subitem)
    }
    const handleSelect = (item: any) => {
      mitt.emit('handleSelect', item)
      // console.log(item)
    }

    const userMenuList = computed(() => store.state.loginModule.userMenuList)
    return {
      userMenuList,
      defaultUserMenuStyle,
      isCollapse,
      defaultActive,
      handleOpen,
      handleClose,
      handleSelect,
      imgSize,
      imgRef
    }
  }
})
</script>
<style lang="less" scoped>
.nav-asdie {
  // background-color: #545c64;
  .el-menu {
    // background-color: #fff;
  }
}
.el-menu {
  border-right: none;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #545c64;
  .image {
    width: 60px;
    padding-right: 5px;
  }
  strong {
    color: white;
  }
}
</style>
