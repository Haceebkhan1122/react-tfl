const initialState = {
  contract: null,
};

const smartContractReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET-CONTRACT':
      return { ...state, contract: action.data };
    default:
      return { ...state };
  }
};

export default smartContractReducer;
