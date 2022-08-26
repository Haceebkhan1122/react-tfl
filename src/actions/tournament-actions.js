import axios from 'axios';

const Tournment_Root_Url = '/tournament/api/v1';

export const GetTournments = (myOnly, userID, state, page, limit, sort) => async dispatch => {
  try {
    dispatch({ type: 'TOURNAMENTS-LOADING' });

    const url = `${Tournment_Root_Url}`;

    const { data } = await axios.get(url, {
      params: {
        page,
        limit,
        state,
        sort,
        myOnly,
        userID,
      },
    });

    if (page === 1) {
      dispatch({
        type: 'GET_TOURNAMENTS',
        data: data.data,
      });
    } else {
      dispatch({
        type: 'LOAD_MORE_TOURNAMENTS',
        data: data.data,
      });
    }
  } catch (error) {
    console.log(error.response.message);
  }
};

export const GetTournment = id => async dispatch => {
  try {
    dispatch({ type: 'TOURNAMENTS-LOADING' });

    const url = `${Tournment_Root_Url}/${id}`;
    const response = await axios.get(url);

    dispatch({
      type: 'GET_TOURNMENT',
      data: response.data.data,
    });
  } catch (error) {
    // dispatch({
    //     type: 'REGISTER-FAIL',
    //     data: error.response
    // });
  }
};

export const GetTournmentLocal = tournament => async dispatch => {
  try {
    dispatch({ type: 'TOURNAMENTS-LOADING' });

    dispatch({
      type: 'GET_TOURNMENT',
      data: tournament,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const GetClosedTournment = () => async dispatch => {
  try {
    dispatch({ type: 'TOURNAMENTS-LOADING' });

    const url = `${Tournment_Root_Url}/closed`;
    const response = await axios.get(url);

    dispatch({
      type: 'GET_CLOSED_TOURNAMENT',
      data: response.data,
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const AddPlayer = (id, payload) => async dispatch => {
  try {
    const url = `${Tournment_Root_Url}/add-player/${id}`;
    const response = await axios.post(url, { ...payload });

    dispatch({
      type: 'CONFIRM_TRANSACTION',
      data: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: 'FAIL_TRANSACTION',
      data: error.response,
    });
  }
};

export const FetchMatch = id => async dispatch => {
  try {
    const url = `${Tournment_Root_Url}/match/${id}`;
    const response = await axios.get(url);

    dispatch({
      type: 'GET-MATCH',
      data: response.data.data.match,
    });

    dispatch({
      type: 'GET-NEXT-MATCHES',
      data: response.data.nextMatches,
    });
  } catch (error) {
    console.log(error);
  }
};

export const SelectTournament = tournament => dispatch => {
  dispatch({ type: 'SELECT-TOURNAMENT', data: tournament });
};

export const UnSelectTournament = () => dispatch => {
  dispatch({ type: 'UNSELECT-TOURNAMENT' });
};

export const LoadMoreTournaments =
  (state = 'OPEN', page = 1, limit = 20, sort = 1) =>
  async dispatch => {
    try {
      dispatch({ type: 'TOURNAMENTS-LOADING' });

      const url = `${Tournment_Root_Url}`;

      const { data } = await axios.get(url, {
        params: {
          page,
          limit,
          state,
          sort,
        },
      });

      dispatch({
        type: 'LOAD_MORE_TOURNAMENTS',
        data: data.data,
      });
    } catch (error) {
      console.log(error.response.message);
    }
  };

export const CheckTournamentLength = id => async dispatch => {
  const url = `${Tournment_Root_Url}/check-length/${id}`;
  try {
    const { data } = await axios.get(url);
    dispatch({ type: 'SET-ENCODED-PRICE', data: data.price });
  } catch (error) {
    dispatch({ type: 'SET-ENCODED-PRICE', data: null });
  }
};
