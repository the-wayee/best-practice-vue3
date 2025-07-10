<template>
  <div>
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
</template>

<script setup>
import { ref, watch } from "vue";

const loading = ref(false);
const question = ref("");
const answer = ref("Questions usually contain a question mark.");
const imgUrl = ref("");

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
</script>

<style lang="scss" scoped></style>
