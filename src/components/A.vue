<template>
  <div>
    <h3>我是组件</h3>
    <div ref='div'>{{ str }}</div>
    <button @click="change">我被改了</button>
    <hr />
  </div>
</template>

<script setup>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const str = ref('Xiao guai')
const div = ref()
const change = () => {
    str.value = '我被改了'
}
// 创建前
onBeforeMount(() => {
  console.log("创建之前======>", div.value);
});

// 创建
onMounted(() => {
  console.log("创建======>", div.value);
});

// 更新前
onBeforeUpdate(() => {
    // 可以做一些卸载操作
  console.log("更新前======>", div.value.innerText);
});

// 更新
onUpdated(() => {
  console.log("更新======>", div.value.innerText);
});

//销毁前
onBeforeUnmount(() => {
  console.log("销毁前======>");
});

// 销毁
onUnmounted(() => {
  console.log("销毁======>");
});
</script>

<style scoped></style>
