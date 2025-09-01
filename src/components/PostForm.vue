<template>
  <h3>{{ msg }}</h3>
  <form action="" class="post-form">
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
    <button type="submit">글 등록</button>
    <!-- 이거 만들때는 button:submit엔터 하심 -->
  </form>
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
  padding: 1px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
button {
  padding: 12px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
