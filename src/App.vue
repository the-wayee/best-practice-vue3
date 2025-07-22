<template>
  <div>
    <Dialog>
      <template #header> 我被插入上面了 </template>
      <template #default="{data}"> 
        {{ data.name }} - {{ data.age }}
       </template>
      <template v-slot:footer> 我被插入下面了 </template>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from "./components/Dialog.vue";
</script>

<style lang="scss" scoped></style>
