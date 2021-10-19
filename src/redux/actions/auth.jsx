import { types } from "../types/types";
import { fetchConToken, fetchSinToken } from "../../helpers/fetch";
import Swal from "sweetalert2";
import { eventLogout } from "./events";
export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchSinToken("auth", { email, password }, "POST");
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
export const startRegister = (email, password, name) => {
  return async (dispatch) => {
    const resp = await fetchSinToken(
      "auth/new",
      { email, password, name },
      "POST"
    );
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
export const startChecking = () => {
  return async (dispatch) => {
    const isCurrentToken = !!(localStorage.getItem('token') || '');
 
    if (!isCurrentToken){
        dispatch(checkingFinish()); 
        return;
    }
    const resp = await fetchConToken("auth/renew");
    const body = await resp.json();
    if (body.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
      dispatch(checkingFinish());
    }
  };
};
export const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
const logout = () => ({ type: types.authLogout });
export const startLogout = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(eventLogout());
    dispatch(logout());
  };
};
const checkingFinish = () => ({ type: types.authCheckingFinish });
