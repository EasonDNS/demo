<template>
  <div class="form">
    <div v-if="formConfig.isShow ?? false">
      <slot name="header">
        <h2>
          {{ formConfig.pageName }}
        </h2>
      </slot>
    </div>
    <el-form :rules="formConfig.rules" ref="formRef">
      <el-row
        :justify="formConfig.formStyle?.justify ?? defaultFormStyle.justify"
      >
        <template v-for="item of formConfig.formItems" :key="item.field">
          <el-col
            v-bind="formConfig?.formStyle?.layout ?? defaultFormStyle.layout"
          >
            <el-form-item
              :prop="item.prop ?? item.field"
              :label="item.label"
              :rules="item.rules"
              :label-width="
                formConfig?.formStyle?.labelWidth ?? defaultFormStyle.labelWidth
              "
              :required="item.isRequired ?? isRequired"
            >
              <slot
                :name="item.slotName ?? item.field"
                :row="modelValue[`${item.field}`]"
              >
                <!-- input password -->
                <template
                  v-if="item.type === 'input' || item.type === 'password'"
                >
                  <el-input
                    :placeholder="item.placeholder"
                    :show-password="item.type === 'password'"
                    v-bind="item.options ?? {}"
                    :model-value="modelValue[`${item.field}`]"
                    @update:modelValue="
                      handleModelValueChange($event, item.field)
                    "
                  />
                </template>
                <!-- inputnumber -->
                <template v-else-if="item.type === 'inputnumber'">
                  <el-input-number
                    v-bind="item.options ?? {}"
                    :type="item.options.type ?? 'date'"
                    :placeholder="item.placeholder"
                    :model-value="modelValue[`${item.field}`]"
                    @update:modelValue="
                      handleModelValueChange($event, item.field)
                    "
                  />
                </template>

                <!--  datepicker -->
                <template v-else-if="item.type === 'datepicker'">
                  <el-date-picker
                    format="YYYY-MM-DD HH:mm:ss"
                    style="width: 100%"
                    v-bind="item.options ?? {}"
                    :model-value="modelValue[`${item.field}`]"
                    @update:modelValue="
                      handleModelValueChange($event, item.field)
                    "
                  ></el-date-picker>
                </template>
                <!-- select -->
                <template v-else-if="item.type === 'select'">
                  <el-select
                    :placeholder="item.placeholder"
                    v-bind="item.options ?? {}"
                    @change="handleSelectChange(item)"
                    @visible-change="handleVisibleChange(item)"
                    :model-value="modelValue[`${item.field}`]"
                    @update:modelValue="
                      handleModelValueChange($event, item.field)
                    "
                  >
                    <el-option
                      v-for="op of item.selectOptions"
                      :key="op.value"
                      :value="op.value"
                      :label="op.label"
                    ></el-option>
                  </el-select>
                </template>

                <!-- radio -->
                <template v-else-if="item.type === 'radio'">
                  <template
                    v-for="subitem of item.otherOptions"
                    :key="subitem.label"
                  >
                    <el-radio
                      :label="subitem.label"
                      v-bind="item.options ?? {}"
                      :model-value="modelValue[`${item.field}`]"
                      @update:modelValue="
                        handleModelValueChange($event, item.field)
                      "
                      >{{ subitem.placeholder }}
                    </el-radio>
                  </template>
                </template>
                <!-- tree -->
                <template v-else-if="item.type === 'tree'">
                  {{ item }}
                </template>
              </slot>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div
      class="footer"
      v-if="formConfig.isShow ?? false"
      style="text-algin: center"
    >
      <slot name="footer">
        <el-button type="primary" size="mini" @click="handleReset"
          >{{ formConfig.formStyle?.footer?.resetName ?? '重置' }}
        </el-button>
        <el-button type="primary" size="mini" @click="handleReSearch">
          {{ formConfig.formStyle?.footer?.researchName ?? '搜索' }}
        </el-button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
// <!-- -------------------------导入---------------------------- -->

import { defineComponent, PropType, ref } from 'vue'
import { ElForm } from 'element-plus'
import { IForm } from './type'

export default defineComponent({
  // 1, 接受的参数
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
  },
  // 2,发出的事件
  emits: [
    'handleReset',
    'handleReSearch',
    'handleSelectChange',
    'handleVisibleChange',
    'update:modelValue'
  ],
  setup(prop, content) {
    const formRef = ref<InstanceType<typeof ElForm>>()

    const handleModelValueChange = (value: any, field: string) => {
      content.emit('update:modelValue', {
        ...prop.modelValue,
        [field]: value
      })
    }
    const handleSelectChange = (pay: any) => {
      content.emit('handleSelectChange', pay)
    }
    const handleReset = () => {
      content.emit('handleReset')
    }
    const handleReSearch = () => {
      content.emit('handleReSearch')
    }
    const handleVisibleChange = (item: any) => {
      content.emit('handleVisibleChange', item)
    }
    const isRequired = ref(false)
    // 默认样式
    const defaultFormStyle = {
      justify: 'center',
      labelWidth: '80px',
      layout: {
        span: 12,
        xs: 24,
        sm: 12,
        md: 8,
        lg: 6,
        xl: 4
      }
    }

    return {
      defaultFormStyle,
      formRef,
      isRequired,
      // 监听 重置按钮 点击事件
      handleReset,
      // 监听 搜索按钮 点击事件
      handleReSearch,
      // 监听 select change 事件
      handleSelectChange,
      // 监听 select 的下拉事件
      handleVisibleChange,
      // 监听 modelvalue 值改变而触发的事件
      handleModelValueChange
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
.footer {
  // box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  text-align: right;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
