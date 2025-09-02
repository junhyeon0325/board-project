<template>
  <h3>{{ msg }}</h3>
  <slot name="header"></slot>
  <form @submit.prevent="handleSubmit" class="post-form">
    <!-- prevent 기본기능을 차단하는 기능임 -->
    <div class="form-group">
      <label for="title">제목</label>
      <input type="text" id="title" v-model="title" required />
      <!-- v-model은 양방향 for="title"했기 때문에 input에 id값을 따라간다 -->
      <!-- required는 필수항목일때 -->
    </div>
    <div class="form-group">
      <!-- 이거 만들때 div.form-group엔터 치면은 자동으로 만들어줌 -->
      <label for="content">내용</label>
      <textarea id="content" v-model="content" rows="4" required></textarea>
    </div>
    <slot></slot>
    <button type="submit">글 등록</button>
    <!-- 이거 만들때는 button:submit엔터 하심 -->
  </form>
  <slot name="footer"></slot>
</template>

<script>
export default {
  data() {
    return {
      msg: "게시글 작성",
      title: "",
      content: "",
    };
  },
  computed: {
    // getters에 정의된 값에 접근할 수 있슴
    boardNo() {
      return this.$store.getters.getBoardNo;
    },
    logId() {
      return this.$store.getters.getLogId;
    },
  },
  methods: {
    handleSubmit() {
      let post = {
        id: this.boardNo,
        title: this.title,
        content: this.content,
        date: new Date().toLocaleDateString(),
        writer: this.logId,
      };
      // this.$emit("add-post", post);
      // this.$store.commit("addBoard", post); // vuex에서 store mutation해서 값을 변경하는데 그걸 submit할때 실행하는 함수 handleSubmit안에 commit을 만들어서 'addBoard'로 보낸다는 의미 같은데?
      this.$store.dispatch("saveBoard", post);
      // 입력필드초기화, 데이터를 emit으로 보내고나면 입력필드가 빈공간으로 만들어주는
      this.title = "";
      this.content = "";
    },
  },
};
</script>

<style>
.post-form {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
