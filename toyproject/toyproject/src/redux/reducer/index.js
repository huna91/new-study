// import { useNavigate } from "react-router-dom";

let init = {
  userData: [],
  loginData: {
    activeLogin: false,
    loginId: null,
  },
  boardData: [],
};

function reducer(state = init, action) {
  // const nav = useNavigate();
  console.log(state);
  switch (action.type) {
    case "join":
      return { ...state, userData: state.userData.concat(action.payload) };
    case "login":
      return {
        ...state,
        activeLogin: (state.loginData.activeLogin = true),
        loginId: (state.loginData.loginId = action.payload),
      };
    case "logout":
      return {
        ...state,
        activeLogin: (state.loginData.activeLogin = false),
        loginId: (state.loginData.loginId = null),
      };
    case "write":
      console.log(action.payload);
      return {
        ...state,
        boardData: state.boardData.concat(action.payload),
      };

    default:
      return state;
  }
}

export default reducer;
