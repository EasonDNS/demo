<template>
  <div class="form">
    <el-form :model="formData" :rules="searchFormConfig.rules" ref="formRef">
      <el-row justify="center">
        <template v-for="item of searchFormConfig.formItems" :key="item.field">
          <el-col
            v-bind="
              searchFormConfig?.formStyle?.layout ?? defaultFormStyle.layout
            "
          >
            <el-form-item
              :prop="item.prop ?? item.field"
              :label="item.label"
              :rules="item.rules"
              :label-width="
                searchFormConfig?.formStyle?.labelWidth ??
                defaultFormStyle.labelWidth
              "
              :required="item.isRequired ?? isRequired"
            >
              <!-- input password -->
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <!-- inputnumber -->
              <template v-else-if="item.type === 'inputnumber'">
                <el-input-number
                  :placeholder="item.placeholder"
                  v-model="formData[`${item.field}`]"
                />
              </template>

              <!--  datepicker -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.options"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>

              <template v-else-if="item.type === 'select'">
                <el-select
                  v-model="formData[`${item.field}`]"
                  :placeholder="item.placeholder"
                  v-bind="item.options"
                >
                  <el-option v-bind="item.options"></el-option>
                </el-select>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'

import { ElForm } from 'element-plus'

import { IForm } from './type'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    searchFormConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
  },

  setup(prop, content) {
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 默认样式
    const defaultFormStyle = {
      labelWidth: '80px',
      layout: {
        span: 12,
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
        xl: 4
      }
      // formAttr: {
      //   // size: 'medium'
      // }
    }

    let formData = ref({
      ...prop.modelValue
    })
    watch(
      formData,
      (newValue) => {
        content.emit('update:modelValue', newValue)
      },
      { deep: true }
    )

    return {
      defaultFormStyle,
      formData,
      formRef
    }
  }
})
</script>

<style lang="less" scoped>
.el-row {
  padding-bottom: 10px;
}
.el-col {
  padding-top: 10px;
}
</style>
