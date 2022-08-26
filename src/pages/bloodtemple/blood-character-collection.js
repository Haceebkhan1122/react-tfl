import { useState } from 'react';
import AllTabs from './all-tabs';
import ForSale from './for-sale';
import BloodTempleTabs from './blood-temple-tabs';
import Favorite from './favorite';
import Inventory from './inventory';
import WinLoss from './win-loss';
import Trophies from './trophies';
import Winnings from './winnings';

const BloodCharacterCollection = () => {
  const [tab, setTab] = useState('ALL');

  return (
    <div className="character_profile_info">
      <div className="row">
        <div className="col-md-12 p-0">
          <div className="char_details_attributes">
            <div className="row">
              <div className="container px-sm-0 px-5">
                <div className="col-md-12 p-0 details_char pl-2 pt-5">
                  <h6>Blood Temple</h6>
                </div>
              </div>
              <BloodTempleTabs onTabChange={setTab} />
              <hr className="char_line" />
              <div className="container px-sm-0 px-5">
                <div className="tab-content mt-4 px-2" id="pills-tabContent">
                  {tab === 'ALL' && <AllTabs />}
                  {tab === 'FOR-SALE' && <ForSale />}
                  {tab === 'FAVORITES' && <Favorite />}
                  {tab === 'INVENTORY' && <Inventory />}
                  {tab === 'WIN-LOSS-RECORDS' && <WinLoss />}
                  {tab === 'TROPHIES' && <Trophies />}
                  {tab === 'WINNINGS' && <Winnings />}
                  <></>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodCharacterCollection;
