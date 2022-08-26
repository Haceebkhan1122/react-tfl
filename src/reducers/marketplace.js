const initialState = {
  templates: [],
  template: {},
  loading: true,
};

const marketplaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GETTEMPLATES':
      return { ...state, templates: action.data, loading: false };
    case 'GET_TEMPLATE':
      return { ...state, template: action.payload, loading: false };
    case 'SET_LOADER':
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};

export default marketplaceReducer;
