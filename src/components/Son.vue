<template>
  <div>
    <div>子集</div>
    {{ title }}

    <button @click="emitToParent">点击向父组件发送值</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// 子组件接收父组件的值 defineProps
defineProps({
  title: {
    type: String,
    default: "the-way",
  },
});

// 子组件向父组件传递值 defineEmits
const emit = defineEmits(["on-click"]);
const list = reactive([1,2,3]);

const emitToParent = () => {
    emit("on-click", list);
}


// 子组件给父组件暴露属性 defineExpose
defineExpose({
    list
})
</script>

<style lang="scss" scoped></style>
