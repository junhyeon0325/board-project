<template>
  <div>
    <h3>{{ msg }}</h3>
    <p v-if="posts.length == 0">게시글이 없습니다. 첫 게시글을 작성해보세요.</p>
    <div v-else>
      <PostItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
      /><!-- 바인딩해서 할껀데 post라는 attribute에 담아서 전달 porps의 post다 뒤에 post=할때 =앞에 있는거 -->
    </div>
  </div>
  <!-- 반복문을 통해서 목록이 나오게 할꺼다 -->
</template>

<script>
import PostItem from "./PostItem.vue";
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
  components: {
    PostItem,
  },
};
</script>

<style>
/*  */
</style>
