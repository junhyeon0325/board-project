<template>
  <div class="container">
    <h3>초간단 게시판</h3>
    <PostForm />
    <PostList v-bind:posts="posts" />
    <!-- 밑에 data에 있는 posts배열을 posts라는 이름으로 postlist에 전달한다 -->
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";

export default {
  name: "App",
  components: {
    PostForm, // 위에서 임포트 한걸 쓸려면 여기에 PostForm를 정의 해줘야함
    PostList,
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
