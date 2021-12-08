<!-- -------------------------插槽---------------------------- -->
<!-- -------------------------
  1,header ==> 定义头部显示
  2,formConfig.formStyle.justify ==> 定义对齐方式
---------------------------- -->

<template>
  <div class="form">
    <div v-if="formConfig.isShowHeader ?? false">
      <slot name="header">
        <strong> {{ formConfig.pageName }}</strong>
      </slot>
    </div>
    <el-form
      :rules="formConfig.rules"
      ref="formRef"
      :model="modelValue"
      :label-width="
        formConfig?.formStyle?.labelWidth ?? defaultFormStyle.labelWidth
      "
    >
      <el-row
        :justify="formConfig.formStyle?.justify ?? defaultFormStyle.justify"
      >
        <template v-for="item of formConfig.formItems" :key="item.field">
          <el-col
            v-bind="formConfig?.formStyle?.layout ?? defaultFormStyle.layout"
          >
            <el-form-item
              v-if="item.isShow ?? true"
              :prop="item.field ?? item.prop"
              :label="item.label"
              :rules="item.rules"
              :label-width="item?.itemStyle?.labelWidth"
              :size="
                formConfig?.formItems?.itemStyle?.size ?? defaultFormStyle.size
              "
              :required="item.isRequired ?? false"
            >
              <!-- 设置插槽 并把 field 字段的值传出 和 item 一起打包出去 -->
              <slot
                :name="item.slotName ?? item.field"
                :row="modelValue[`${item.field}`]"
                :item="item"
              >
                <!-- input password -->
                <template
                  v-if="item.type === 'input' || item.type === 'password'"
                >
                  <el-input
                    :placeholder="item.placeholder ?? 'EasonDNS  yyds~~~'"
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
                    :placeholder="item.placeholder ?? 'EasonDNS  yyds~~~'"
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
                    :placeholder="item.placeholder ?? 'EasonDNS  yyds~~~'"
                    :model-value="modelValue[`${item.field}`]"
                    @update:modelValue="
                      handleModelValueChange($event, item.field)
                    "
                  ></el-date-picker>
                </template>
                <!-- select -->
                <template v-else-if="item.type === 'select'">
                  <el-select
                    v-bind="item.options ?? {}"
                    :placeholder="item.placeholder ?? 'EasonDNS  yyds~~~'"
                    @change="handleSelectChange(item)"
                    @visible-change="handleVisibleChange(item)"
                    :model-value="modelValue[`${item.field}`]"
                    @update:modelValue="
                      handleModelValueChange($event, item.field)
                    "
                  >
                    <el-option
                      v-for="itemOption of item.selectOptions"
                      :key="itemOption.value"
                      :value="itemOption.value"
                      :label="itemOption.label"
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
    <div class="footer" v-if="formConfig?.isShowFooter ?? true">
      <slot name="footer">
        <el-button type="info" size="mini" plain @click="handleReset">
          <el-icon><refresh /></el-icon>
          {{ formConfig.formStyle?.footer?.resetName ?? '重置' }}
        </el-button>
        <el-button type="primary" size="mini" plain @click="handleReSearch">
          <el-icon><search /></el-icon>
          {{ formConfig.formStyle?.footer?.researchName ?? '搜索' }}
        </el-button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
// <!-- -------------------------导入开始---------------------------- -->

import { defineComponent, PropType, ref } from 'vue'
import { ElForm } from 'element-plus'
import { IForm } from './type'
//<!-- -------------------------导入完成---------------------------- -->

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
    // 监听 自定义 v-modle 事件
    const handleModelValueChange = (value: any, field: string) => {
      content.emit('update:modelValue', {
        ...prop.modelValue,
        [field]: value
      })
    }
    // 重置
    const handleReset = () => {
      content.emit('handleReset')
    }
    // 搜索
    const handleReSearch = () => {
      content.emit('handleReSearch')
    }
    // 关于 select 的选择的时候触发 并把选择的值 传出
    const handleSelectChange = (item: any) => {
      content.emit('handleSelectChange', item)
    }
    // 关于 select 下拉事件
    const handleVisibleChange = (item: any) => {
      content.emit('handleVisibleChange', item)
    }
    // 默认样式
    const defaultFormStyle = {
      justify: 'center',
      size: 'small',
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
  padding-bottom: 5px;
}
.footer {
  text-align: right;
  padding-right: 20px;
  margin-bottom: 10px;
}
</style>
