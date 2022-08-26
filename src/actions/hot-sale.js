import axios from 'axios';

const ROOT_URL = '/stardust/api/v1/templates';

export const FetchHotSales = (start, limit) => async dispatch => {
  const url = `${ROOT_URL}/get-all/${start}/${limit}`;
  const response = await axios.get(url);
  console.log('Response : ', response);
  dispatch({
    type: 'GET_HOT_SALES',
    data: response.data,
  });
};

export const FetchHotSale = templateId => async dispatch => {
  try {
    console.log('Template Id = > ', templateId);
    const url = `${ROOT_URL}/${templateId}`;
    const response = await axios.get(url);
    console.log('Response = >', response);
    dispatch({
      type: 'GET_HOT_SALE',
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
