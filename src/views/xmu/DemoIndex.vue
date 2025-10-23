<script lang='ts' setup>
import { reactive, toRefs } from "vue";
const state = reactive({
    visible: false,
});
const { visible } = toRefs(state);
</script>
<template>
    <h1></h1>
    <div>visible {{visible}}</div>
</template>
<style scoped lang='scss'>
</style>