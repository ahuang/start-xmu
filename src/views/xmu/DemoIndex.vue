<script lang='ts' setup>
import VantButton from './components/VantButton.vue';
import XmuHello from './components/XmuHello.vue';
</script>
<template>
    <h1>Demo</h1>
    <div class="demo-box">
        <div>下面是 Vant 示例：</div>
        <VantButton />
    </div>
    <div class="demo-box">
        <div>下面是 Xf-Mobile-UI 示例：</div>
        <XmuHello />
    </div>
</template>
<style scoped lang='scss'>
.demo-box{
    border: 1px solid red;
    padding: 20px 10px;
    margin: 20px 0;
}
</style>