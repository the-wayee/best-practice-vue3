<template>
  <div class="skeleton">
    <div class="skeleton-content">
      <div class="img loading"></div>
      <div class="skeleton-pop">
        <div class="loading" style="width: 100px; height: 50%"></div>
        <div class="loading" style="width: 100px; height: 50%"></div>
      </div>
    </div>
    <hr />
    <div class="desc loading"></div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.skeleton {
  background-color: #ccc;
  padding: 10px;
  width: 500px;
}
.skeleton-content {
  display: flex;
  height: 60px;
}
.skeleton-pop {
  margin-left: 20px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.desc.loading {
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
}

.loading {
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: skeleton-loading 1.2s infinite linear;
  width: 100%;
  height: 100%;
}

.skeleton-content .img.loading {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
}

@keyframes skeleton-loading {
  0% {
    background-position: 200% 0%;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
