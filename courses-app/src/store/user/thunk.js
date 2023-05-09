import axios from "axios";
import { loginSuccess } from "./actionCreators";

export const fetchUser = (user, token) => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:4000/users/me", {
        headers: { Authorization: token },
      });
      dispatch(
        loginSuccess({ ...user, token, role: response.data.result.role })
      );
    } catch (error) {
      console.error(error);
    }
  };
};
