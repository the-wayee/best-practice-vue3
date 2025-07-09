<template>
  <div>
    <div>
      <span>名称: </span>
      <input type="text" placeholder="请输入您的名称" v-model="name" />
    </div>
    <div>
      <span>年龄: </span>
      <input type="text" placeholder="请输入您的年龄" v-model="age" />
    </div>

    <div>您的名字：{{ name }}</div>
    <div>您的年龄：{{ age }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");
const age = ref("");
</script>

<style lang="scss" scoped></style>
