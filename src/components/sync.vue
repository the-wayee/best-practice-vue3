<template>
  <div class="sync">
    <div class="sync-content">
      <div class="img"><img :src="data.url" /></div>
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
import { axios } from "@/server/axios.js";
// 顶层await
const { data } = await axios.get("/data.json");
console.log(data);
</script>

<style lang="less" scoped>
.sync {
  background-color: #ccc;
  width: 500px;
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
  overflow: hidden;
}

.sync-content .img img {
  width: 100%; /* 宽度撑满容器 */
  height: 100%; /* 高度撑满容器 */
  object-fit: cover; /* 按比例裁剪填充，保证不变形且覆盖整个容器 */
  display: block; /* 去掉默认 img 底部空白 */
}
.desc {
  width: 100%;
  font-size: 9px;
  height: 50px;
  padding: 10px;
  font-family: Arial, sans-ser;
  box-sizing: border-box;
}
</style>
