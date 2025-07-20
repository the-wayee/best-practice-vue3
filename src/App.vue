<template>
  <div style="display: flex">
    <div :class="[active == index ? 'active' : '']" @click="siwtchCom(item, index)" class="tab" v-for="(item, index) in data">
      <div>{{ item.name }}</div>
    </div>
  </div>
  <component :is="comId"></component>
</template>

<script setup>
import { reactive, readonly, ref } from "vue";
import A from "./components/A.vue";
import B from "./components/B.vue";
import C from "./components/C.vue";

const comId = ref(A);
const active = ref(0)

const siwtchCom = (item, index) => {
    comId.value = item.com
    active.value = index
}

const data = reactive([
  {
    name: "A组件",
    com: A,
  },
  {
    name: "B组件",
    com: B,
  },
  {
    name: "C组件",
    com: C,
  },
]);
</script>

<style lang="less" scoped>
.tab {
  border: 1px solid #ccc;
  margin: 5px;
  padding: 5px;
}
.active {
    background: skyblue;
    cursor: pointer;
}
</style>
