import React from 'react';

export const WarriorSignup = ({ onClose }) => {
  return (
    <div className="modal-content confirm_seletion buy_warrior warrior_login">
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
              <h2 className="text-center mb-2">Not logged in</h2>
              <p className="text-center">Please login or signup to enter your warrior in fight tournaments</p>
            </div>
          </div>
        </div>
      </div>
      <div className="select_abilites modal-footer priceinfo res_price_info_btn px_footer_btn mt-0 pt-0 pb-4 pl-0">
        <div className="for_selectbox hk_hover_for_border">
          <button type="button" className="btn btn_bg_hk hk_continue with_borders" data-dismiss="modal" aria-label="Close">
            Login
          </button>
        </div>
        <button type="button" className="btn btn_bg_hk hk_continue bg_button_height">
          SignUp
        </button>
      </div>
    </div>
  );
};
