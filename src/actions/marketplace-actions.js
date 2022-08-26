import axios from 'axios';

const ROOT_URL = '/stardust/api/v1/templates';

export const FetchTemplates = (start, limit) => async dispatch => {
  const url = `${ROOT_URL}/get-all/${start}/${limit}`;
  const response = await axios.get(url);

  dispatch({
    type: 'GETTEMPLATES',
    data: response.data,
  });
};

export const FetchTemplate = templateId => async dispatch => {
  try {
    const url = `${ROOT_URL}/${templateId}`;
    const response = await axios.get(url);

    dispatch({
      type: 'GET_TEMPLATE',
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
