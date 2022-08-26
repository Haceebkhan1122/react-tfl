import axios from "axios";

const URL = "/match/api/v1";

export const FetchTournamentMatches =
  (id, page = 1, limit = 20) =>
  async (dispatch) => {
    const url = `${URL}/tournament/${id}`;

    try {
      dispatch({ type: "MATCHES-LOADING" });

      const response = await axios.get(url, { params: { page, limit } });
      dispatch({
        type: "GET-TOURNAMENT-MATCHES",
        data: response.data.data,
      });
    } catch (error) {
      dispatch({ type: "MATCHES-LOADED" });
      console.log(error.response.message);
    }
  };

export const FetchAllTournamentMatches = (id, limit) => async (dispatch) => {
  const url = `${URL}/all/${id}`;

  try {
    dispatch({ type: "MATCHES-LOADING" });

    const response = await axios.get(url);
    dispatch({
      type: "GET-TOURNAMENT-MATCHES",
      data: response.data.matches,
    });
  } catch (error) {
    dispatch({ type: "MATCHES-LOADED" });
    console.log(error.response);
  }
};

// export const fetchLiveMatches =
//   (page = 1, limit = 10, sort = 1) =>
//   async dispatch => {
//     console.log('ID : ', id);
//     const url = `${URL}/all/${id}`;

//     try {
//       const response = await axios.get(url, { params: { page, limit, sort } });

//       dispatch({
//         type: 'GET-TOURNAMENT-MATCHES',
//         data: response.data.matches,
//       });
//     } catch (error) {
//       console.log(error.response.message);
//     }
//   };

// export const fetchLiveMatches = (page, limit, sort) => async dispatch => {
//   const url = `${URL}/live`;

//   try {
//     const response = await axios.get(url, { params: { page, limit, sort } });

//     dispatch({
//       type: 'GET-LIVE-MATCHES',
//       data: response.data.data,
//     });
//   } catch (error) {
//     console.log(error.response.message);
//   }
// };

// export const fetchEndedMatches =
//   (page = 1, limit = 10, sort = 1) =>
//   async dispatch => {
//     const url = `${URL}/ended`;

//     try {
//       const response = await axios.get(url, { params: { page, limit, sort } });

//       dispatch({
//         type: 'GET-ENDED-MATCHES',
//         data: response.data.data,
//       });
//     } catch (error) {
//       console.log(error.response.message);
//     }
//   };

export const FetchMatches =
  (myBrawls, userID, state, page, limit, sort) => async (dispatch) => {
    const url = state === "LIVE_BRAWLS" ? `${URL}/live` : `${URL}/ended`;

    try {
      dispatch({ type: "MATCHES-LOADING" });

      const response = await axios.get(url, {
        params: { page, limit, sort, myBrawls, userID },
      });

      if (page === 1) {
        dispatch({
          type: "GET-MATCHES",
          data: response.data.data,
        });
      } else {
        dispatch({
          type: "LOAD-MORE-MATCHES",
          data: response.data.data,
        });
      }
    } catch (error) {
      dispatch({ type: "MATCHES-LOADED" });
      console.log(error.response.data.msg);
    }
  };

export const FetchNextMatches = (index) => async (dispatch) => {
  const url = `${URL}/next`;

  try {
    dispatch({ type: "MATCHES-LOADING" });

    const response = await axios.get(url, { params: { index: index } });

    dispatch({
      type: "GET-NEXT-MATCHES",
      data: response.data.data,
    });
  } catch (error) {
    dispatch({ type: "MATCHES-LOADED" });
    console.error(error.response);
  }
};

export const GetCurrentBrawls = () => async (dispatch) => {
  const url = `${URL}/current`;

  try {
    dispatch({ type: "MATCHES-LOADING" });

    const response = await axios.get(url);

    dispatch({
      type: "GET-CURRENT-BRAWLS",
      data: response.data.data,
    });
  } catch (error) {
    dispatch({ type: "MATCHES-LOADED" });
    console.log(error.response);
  }
};
