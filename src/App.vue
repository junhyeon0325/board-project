<template>
  <div class="container">
    <h3>초간단 게시판</h3>
    <p v-if="!user.id">로그인을 진행하세요.</p>
    <div v-else>
      <PostForm @add-post="addPost">
        <!-- PostForm에서 add-post(attribute임 이거)를 불러주면은 addPost이벤트 핸들러가 실행되도록 -->
        <template v-slot:header>
          <div>Header</div>
        </template>
        <template #default>
          <p>이름없는 slot</p>
        </template>
        <template v-slot:footer>
          <div>&copy; since 1990</div>
        </template>
      </PostForm>
    </div>
    <hr />
    <PostList v-bind:posts="posts" />
    <!-- 밑에 data에 있는 posts배열을 posts라는 이름으로 postlist에 전달한다 -->

    <a @click="kakaoLogin">
      <img src="./assets/kakao_logo.png" />
    </a>
    <a @click="kakaoLogout">
      <p>로그아웃</p>
    </a>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
//import { ref } from "vue";

export default {
  // OptionsAPI 방식(객체활용)/CompositionAPI 방식(함수기반)
  name: "App",
  components: {
    PostForm, // 위에서 임포트 한걸 쓸려면 여기에 PostForm를 정의 해줘야함
    PostList,
  },
  data() {
    return {
      user: { id: "", name: "" },
      //uid: ref(), // ""그냥 이렇게 쓰면 원시값인데 ref(null)이걸하면 주소값을 봐라고 하는거
      // posts: [
      // {
      //   // 샘플 목록 만들려고 하나 만든거
      //   id: 1,
      //   title: "글등록연습",
      //   content: "잘등록됩니다.",
      //   date: new Date().toLocaleDateString(), // localeDateString이 우리나라 표현식하고 비슷하다
      // },
      // ],
    };
  },
  computed: {
    // 계산된 속성
    posts() {
      return this.$store.getters.getBoardList;
    },
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
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res);
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          console.log("nickname", nickname);
          console.log("email", email);
          // 로그인 처리 구현
          alert("로그인 성공!");
          this.user.id = email;
          this.user.name = nickname;
          // this.uid.value = email; // 로그인 성공 시 uid 업데이트
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        // 로그아웃
        console.log(response);
      });
    },
  },
  provide() {
    // 계속 하위 컴포넌트로 보내는 과정이 너무 복잡하니까, 하위 컴포넌트로 보내는 provide
    return {
      user: this.user, // App.vue > PostList.vue > PostItem.vue
    };
  },
  mounted() {
    console.log(this.$store.state.boardList);
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
