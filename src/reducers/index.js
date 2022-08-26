import { combineReducers } from 'redux';
import nftReducer from './avalaible-nfts';
import droppingSoonReducer from './dropping-soon';
import hotSaleReducer from './hot-sale';
import marketplaceReducer from './marketplace';
import authReducer from './auth';
import whatsNewReducer from './whats-new';
import register from './register';
import tournaments from './tournments';
import forgotPassword from './forgot-password';
import tournamentMatchesReducer from './tournament-matches';
import productReducer from './products';
import smartContractReducer from './smart-contract';
import winLossReducer from './win-loss';

const rootReducer = combineReducers({
  auth: authReducer,
  marketPlace: marketplaceReducer,
  droppingSoon: droppingSoonReducer,
  hotSale: hotSaleReducer,
  nft: nftReducer,
  whatsNew: whatsNewReducer,
  registerUser: register,
  tournaments: tournaments,
  forgotPassword: forgotPassword,
  tournamentMatches: tournamentMatchesReducer,
  products: productReducer,
  tflContract: smartContractReducer,
  winLoss: winLossReducer,
});

export default rootReducer;
