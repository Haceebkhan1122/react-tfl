import axios from 'axios';

const BASE_URL = '/winLoss/api/v1';

export const GetWinRecords = (filterType, min, max) => async dispatch => {
  const url = `${BASE_URL}/`;
  const user = JSON.parse(localStorage.getItem('user'));

  const { data } = await axios.get(url, { params: { filterType, min, max }, headers: { accesstoken: user.accessToken } });

  dispatch({ type: 'WIN-RECORD', data: data.data });
};
