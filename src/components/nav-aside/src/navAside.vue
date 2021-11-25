<template>
  <div class="nav-asdie">
    <el-menu
      v-bind="defaultUserMenuStyle"
      :default-active="defaultActive"
      :collapase="isFold"
      @open="handleOpen"
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
              <strong>
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
import { defineComponent, ref, reactive, computed } from 'vue'

import { useStore } from '@/store'

import { mitt } from '@/services'
export default defineComponent({
  components: {},
  setup() {
    const store = useStore()

    const defaultUserMenuStyle = ref({
      backgroundColor: '#FF6F61',
      activeTextColor: '#007070',
      router: true
    })

    const isFold: any = ref(false)
    mitt.on('isFold', (pay) => {
      isFold.value = pay
      console.log(isFold.value)
    })
    // 默认需要打开的第一个子菜单
    const defaultActive = '/main/analysis/overview'

    // 这里监听 的是 菜单的打开  elsubmenu 会返回 type 1的 index 菜单
    const handleOpen = (pay: any) => {
      console.log(pay)
    }
    const userMenuList = computed(() => store.state.loginModule.userMenuList)
    return {
      userMenuList,
      defaultUserMenuStyle,
      isFold,
      defaultActive,
      handleOpen
    }
  }
})
</script>
<style lang="less" scoped>
.nav-aside {
  height: 100%;
  // background-color: rgba(190, 223, 45, 0.87);
}
</style>
