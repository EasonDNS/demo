<template>
  <div class="base-card">
    <!-- 头部 -->
    <div class="header">
      <div class="header-one">
        <!-- 头部 插入 -->
        <div
          class="header-body"
          :style="{
            background: config?.header?.background ?? transparent,
            width: config?.header?.width ?? '100%',
            height: config?.header?.height ?? '160px'
          }"
        >
          <!-- 头部插槽 header  -->
          <slot name="header">
            <!-- 头部 headerIcon 插槽  -->
            <slot name="headerIcon"
              ><el-icon :size="36" color="white"><coffee-cup /></el-icon>
            </slot>
          </slot>
        </div>
      </div>
    </div>
    <!-- 中间  -->
    <div
      class="content"
      :style="{ color: config?.content?.color ?? 'rgba(66, 66, 66, 0.5)' }"
    >
      <!-- 中间 content 插槽  -->
      <slot name="content"> 我是是间部分 </slot>
    </div>
    <!-- 中间分隔线 -->
    <!-- 自定义icon 的位置 -->
    <el-divider
      class="divider"
      :content-position="config?.content?.contentPosition ?? 'center'"
      v-if="config?.footer?.isShowFooter ?? true"
    >
      <!-- 中间分隔线 插槽 divider -->
      <slot name="divider">
        <el-icon class="is-loading"><sort /></el-icon>
      </slot>
    </el-divider>
    <!-- 尾部  -->
    <div class="footer" v-if="config?.footer?.isShowFooter ?? true">
      <!-- 尾部左边插槽 两个  footterIcon   /    footer  -->
      <div class="footer-left">
        <slot name="footerLeft">
          <el-link
            type="danger"
            :href="config?.footer?.url ?? '#'"
            :disabled="config?.footer?.disabled ?? false"
            :underline="config?.footer?.disabled ?? false"
            :style="{ fontSize: '16px', color: 'rgb(131, 131, 131)' }"
          >
            <slot name="footerLeftIcon">
              <el-icon size="16"><goods-filled /></el-icon>
            </slot>
            <slot>
              {{ config?.footer?.link ?? 'this is my link' }}
            </slot>
          </el-link>
        </slot>
      </div>

      <div class="footer-right">
        <slot name="footerRight">
          <el-icon><connection /></el-icon>
        </slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'base-card',
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="less" scoped>
.base-card {
  margin: 30px 0;
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  // background-image: linear-gradient(61deg, #575461, #787984, #9ba0a9, #bfc9d0);
  box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);
  .header {
    box-sizing: border-box;
    margin-top: -20px;
    padding: 0 15px;
    // position: relative;
    .header-one {
      display: flex;
      padding: 0 15px;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .header-body {
        box-shadow: 0 3px 3px 2px rgba(0, 0, 0, 0.3);
        // background: linear-gradient(60deg, #e76b0bb2, #ff9800);
        border-radius: 5px;
        padding: 10px;
        height: 190px;
        // width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }

  .content {
    padding: 15px;
    margin-top: 5px;
    // color: rgba(66, 66, 66, 0.5);
  }
  .divider {
    margin: 10px 0;
    background-color: rgba(255, 255, 255, 0.3);
  }

  .footer {
    // height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px 5px 15px;
    border-radius: 5px;
    box-shadow: 0, 0, 0, 0, 0.5;

    .el-icon {
      margin-right: 5px;
    }
  }
}
</style>

<style lang="less">
.base-card .divider {
  .el-divider__text {
    padding: 0;
    background-color: transparent;
  }
}
</style>
