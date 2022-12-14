import axios from "axios";
import swal from "sweetalert";
import {
  setToken,
  setRegister,
  setLogin,
  setForgot,
  setWhoami,
  setChange,
  setReset,
} from "../Reducers/authReducer";

export const register = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/register`,
      data
    );
    if (result.data.status) {
      dispatch(setRegister(result.data));
      swal({
        title: `${result.data.message}, please check your email for verification`,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login`,
      data
    );
    if (result.data.status) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setLogin(result.data));
      swal({
        title: result.data.message,
        icon: "success",
        button: "Enter",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  const data = {
    access_token: accessToken,
  };
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/login-google`,
      data
    );
    if (result.data.data.token) {
      localStorage.setItem("token", result.data.data.token);
      dispatch(setToken(result.data.data.token));
      swal({
        title: result.data.message,
        icon: "success",
        button: "Enter",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "warning",
      button: "OK",
    });
  }
};

export const forgotPassword = (data) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_AUTH_API}/auth/forgot-password`,
      data
    );
    if (result.data.status) {
      dispatch(setForgot(result.data));
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const resetpassword = (data, token) => async (dispatch) => {
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/auth/reset-password?token=${token}`,
      data
    );
    if (result.data.status) {
      dispatch(setReset(data));
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const changePassword = (data) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.put(
      `${process.env.REACT_APP_AUTH_API}/auth/change-password`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setChange(result.data));
      swal({
        title: result.data.message,
        icon: "success",
        button: "OK",
      });
    }
  } catch (error) {
    swal({
      title: error.response.data.message,
      icon: "error",
      button: "OK",
    });
  }
};

export const getwhoami = (callback) => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;
    const result = await axios.get(
      `${process.env.REACT_APP_AUTH_API}/auth/whoami`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (result.data.status) {
      dispatch(setWhoami(result.data));
    }
  } catch (error) {
    if (error.response.status === 500) {
      dispatch(setToken(null));
      callback(error.response.status);
    }
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
  dispatch(setWhoami(null));
};
