<template>
  <div class="form">
    <el-form :model="formData" :rules="searchFormConfig.rules" ref="formRef">
      <el-row justify="center">
        <template v-for="item of searchFormConfig.formitems" :key="item.label">
          <el-col
            :span="
              searchFormConfig?.formStyle?.colSpan ?? defaultFormStyle.colSpan
            "
            v-bind="searchFormConfig?.formStyle?.layout ?? {}"
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

    const defaultLayout = {
      xs: 24,
      sm: 12,
      md: 8,
      lg: 6,
      xl: 4
    }
    const defaultFormStyle = {
      colSpan: 6,
      labelWidth: '80px'
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

    const isRequired = ref(false)
    return {
      defaultLayout,
      defaultFormStyle,
      formData,
      isRequired,
      formRef
    }
  }
})
</script>
<style lang="less" scoped></style>
