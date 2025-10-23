<template>
  <div>
    <XfButton type="primary" @click="handleClick">点击按钮</XfButton>
    <XfDialog v-model:visible="visible" title="提示">
      这是一个对话框
    </XfDialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { XfButton, XfDialog } from 'xf-mobile-ui'

const visible = ref(false);
const handleClick = () => {
  visible.value = true;
};
</script>