<template>
  <div>
    <h3>{{ msg }}</h3>
  </div>
  <!-- 반복문을 통해서 목록이 나오게 할꺼다 -->
</template>

<script>
export default {
  data() {
    return {
      msg: "게시글 목록",
    };
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
/*  */
</style>
