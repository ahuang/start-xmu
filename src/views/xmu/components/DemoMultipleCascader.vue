<script lang="ts" setup>
import { ref, nextTick } from "vue";
import { XfMultipleCascader } from "xf-mobile-ui";
import { showToast } from "vant";

const formData = ref({
  // riskCodes:  ["10-yxgjzcs","20-zcfzl"]
  riskCodes:  []
})

// 添加includeParent控制开关
const includeParent = ref(true)

// 添加form的ref引用
const formRef = ref();

const getRiskPatterns = () => {
  // 返回风险模式数据
  return Promise.resolve([
    {
      classNo: "10",
      className: "企业高负债10",
      childList: [
        { classNo: "10-zcfzl", className: "资产负债率", childList: [{classNo: "100-zcfz1", className: "资产负债率1", childList: [],}, {classNo: "100-zcfz2", className: "资产负债率2", childList: [],}],},
        { classNo: "10-ydyd", className: "以贷养贷", childList: [],},
        { classNo: "10-mjjd", className: "民间借贷", childList: [],},
        { classNo: "10-yxgjzcs", className: "有效干净资产少", childList: [],},
      ],
    },
    {
      classNo: "20",
      className: "物单一20",
      childList: [
      { classNo: "20-zcfzl", className: "资产负债率222", childList: [],},
      ],
    },
    {
      classNo: "30",
      className: "回款不可控30",
      childList: [],
    },
  ]);
};

// 修改校验规则，使用onChange触发（对于级联选择器更合适）
const SelectRequiredBlur = (label: string) => ({ required: true, message: `请选择${label}`, trigger: 'onChange' });

// 修改提交方法，添加表单校验
const submit = async () => {
  try {
    // 手动触发校验
    await formRef.value?.validate();
    console.log('表单提交数据:', formData.value);
    console.log('当前模式:', includeParent.value ? '包含父级' : '仅子级');
    showToast('提交成功');
  } catch (error) {
    console.log('表单校验失败', error);
  }
}

// 修改失败回调，显示校验失败信息
const failedFn = (errorInfo: any) => {
  console.log('表单校验失败', errorInfo);
  showToast('请检查表单填写');
}


// 添加重置表单方法
const resetForm = async () => {
  // 先重置校验状态，清除所有错误提示
  formRef.value?.resetValidation();
  // 然后清空数据
  formData.value.riskCodes = [];
  // 等待DOM更新后再次重置校验状态，确保完全清除
  await nextTick();
  formRef.value?.resetValidation();
}



</script>
<template>
  <h1>级联组件</h1>
  <div>formData.riskCodes {{ formData.riskCodes }}</div>
  <!-- 添加ref引用到van-form -->
  <van-form 
    ref="formRef"
    class="add-form" 
    @submit="submit" 
    :scroll-to-error="true" 
    @failed="failedFn"
  >
    <XfMultipleCascader
      v-model:bindData="formData.riskCodes"
      title="极端风险模式"
      tip="tip说明"
      :isFullName="true"
      :apiFn="getRiskPatterns"
      valueName="classNo"
      titleName="className"
      childName="childList" 
      :required="true"
      QuestionContent="可查找同时具有多项极端风险模式的业务。"
      placeholder="placeholder说明" 
      :rules="[SelectRequiredBlur('极端风险模式')]" 
      name="riskCodes"
      :includeParent="includeParent"
    />
  </van-form>
  <!-- 添加操作按钮 -->
  <div style="padding: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
    <van-button type="primary" @click="submit">提交表单</van-button>
    <van-button type="default" @click="resetForm">重置表单</van-button>
    <van-button 
      :type="includeParent ? 'success' : 'warning'" 
      @click="includeParent = !includeParent"
    >
      {{ includeParent ? '包含父级' : '仅子级' }}
    </van-button>
  </div>

</template>
