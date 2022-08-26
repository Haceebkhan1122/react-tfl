const initalState = {
  user: JSON.parse(localStorage.getItem('user')) || undefined,
  profile: null,
  error: undefined,
  forgotPassword: null,
};

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOGIN-SUCCESS':
      return { ...state, user: action.data };
    case 'LOGIN-FAIL':
      return { ...state, error: action.data };
    case 'LOGOUT':
      return { user: action.data };
    case 'REMOVE-STATE':
      return { error: undefined };
    case 'FORGOT-PASSWORD':
      return { ...state, forgotPassword: action.data };
    case 'PROFILE-UPDATED':
      return { ...state, user: action.data, error: null };
    case 'PROFILE-UPDATE-ERROR':
      return { ...state, error: action.data };
    case 'GET-PROFILE':
      return { ...state, profile: action.data };
    default:
      return { ...state };
  }
};

export default authReducer;
