import React from 'react';
import { Link } from 'react-router-dom';

export const BuyWarrior = ({ onClose }) => {
  return (
    <div className="modal-content confirm_seletion buy_warrior">
      <div className="modal-header">
        <button type="button" className="close" onClick={onClose} data-dismiss="modal" aria-label="Close">
          <span className="cross_hides">
            <img src="/assets/img/cut.png" alt="" />
          </span>
        </button>
      </div>
      <div className="modal-body">
        <div className="modal_content">
          <div className="table_main select_abilites">
            <div className="card_selection">
              <h2 className="text-center mb-2">No Warrior Owned</h2>
              <p className="text-center">You don’t own a warrior. To enter the fight tournament you must buy one. To buy one please go to</p>
            </div>
          </div>
        </div>
      </div>
      <div className="select_abilites modal-footer priceinfo res_price_info_btn px_footer_btn flex-nowrap mt-0 pt-0 pb-4">
        {/* <div className="for_selectbox hk_hover_for_border">
                  <button type="button" className="btn btn_bg_hk hk_continue with_borders" onClick={onClose} data-dismiss="modal" aria-label="Close">Cancel</button>
              </div> */}
        <Link to="/market-place">
          <button type="button" className="btn btn_bg_hk hk_continue bg_button_height m-auto" onClick={onClose}>
            MarketPlace
          </button>
        </Link>
      </div>
    </div>
  );
};
