import axios from 'axios';
import web3 from '../web3/web3';

const BASE_URL = '/auth/api/v1/vault';

export const FetchABIAndAddress = () => async dispatch => {
  const url = `${BASE_URL}/get-contract`;
  try {
    const { data } = await axios.get(url);

    const { abi, address } = data;

    const contract = new web3.eth.Contract(abi, address);

    dispatch({ type: 'SET-CONTRACT', data: contract });
  } catch (error) {
    console.log(error.response);
  }
};
