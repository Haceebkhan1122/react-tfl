const initialState = {
  tournaments: [],
  closedTournaments: [],
  tournament: null,
  transaction: null,
  error: null,
  matches: null,
  selectedMatch: null,
  nextMatches: null,
  loading: false,
  canLoadMore: false,
  encodedPrice: null,
};

const tournamentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TOURNAMENTS':
      return { ...state, tournaments: action.data, loading: false, canLoadMore: !(action.data.length < 10) };
    case 'GET_CLOSED_TOURNAMENT':
      return { ...state, closedTournaments: action.data, loading: false, canLoadMore: !(action.data.length < 10) };
    case 'GET_TOURNMENT':
      return { ...state, tournament: action.data, loading: false };
    case 'CONFIRM_TRANSACTION':
      const tournaments = [...state.tournaments];
      const index = tournaments.findIndex(tournament => tournament._id === action.data._id);
      tournaments[index] = action.data;
      const isScheduled = Number(action.data.players.length) === Number(action.data.players.roundsCount);
      if (isScheduled) {
        tournaments.splice(index, 1);
      }
      return {
        ...state,
        tournaments: tournaments,
        transaction: action.data,
        tournament: isScheduled ? action.data : null,
        loading: false,
      };
    case 'FAIL_TRANSACTION':
      return { ...state, error: action.data, loading: false };
    case 'REMOVE_TRANSACTION_STATE':
      return { ...state, transaction: null, error: null, loading: false };
    case 'GET-MATCH':
      return { ...state, selectedMatch: action.data, loading: false };
    case 'GET-NEXT-MATCHES':
      return { ...state, nextMatches: action.data, loading: false };
    case 'UPDATE-TOURNAMENT':
      return { ...state, tournament: { data: action.data }, loading: false };
    case 'SET_LOADER':
      return { ...state, loading: true };
    case 'SELECT-TOURNAMENT':
      return { ...state, tournament: action.data };
    case 'UNSELECT-TOURNAMENT':
      return { ...state, tournament: null };
    case 'LOAD_MORE_TOURNAMENTS':
      return { ...state, tournaments: [...state.tournaments, ...action.data], loading: false, canLoadMore: !(action.data.length < 10) };
    case 'TOURNAMENTS-LOADING':
      return { ...state, loading: true };
    case 'CLEAR-TOURNAMENTS':
      return { ...state, tournaments: [] };
    case 'CLEAR-TOURNAMENTS-LOAD-MORE':
      return { ...state, canLoadMore: false };
    case 'SET-ENCODED-PRICE':
      return { ...state, encodedPrice: action.data };
    default:
      return { ...state };
  }
};

export default tournamentReducer;
