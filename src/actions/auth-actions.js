import axios from "axios";
const Auth_Root_Url = "/api/v1/auth";
export const Register = (username, email, password) => async (dispatch) => {
  try {
    const url = `${Auth_Root_Url}/register`;
    const response = await axios.post(url, { username, email, password });
    dispatch({
      type: "REGISTER-SUCCESS",
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER-FAIL",
      data: error.response,
    });
  }
};
export const ChangePassword = (new_password, token) => async (dispatch) => {
  try {
    const url = `${Auth_Root_Url}/changepassword`;
    const response = await axios.post(url, {
      new_password: new_password,
      token: token,
    });

    dispatch({
      type: "CHANGE-PASSWORD",
      data: true,
    });
  } catch (error) {
    dispatch({
      type: "CHANGE-PASSWORD",
      data: false,
    });
  }
};

export const UnsetChangePasswordState = () => async (dispatch) => {
  dispatch({
    type: "CHANGE-PASSWORD",
    data: undefined,
  });
};

export const UserVerify = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = `${Auth_Root_Url}/check-user`;

    const response = await axios.get(url, {
      headers: { accessToken: user.accessToken },
    });
  } catch (e) {
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      data: undefined,
    });
  }
};

export const EmailLogin = (email, password) => async (dispatch) => {
  try {
    const url = `${Auth_Root_Url}/email-login`;
    const response = await axios.post(url, { email, password });

    localStorage.setItem("user", JSON.stringify(response.data.data));

    dispatch({
      type: "LOGIN-SUCCESS",
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN-FAIL",
      data: error.response,
    });
  }
};

export const MetaLogin = (metaAddress) => async (dispatch) => {
  try {
    const url = `${Auth_Root_Url}/meta-login`;

    const response = await axios.post(url, { metaAddress });

    localStorage.setItem("user", JSON.stringify(response.data.data));

    dispatch({
      type: "LOGIN-SUCCESS",
      data: response.data.data,
    });
  } catch (e) {
    console.log(e.response);
  }
};

export const MetaConnect = (metaAddress) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = `${Auth_Root_Url}/meta-connect`;

    const response = await axios.post(
      url,
      { metaAddress },
      { headers: { accesstoken: user.accessToken } }
    );

    localStorage.setItem("user", JSON.stringify(response.data.data));

    dispatch({
      type: "META-CONNECT",
      data: response.data.data,
    });
  } catch (e) {
    console.log(e.response);
  }
};

export const ForgottenPassword = (email) => async (dispatch) => {
  dispatch({ type: "REMOVE-STATE-FORGOTPASSWORD" });

  try {
    const url = `${Auth_Root_Url}/forgot-password`;
    const response = await axios.post(url, { email });

    dispatch({
      type: "FORGOT-PASSWORD-SUCCESS",
      data: response.data.msg,
    });
  } catch (error) {
    dispatch({
      type: "FORGOT-PASSWORD-FAIL",
      data: error?.response?.data?.msg,
    });
  }
};

export const Logout = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const url = `${Auth_Root_Url}/logout`;

    const response = await axios.post(
      url,
      { metaAddress: user.metaAddress, email: user.email },
      { headers: { accesstoken: user.accessToken } }
    );

    localStorage.clear();

    dispatch({
      type: "LOGOUT",
      data: undefined,
    });
  } catch (e) {
    localStorage.clear();
    dispatch({
      type: "LOGOUT",
      data: undefined,
    });
  }
};

export const UpdateProfile = (username, email) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const url = `${Auth_Root_Url}/update-profile`;

  try {
    const response = await axios.post(
      url,
      { username, email },
      { headers: { accesstoken: user.accessToken } }
    );

    localStorage.setItem("user", JSON.stringify(response.data.data));

    dispatch({
      type: "PROFILE-UPDATED",
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "PROFILE-UPDATE-ERROR",
      data: error.response.data.msg,
    });
  }
};

export const GetUserProfile = () => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const url = `${Auth_Root_Url}/get-profile`;

  try {
    const response = await axios.get(url, {
      headers: { accesstoken: user.accessToken },
    });

    dispatch({
      type: "GET-PROFILE",
      data: response.data.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};
