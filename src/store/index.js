import { createStore } from "vuex";

export default createStore({
  state: {
    boardList: [
      // 게시글 목록
      {
        id: 1,
        title: "게시글1번",
        content: "등록연습",
        date: new Date().toLocaleDateString(),
      },
    ],
    logId: "", // 로그인 정보 저장
  },
  mutations: {
    addBoard(state, post) {
      state.boardList.push(post);
    },
  },
  getters: {
    getBoardList(state) {
      // 이 state가 위에 있는 state임
      return state.boardList; // 위에 있는 state의 boardList를 가리킴
    },
    getBoardNo(state) {
      // BoardNo를 새로 만들어서 넘겨줘야하는데 지금 boardList가 배열이니까 여기세 +1해서 넘겨주는거임
      return state.boardList.length + 1;
    },
  },
});
