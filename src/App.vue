<script setup>
import Index from './layout/Index.vue';


</script>

<template>
  <!-- <div class="xg-test">
        我是小乖
    </div>
    <div class="xg-test__inner">
        element
    </div>
    <button class="xg-test--success">
        modifier
    </button> -->


    <Index></Index>
</template>

<style lang="scss">
// @include b(test) {
//     color: red;
//     @include e(inner) {
//         color: green;
//     }
//     @include m(success){
//         color: blue;
//     }
// }

#app {
  @include bfc();
}


</style>
