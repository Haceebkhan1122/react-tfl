const initialState = {
  win: [],
};

const winLossReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'WIN-RECORD':
      return { ...state, win: action.data };
    default:
      return { ...state };
  }
};

export default winLossReducer;
