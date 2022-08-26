let initalState = {
  register: undefined,
  error: undefined,
  changepassword: undefined,
  emailVerify: undefined,
};
const registerReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'REGISTER-SUCCESS':
      return { register: action.data };
    case 'CHANGE-PASSWORD':
      return { changepassword: action.data };
    case 'REGISTER-FAIL':
      return { error: action.data };
    case 'REMOVE-STATE-SIGNUP':
      return { register: undefined, error: undefined };
    case 'EMAIL-VERIFY':
      return { ...state, emailVerify: action.data };
    default:
      return { ...state };
  }
};

export default registerReducer;
