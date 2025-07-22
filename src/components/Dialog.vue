<template>
  <div>
    <header class="header">
      <!-- 具名插槽 -->
      <slot name="header"></slot>
    </header>
    <main class="main">
      <!-- 匿名插槽 -->
      <div v-for="(item, index) in data">
        <slot :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
const data = ref([
  {
    name: "小乖1",
    age: 18,
  },
  {
    name: "小乖2",
    age: 19,
  },
  {
    name: "小乖3",
    age: 20,
  },
]);
</script>

<style lang="less" scoped>
.header {
  height: 200px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  height: 300px;
  background-color: green;
  //   display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  height: 200px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
