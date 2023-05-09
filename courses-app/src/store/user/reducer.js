import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./actionTypes";

const initialState = {
  isAuth: false,
  name: "",
  email: "",
  token: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        name: "",
        email: "",
        token: "",
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
        name: "",
        email: "",
        token: "",
        error: "",
      };
    default:
      return state;
  }
};

export default userReducer;