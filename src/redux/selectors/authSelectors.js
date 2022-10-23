export const getIsAuth = (state) => {
  return state.auth.isAuth;
};

export const getAuthLogin = (state) => {
  return state.auth.login;
};

export const getAuthId = (state) => {
  return state.auth.id;
};

export const getCapthcaUrl = (state) => {
  return state.auth.captchaUrl;
};
