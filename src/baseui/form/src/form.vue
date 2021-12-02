<template>
  <div class="form">
    <div v-if="searchFormConfig.isShow ?? false">
      <slot name="header">
        <h2>
          {{ searchFormConfig.pageName }}
        </h2>
      </slot>
    </div>
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
              <slot
                :name="item.slotName ?? item.field"
                :row="formData[`${item.field}`]"
              >
                <!-- input password -->
                <template
                  v-if="item.type === 'input' || item.type === 'password'"
                >
                  <el-input
                    :placeholder="item.placeholder"
                    :show-password="item.type === 'password'"
                    v-bind="item.options ?? {}"
                    v-model="formData[`${item.field}`]"
                  />
                </template>
                <!-- inputnumber -->
                <template v-else-if="item.type === 'inputnumber'">
                  <el-input-number
                    v-bind="item.options ?? {}"
                    :type="item.options.type ?? 'date'"
                    :placeholder="item.placeholder"
                    v-model="formData[`${item.field}`]"
                  />
                </template>

                <!--  datepicker -->
                <template v-else-if="item.type === 'datepicker'">
                  <el-date-picker
                    format="YYYY-MM-DD HH:mm:ss"
                    style="width: 100%"
                    v-bind="item.options ?? {}"
                    v-model="formData[`${item.field}`]"
                  ></el-date-picker>
                </template>
                <!-- select -->
                <template v-else-if="item.type === 'select'">
                  <el-select
                    v-model="formData[`${item.field}`]"
                    :placeholder="item.placeholder"
                    v-bind="item.options ?? {}"
                    @change="handleChange"
                    @visible-change="handleVisibleChange(item)"
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
                      v-model="formData[`${item.field}`]"
                      :label="subitem.label"
                      v-bind="item.options ?? {}"
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
      v-if="searchFormConfig.isShow ?? false"
      style="text-algin: center"
    >
      <slot name="footer">
        <el-button type="primary" size="mini" @click="handleReset"
          >{{ searchFormConfig.formStyle?.footer?.resetName ?? '重置' }}
        </el-button>
        <el-button type="primary" size="mini" @click="handleReSearch">
          {{ searchFormConfig.formStyle?.footer?.researchName ?? '搜索' }}
        </el-button>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { day } from '@/utils'
import { ElForm } from 'element-plus'

import { IForm } from './type'

export default defineComponent({
  // 1, 接受的参数
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
  // 2,发 出的 事件
  emits: [
    'handleReset',
    'handleReSearch',
    'handleChange',
    'handleVisibleChange',
    'update:modelValue'
  ],
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

    let formData = ref<any>({
      ...prop.modelValue
    })
    watch(
      formData,
      (newValue) => {
        content.emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    const resetData = () => {
      for (const item of prop.searchFormConfig.formItems) {
        formData.value[item.field] = ''
      }
    }
    const handleChange = (pay: any) => {
      content.emit('handleChange', pay)
    }
    const handleReset = () => {
      resetData()
      content.emit('handleReset')
    }
    const handleReSearch = () => {
      // console.log(formData.value)
      // 对时间 格式的处理....
      for (const item in formData.value) {
        // console.log('================')
        if (item === 'upateAt') {
          formData.value[item] = day.format(formData.value[item])
        }
        if (item === 'createAt') {
          formData.value[item] = day.format(formData.value[item])
        }
        // if (item === 'createAt' && item.length > 1) {
        //   // formData[item][0] = day.format(formData[item][0])

        //   formData.value['createAt'] = day.format(formData.value[item][0])
        //   formData.value['updateAt'] = day.format(formData.value[item][1])
        // }

        // 对时间 格式 的处理
      }
      content.emit('handleReSearch', formData.value)
    }
    const handleVisibleChange = (item: any) => {
      content.emit('handleVisibleChange', item)
    }
    const isRequired = ref(false)
    return {
      defaultFormStyle,
      formData,
      formRef,
      isRequired,
      handleChange,
      handleReset,
      handleReSearch,
      handleVisibleChange
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
