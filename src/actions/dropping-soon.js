import axios from 'axios';

const ROOT_URL = '/stardust/api/v1/templates';

export const FetchDroppinSoons = (start, limit) => async dispatch => {
  const url = `${ROOT_URL}/get-all/${start}/${limit}`;
  const response = await axios.get(url);
  console.log('Response : ', response);
  dispatch({
    type: 'GET_DROPPING_SOONS',
    data: response.data,
  });
};

export const FetchDroppingSoon = templateId => async dispatch => {
  try {
    console.log('Template Id = > ', templateId);
    const url = `${ROOT_URL}/${templateId}`;
    const response = await axios.get(url);
    console.log('Response = >', response);
    dispatch({
      type: 'GET_DROPPING_SOON',
      payload: response.data,
    });
  } catch (error) {
    console.log('Error => ', error);
    // dispatch({
    //     type: 'TEMPLATE_ERROR',
    //     action :
    // })
  }
};
