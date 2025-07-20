<template>
    <!-- 递归组件需要阻止冒泡 -->
  <div @click.stop="clickTap(item)" class="tree" v-for="item in data">
    <input type="checkbox" v-model="item.check" />
    <span>
      {{ item.name }}
    </span>

    <!-- recurse component -->
    <Tree :data="item.children" v-if="item?.children?.length"></Tree>
  </div>
</template>

<script setup>
// 接受父组件的值
defineProps({
  data: {
    type: Array,
  },
});


const clickTap = (item) => {
    console.log(item)
}
</script>

<style lang="less" scoped>
.tree {
  margin-left: 10px;
}
</style>
