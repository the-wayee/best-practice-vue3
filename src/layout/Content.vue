<template>
  <div class="xg-content">
    <div v-for="item in 100">
      <div class="xg-content__item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@include b(content) {
  overflow: auto;
  @include e(item) {
      padding: 10px;
      margin: 10px;
      border: 1px solid #e6e6e6;
      border-radius: 4px;
  }
}
</style>
