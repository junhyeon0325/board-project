<template>
  <div class="post-item">
    <h3>{{ post.title }}</h3>
    <p>{{ post.content }}</p>
    <small>작성일: {{ post.date }}</small>
    <p>작성자:{{ uid }}</p>
    <!-- 여기서 사용하겠다 라는 의미 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: "",
    };
  },
  props: {
    post: { type: Object, default: () => {} },
  },
  inject: ["uid"], // 여기서 uid속성값을 읽어와서, 상위 컴포넌트에서 불러오는 inject
};
</script>

<style>
/*  */
.post-item {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
