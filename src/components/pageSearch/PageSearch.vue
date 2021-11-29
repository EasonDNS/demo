<template>
  <div class="page-search">
    <div class="header">
      <slot name="header">
        <h2>
          {{ searchFormConfig.pageName }}
        </h2>
      </slot>
    </div>

    <div class="content">
      <jxls-form
        :searchFormConfig="searchFormConfig"
        v-model="formData"
      ></jxls-form>
    </div>

    <div class="footer">
      <slot name="footer">
        <el-button type="primary" size="mini" @click="handleReset"
          >重置</el-button
        >
        <el-button type="primary" size="mini" @click="handleReSearch"
          >搜索</el-button
        >
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
// 需要传 pageSearchConfig<IForm>
import { defineComponent, ref, PropType } from 'vue'
import { useStore } from '@/store'

import { switchPage } from '@/utils/switchPage'
import { IForm } from '@/baseui/form/src/type'
import jxlsForm from '@/baseui/form/src/form.vue'
export default defineComponent({
  components: { jxlsForm },
  props: {
    searchFormConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
  },
  setup(prop) {
    const store = useStore()
    const formData: any = ref({})

    // const oFormData = () => {
    //   for (const item of prop.searchFormConfig.formItems) {
    //     formData.value[item.field] = ''
    //   }
    // }
    const tagReset = ref({
      name: 'reSet',
      data: formData.value
    })
    const tagResearch = ref({
      name: 'reSearch',
      data: formData.value
    })
    //初始化 formdata 数据
    // oFormData()
    // 通过switch 得到需要分发的 ative url
    const handleReset = () => {
      // oFormData()
      // 这里分发的 任务应该是得到所有的 list
      store.dispatch(
        // 把 tag 和 formdata 传进 switch  通过 tag 去返回 action
        switchPage(prop.searchFormConfig.pageName, tagReset.value).action,
        {
          url: switchPage(prop.searchFormConfig.pageName, tagReset.value).url,
          queryInfo: formData.value
        }
      )
    }
    const handleReSearch = () => {
      store.dispatch(
        switchPage(prop.searchFormConfig.pageName, tagResearch.value).action,
        {
          url: switchPage(prop.searchFormConfig.pageName, tagResearch.value)
            .url,
          queryInfo: formData.value
        }
      )
    }
    return {
      formData,
      handleReset,
      handleReSearch
    }
  }
})
</script>
<style lang="less" scoped>
.page-search {
  background-color: orange;
  .header {
    color: rgb(236, 9, 9);
  }
  .content {
    background-color: orange;
    padding: 22px 10px 10px 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    //ox-shadow: X轴偏移量 Y轴偏移量 [阴影模糊半径] [阴影扩展] [阴影颜色] [投影方式];
  }
  .footer {
    // box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
    text-align: right;
    padding-right: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
