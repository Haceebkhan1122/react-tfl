import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './marketplace.css';

import DropingSoon from './market-place/dropping-soon/dropping-soon';
import HotSale from './market-place/hot-sale/hot-sale';
import WhatsNew from './market-place/whats-new/whats-new';
import AvailableNft from './market-place/avaiable-nfts/available-nft';

function MarketPlace() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="top_nft pt-5 market_place card_market_first pb-5">
        <div className="container">
          <DropingSoon />
          <HotSale />
          <WhatsNew />
          <AvailableNft />
        </div>
      </div>
    </>
  );
}

export default MarketPlace;
