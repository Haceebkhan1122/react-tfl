import axios from 'axios';
import web3 from '../web3/web3';

const BASE_URL = '/products/template/api/v1';

export const FetchTemplates = (page, limit, keyword, race, gender) => async dispatch => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: { page, limit, keyword, race, gender },
    });

    dispatch({ type: 'FETCH-TEMPLATES', data: data.data });
  } catch (error) {
    console.log(error.response.message);
  }
};

export const FetchUserTemplates = (keyword, race, gender, sort, page, limit) => async dispatch => {
  const user = JSON.parse(localStorage.getItem('user'));

  const url = `${BASE_URL}/my-templates`;

  try {
    const { data } = await axios.get(url, {
      headers: { accessToken: user.accessToken },
      params: { keyword, race, gender, sort, page, limit },
    });

    dispatch({ type: 'FETCH-USER-TEMPLATES', data: data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const FetchTemplateByID = id => async dispatch => {
  const user = JSON.parse(localStorage.getItem('user'));

  const url = `${BASE_URL}/my-templates/${id}`;

  try {
    const { data } = await axios.get(url, {
      headers: { accessToken: user.accessToken },
    });

    dispatch({ type: 'FETCH-USER-TEMPLATE', data: data.data });
  } catch (error) {
    console.log(error.response);
  }
};

export const FetchNft = contract => async dispatch => {
  try {
    const accounts = await web3.eth.getAccounts();
    const cids = await contract.methods.AddressToCids(accounts[0]).call();

    const nfts_p = cids.map(async cid => {
      const { data } = await axios.get(`https://ipfs.io/ipfs/${cid}`);
      return data;
    });

    const nfts = await Promise.all(nfts_p);

    dispatch({ type: 'FETCH-NFTS', data: nfts });
  } catch (error) {
    console.log(error);
  }
};
