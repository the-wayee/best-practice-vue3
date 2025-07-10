<template>
  <div>
    <section>part1: ref</section>
    <div class="img">
      <img v-if="imgUrl" :src="imgUrl" />
    </div>
    <p>
      Ask a yes/no question:
      <input type="text" :disabled="loading" v-model="question" />
    </p>
  </div>
  <div>
    <p>Answer: {{ answer }}</p>
  </div>

  <div>
    <section>part2: getter</section>
    <div>
      <span>num1: <input type="text" v-model="num1" /></span><br />
      <span>num2: <input type="text" v-model="num2" /></span><br />
      <div>sum: {{ sum }}</div>
    </div>
  </div>

  <div>
    <section>part3: watchEffect</section>
    <div>
      <span>message1: <input type="text" v-model="message1" /></span><br />
      <span>message2: <input type="text" v-model="message2" /></span><br />
      <button @click="stopWatch">停止监听</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const loading = ref(false);
const question = ref("");
const answer = ref("Questions usually contain a question mark.");
const imgUrl = ref("");

// 单ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    loading.value = true;
    answer.value = "Thinking... ";

    try {
      const resJson = await fetch("https://yesno.wtf/api");
      const res = await resJson.json(); //解析HTTP 响应体
      answer.value = res.answer;
      imgUrl.value = res.image;

      console.log(res.image);
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  }
});

const num1 = ref(0);
const num2 = ref(0);
const sum = ref(0);
// getter
watch(
  () => {
    return num1.value + num2.value;
  },
  (newSum, oldSum) => {
    console.log(`num1 add num2 is ${newSum}, and oldSum is ${oldSum}`);
    sum = newSUm.value;
  }
);

// watchEffect
import { watchEffect } from "vue";
const message1 = ref('飞机')
const message2 = ref('飞机杯子')

// 返回一个函数，停止监控
const stop = watchEffect((oninvalidate) => {
  oninvalidate(() => {
    // 防抖 or 清除数
    console.log('before');
  })
  console.log("message1", message1.value);
  console.log("message2", message2.value);
}, {
  flush: 'post', //组件加载完之后
  onTrigger() {
    //debugger //断点调试
  }
})

const stopWatch = () => stop()
</script>

<style lang="scss" scoped></style>
