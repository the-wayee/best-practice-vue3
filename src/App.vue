<script setup>
import { reactive } from "vue";
import TreeVue from "./components/Tree.vue";
const Tree = {
  name: "",
  check: false,
  children: [],
};

const data = reactive([
  {
    name: "1",
    check: true,
    children: [
      {
        name: "1-1",
        check: false,
        children: [],
      },
    ],
  },
  {
    name: "2",
    check: false,
    children: [],
  },
  {
    name: "3",
    check: false,
    children: [
      {
        name: "3-1",
        check: false,
        children: [
          {
            name: "3-1-1",
            check: false,
            children: [],
          },
                    {
            name: "3-1-2",
            check: true,
            children: [],
          },
        ],
      },
    ],
  },
]);
</script>

<template>
  <!-- 全局组件 -->
  <!-- <Card></Card> -->

  <!-- 递归组件 -->
  <TreeVue :data="data"></TreeVue>
</template>

<style lang="scss"></style>
