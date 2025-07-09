<template>
  <div>
    <div>
      <span>firstName: </span>
      <input type="text" v-model="firstName" />
    </div>
    <div>
      <span>lastName: </span>
      <input type="text" v-model="lastName" />
    </div>

    <div>Your fullName: {{ fullName }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const firstName = ref("do");
const lastName = ref("the-way");

const fullName = computed(() => {
  return firstName.value + "-" + lastName.value;
});
</script>

<style lang="scss" scoped></style>
