<template>
  <div class="xg-box">
    <div>
      <Menu></Menu>
    </div>
    <div class="xg-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<script setup>
import Content from "./Content.vue";
import Header from "./Header.vue";
import Menu from "./Menu.vue";
</script>

<style lang="scss" scoped>
@include b(box) {
  @include bfc;
  display: flex;
  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
