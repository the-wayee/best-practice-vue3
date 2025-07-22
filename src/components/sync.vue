<template>
  <div class="sync">
    <div class="sync-content">
      <div class="img"><img :src="data.src"/></div>
      <div class="sync-pop">
        <div>{{ data.name }}</div>
        <div>&nbsp; {{ data.age }}</div>
      </div>
    </div>
    <hr />
    <div class="desc">{{ data.desc }}</div>
  </div>
</template>

<script setup>
import { axios } from "@/server/axios";
// 顶层await
const data = await axios.get("/data.json");
</script>

<style lang="less" scoped>
.sync {
  background-color: #ccc;
}
.sync-content {
  display: flex;
  height: 60px;
  padding: 10px;
}
.sync-pop {
  margin-left: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sync-content .img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
}

.desc {
  height: 50px;
  padding: 10px;
  font-family: Arial, sans-ser;
}
</style>
