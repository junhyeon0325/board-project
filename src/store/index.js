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
        writer: "user01",
      },
    ],
    logId: "", // 로그인 정보 저장
  },
  mutations: {
    // 이  mutations이 우리 자바할때했던 mapper같은거고, 여기는 1대1 구도그러니까 mapper하나정의
    // 동기방식처리
    // 값을 변환하는 역할
    addBoard(state, post) {
      state.boardList.push(post);
    },
    setId(state, id) {
      // 위에 state를 말하는거고 id는 받은 매개변수를 말함
      state.logId = id;
    },
  },
  actions: {
    // actions이 자바할때했던 service같은역할이다, 요건 여러개의 mapper가 들어갔고
    // 비동기방식
    saveBoard({ commit }, post) {
      commit("addBoard", post);
    },
  },
  getters: {
    // 다른 컴포넌트에서 getters를 이용해서 데이터를 이용할 수 있음
    getBoardList(state) {
      // 이 state가 위에 있는 state임
      return state.boardList; // 위에 있는 state의 boardList를 가리킴
    },
    getBoardNo(state) {
      // BoardNo를 새로 만들어서 넘겨줘야하는데 지금 boardList가 배열이니까 여기세 +1해서 넘겨주는거임
      return state.boardList.length + 1;
    },
    getLogId(state) {
      return state.logId;
    },
  },
});
