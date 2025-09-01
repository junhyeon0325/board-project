<template>
  <div class="container">
    <h3>초간단 게시판</h3>
    <PostForm @add-post="addPost" />
    <!-- PostForm에서 add-post를 불러주면은 addPost이벤트 핸들러가 실행되도록 -->
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
      logId: "user01",
      posts: [
        // {
        //   // 샘플 목록 만들려고 하나 만든거
        //   id: 1,
        //   title: "글등록연습",
        //   content: "잘등록됩니다.",
        //   date: new Date().toLocaleDateString(), // localeDateString이 우리나라 표현식하고 비슷하다
        // },
      ],
    };
  },
  methods: {
    // addPost이벤트 핸들러 만들거임
    addPost(post) {
      this.posts.push({
        id: this.posts.length + 1,
        title: post.title,
        content: post.content,
        date: new Date().toLocaleDateString(),
      });
    },
  },
  provide() {
    // 계속 하위 컴포넌트로 보내는 과정이 너무 복잡하니까, 하위 컴포넌트로 보내는 provide
    return {
      uid: "user01", // App.vue > PostList.vue > PostItem.vue
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
