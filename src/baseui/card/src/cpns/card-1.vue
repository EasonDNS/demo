<template>
  <div class="card-1" :style="{ height: config.style.height ?? '130px' }">
    <el-card shadow="always">
      <template #default>
        <slot name="body">
          <div class="body">
            <div
              class="body-title"
              :style="{
                background:
                  config.style.background ?? defaultConfig.style.background
              }"
            >
              <!-- 定义一个插槽 给图中设置 图标 -->
              <slot name="topIcon">
                <el-icon color="white" :size="32"><coffee-cup /></el-icon>
              </slot>
            </div>
            <div class="top">
              <span>{{ config.title ?? defaultConfig.title }}</span>
              <div class="content">
                {{ config.content ?? defaultConfig.content }}
                <jxls-count-up :number="config.number ?? 100"></jxls-count-up>
              </div>
            </div>
            <hr />
            <div class="footer">
              <el-link
                :href="config.footer.url ?? defaultConfig.footer.url"
                :disabled="
                  config.footer.Disable ?? defaultConfig.footer.Disable
                "
                type="info"
              >
                <slot name="footerIcon">
                  <el-icon><goods-filled /></el-icon>
                </slot>
                <slot>
                  {{ config.footer.link ?? defaultConfig.footer.link }}
                </slot>
              </el-link>
            </div>
          </div>
        </slot>
      </template>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

import jxlsCountUp from '@/baseui/countUp'

import { ICard1Config } from '../type'
export default defineComponent({
  name: 'card-1',
  props: {
    config: {
      type: Object as PropType<ICard1Config>,
      required: true
    }
  },
  components: { jxlsCountUp },
  setup() {
    const defaultConfig: ICard1Config = {
      style: {
        background: 'linear-gradient(to bottom, #1f4037, #99f2c8)',
        height: '130px'
      },
      title: '我是小标题',
      content: '我是内容',
      footer: {
        url: '#',
        icon: 'Remove',
        Disable: false,
        link: 'this is my Components'
      }
    }
    return {
      defaultConfig
    }
  }
})
</script>
<style lang="less" scoped>
.card-1 {
  // height: 130px;
  position: relative;
  .el-card {
    height: 100%;
    // background: linear-gradient(to bottom, #e2e7e9, #042931);
    border-radius: 10px;
    .body {
      height: 100%;
      // background: linear-gradient(to bottom, #2193b0, #6dd5ed);

      .body-title {
        width: 88px;
        height: 88px;
        border-radius: 5px;
        position: absolute;
        top: -15px;
        left: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.3);
      }
      .top {
        width: 100%;
        height: 60px;
        text-align: right;
        // background-color: orange;

        span {
          font-size: 14px;
          color: rgb(153, 153, 153);
        }
        .content {
          margin-top: 10px;
          font-size: 18px;
          color: rgb(131, 131, 131);
        }
      }

      .footer {
        width: 100%;
        height: 40px;
        // background-color: olive;
        .el-link {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
<style lang="less">
.el-card__header {
  border-bottom: none;
}
.el-link {
  .el-icon {
    padding-right: 5px;
  }
}
</style>
