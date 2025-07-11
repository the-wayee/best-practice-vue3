<template>
  <div>
    <div>父级</div>
    <!-- 通过ref获取子组件暴露的属性 -->
    <Son ref="list" @on-click="getList" :title="name"></Son>
  </div>
</template>

<script setup>
import Son from "./Son.vue";
import { ref, onMounted } from "vue";
const name = "小乖";

const list = ref();

// 获取子组件传递的数据
const getList = (list) => {
  console.log(`[${list.join(", ")}]`);
};

onMounted(() => {
  console.log(list.value.list);
});
</script>

<style lang="scss" scoped></style>

