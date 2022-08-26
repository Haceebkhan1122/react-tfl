const initialState = {
  templates: [],
  nfts: [],
  userTemplates: [],
  selectedTemplate: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH-TEMPLATES':
      return { ...state, templates: action.data };
    case 'FETCH-NFTS':
      return { ...state, nfts: action.data };
    case 'FETCH-USER-TEMPLATES':
      return { ...state, userTemplates: action.data };
    case 'SELECTED_TEMPLATE':
      return { ...state, selectedTemplate: action.data };
    case 'FETCH-USER-TEMPLATE':
      return { ...state, selectedTemplate: action.data };
    default:
      return state;
  }
};

export default productReducer;
