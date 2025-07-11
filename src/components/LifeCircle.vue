<template>
    <A v-if="flag"></A>
    <button @click="flag = !flag">创建销毁</button>
</template>

<script setup>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import A from './A.vue';

const flag = ref(true)

</script>

<style lang="scss" scoped>

</style>