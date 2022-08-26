import './App.css';

import { useEffect } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import Home from './pages/home/home.js';
import Faq from './pages/faq/faq.js';
import Brawl from './pages/brawls/tournaments/brawl';
import FullBracket from '../src/pages/brawls/full-bracket';
import BrawlResults from './pages/brawls/tournaments/brawl-results.js';
import Brawls from './pages/brawls/brawls';
import MarketPlace from './pages/marketplace/marketplace';
import MarketPlaceOutlet from './pages/marketplace/matket-place-outlet';
import CharacterDetailsOutlet from './pages/marketplace/characterdetails/caharacter-details-outlet';
import CharacterDetails from '../src/pages/marketplace/characterdetails/character-details';
import CharacterProfileDetails from '../src/pages/marketplace/characterdetails/character-profile-details';
import CharacterDetails2 from '../src/pages/marketplace/characterdetails/character-details-2';

import Quickening from './pages/quickening/quickening';
import QuickeningOutlet from '../src/pages/quickening/quickening-outlets';

import ChooseFighter from './pages/quickening/fighter/choose-fighter.js';

import UserProfile from './components/user/UserProfile';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import BrawlOutlet from './pages/brawls/brawl-outlet';

import { UserVerify } from './actions/auth-actions';
import TournamentDetails from './pages/brawls/tournaments/tournament-details/tournaments-details';

import BloodTemple from './pages/bloodtemple/blood-temple';
import BloodCharacterDetails from './pages/bloodtemple/blood-character-details';

import ForgotPassword from './components/header/ForgotPassword';
import ConfirmPassword from './pages/confirm-password/confirm-password';
import TournamentMatches from './pages/brawls/tournaments/taurnament-matches';
import TournamentBrackets from './pages/brawls/tournaments/tournament-brackets';

import BlankPage from './pages/blank-page/blank-page';
import { useDispatch } from 'react-redux';
import { FetchABIAndAddress } from './actions/smart-contract-actions';
import AvailableNFTListing from './pages/marketplace/market-place/avaiable-nfts/available-nft-listing';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchABIAndAddress());
  }, []);

  return (
    <Router basename="/">
      <div className="App">
        <div className="main_wrapper">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/fpass/:id" element={<ConfirmPassword />} />
            <Route path="home" element={<Home />} />
            <Route path="user-profile" element={<UserProfile />} />

            <Route path="brawl" element={<BrawlOutlet />}>
              <Route index element={<Brawl />} />
              <Route path="tournament/:id" element={<TournamentMatches />} />
              <Route path=":tournamentId" element={<TournamentDetails />} />
              <Route path="brawl-results/:tournamentId" element={<BrawlResults />} />
              <Route path="play/:tid/:matchID" element={<Brawls />} />
              <Route path="brawl-results" element={<BrawlResults />} />
              <Route path="play" element={<Brawls />} />
              <Route path="full-bracket" element={<FullBracket />} />
              <Route path="brawl-results" element={<BrawlResults />} />
              <Route path="play" element={<Brawls />} />
              <Route path="bracket/:tid" element={<FullBracket />} />
            </Route>

            <Route path="blood-temple" element={<BloodTemple />} />
            <Route path="blood-character-detail/:id" element={<BloodCharacterDetails />} />

            <Route path="blank-page" element={<BlankPage />} />

            <Route path="market-place" element={<MarketPlaceOutlet />}>
              <Route index element={<MarketPlace />} />
              <Route path="available-nft" element={<AvailableNFTListing />} />
              <Route path="character-details" element={<CharacterDetailsOutlet />}>
                <Route path="" element={<Navigate to="/market-place" />} />
                <Route path=":charactedDetailId" element={<CharacterDetails />} />
                <Route path="character-profile-details" element={<CharacterProfileDetails />} />
                <Route path="character-details-2" element={<CharacterDetails2 />} />
              </Route>
            </Route>

            <Route path="Quickening" element={<QuickeningOutlet />}>
              <Route index element={<Quickening />} />
              <Route path="choose-fighter" element={<ChooseFighter />} />
            </Route>
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
