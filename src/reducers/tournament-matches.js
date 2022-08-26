const initialState = {
  matches: [],
  nextMatches: [],
  currentBrawls: [],
  match: null,
  loading: false,
  canLoadMore: false,
};

const tournamentMatchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET-TOURNAMENT-MATCHES':
      return { ...state, matches: action.data.filter(match => !!match), loading: false, canLoadMore: !(action.data.length < 10) };
    case 'GET-MATCHES':
      return { ...state, matches: action.data, loading: false, canLoadMore: !(action.data.length < 10) };
    case 'LOAD-MORE-MATCHES':
      return { ...state, matches: [...state.matches, ...action.data], loading: false, canLoadMore: !(action.data.length < 10) };
    case 'GET-NEXT-MATCHES':
      return { ...state, nextMatches: action.data, loading: false };
    case 'GET-CURRENT-BRAWLS':
      return { ...state, currentBrawls: action.data, loading: false };
    case 'CURRENT-BRAWLS-ASC':
      const currentBrawlsASC = [...state.currentBrawls];
      currentBrawlsASC.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      return { ...state, currentBrawls: currentBrawlsASC };
    case 'CURRENT-BRAWLS-DESC':
      const currentBrawlsDESC = [...state.currentBrawls];
      currentBrawlsDESC.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      return { ...state, currentBrawls: currentBrawlsDESC };
    case 'MATCHES-LOADING':
      return { ...state, loading: true };
    case 'MATCHES-LOADED':
      return { ...state, loading: false };
    case 'CLEAR-MATCHES':
      return { ...state, matches: [] };
    case 'CLEAR-MATCHES-LOAD-MORE':
      return { ...state, canLoadMore: false };
    default:
      return { ...state };
  }
};

export default tournamentMatchesReducer;
