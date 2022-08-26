const initalState = {
  forgotPassword: '',
  error: '',
};

const forgotPassword = (state = initalState, action) => {
  switch (action.type) {
    case 'FORGOT-PASSWORD-SUCCESS':
      return { ...state, forgotPassword: action.data };
    case 'FORGOT-PASSWORD-FAIL':
      return { ...state, error: action.data };
    case 'REMOVE-STATE-FORGOTPASSWORD':
      return { ...initalState, forgotPassword: '', error: '' };
    default:
      return { ...state };
  }
};

export default forgotPassword;
