<template>
  <Suspense>
    <template #fallback>
      <Skeleton></Skeleton>
    </template>

    <template #default>
      <SyncVue></SyncVue>
    </template>
  </Suspense>
</template>

<script setup>
import Skeleton from "./components/skeleton.vue";
import { defineAsyncComponent } from "vue";
const SyncVue = defineAsyncComponent(() => import("@/components/sync.vue"));
</script>

<style lang="scss" scoped></style>
