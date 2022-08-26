import { useSelector } from 'react-redux';

const ConfirmAbilites = props => {
  const { SelectedFigther, tournament, selectTransaction, onClose, selectedRune } = props;

  const price = useSelector(state => state.tournaments.encodedPrice);

  return (
    <div className="modal-content confirm_seletion new_style_modal">
      <div className="overflow-hidden position-relative">
        <div className="top_shadow">
          <img src="/assets/img/top_shadow2x.png" alt="" />
        </div>
        <div className="modal-header position-relative">
          <h5 className="modal-title" id="exampleModalLabel">
            Confirm Selection
          </h5>
          <button type="button" className="close" onClick={onClose} data-dismiss="modal" aria-label="Close">
            <span className="cross_hides">
              <img src="/assets/img/cut.png" alt="" />
            </span>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal_content new_style_content px-0 pt-0">
            <div className="table_main select_abilites">
              <div className="card_selection">
                <div className="top_part border_rad_img">
                  <img src={SelectedFigther.image} alt="" />
                </div>
                <h2 className="text-center mb-2">{SelectedFigther.name}</h2>
                <p className="text-center">#73399</p>
                <div className="row ml-0 mr-0">
                  <div className="table_main resp_xs_add_scroll">
                    <div className="card_selection mini_circle_img">
                      <div className="lighting_bg">
                        <div className="row lighting_row">
                          <div className="col-md-5 col-sm-4 col-4">
                            <div className="card_boxes hk_confirm">
                              <div className="profiless">
                                <img src={selectedRune?.img} className="mr-0" />
                              </div>
                              {/* <div className="profiless">
                                <h4>{selectedRune.name}</h4>
                              </div> */}
                            </div>
                          </div>
                          {/* <div className="col-md-4 crust col-sm-4 col-4">
                            <div className="card_boxes">
                              <div className="profiless">
                                <h3>
                                  +10 <span className="magic">Magic Resistance</span>
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 crust col-sm-4 col-4">
                            <div className="card_boxes">
                              <h4>Boost</h4>
                            </div>
                          </div> */}
                        </div>
                        <div className="row cnfrm_sel_modal_death_text">
                          <div className="col-xl-6 text-center">
                            <h3 className="death_text">Death</h3>
                            <h6>
                              <img className="info_img" src="/assets/img/info2x.png" alt="" />
                              <span className="info_text">Info</span>
                            </h6>
                          </div>
                          <div className="col-xl-6 text-center">
                            <h3 className="if_activated_text">If Activated</h3>
                            <h6>
                              <span className="applies_text">Applies buff to </span>
                              <span className="aggression_text">Aggression Ability</span>
                            </h6>
                          </div>
                        </div>
                      </div>

                      {/* <div className="custom_bg">
                        <div className="row">
                          <div className="col-md-5 col-sm-4 col-4">
                            <div className="card_boxes hk_confirm">
                              <div className="profiless">
                                <img src="/assets/img/boot2.png" className="mr-0" />
                              </div>
                              <div className="profiless">
                                <h4>Fire</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 crust col-sm-4 col-4">
                            <div className="card_boxes">
                              <div className="profiless">
                                <h3>
                                  +12 <span className="magic green">Attack Speed</span>
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 crust col-sm-4 col-4">
                            <div className="card_boxes">
                              <h4>Boost</h4>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="custom_bg">
                                          <div className="row">
                                              <div className="col-md-5 col-sm-4 col-4">
                                                  <div className="card_boxes hk_confirm">
                                                      <div className="profiless"><img src="/assets/img/mshield2x.png" /></div>
                                                      <div className="profiless"><h4>Magic Shield</h4></div>
                                                  </div>
                                              </div>
                                              <div className="col-md-4 crust col-sm-4 col-4">
                                                  <div className="card_boxes">
                                                      <div className="profiless"><h3>+10 <span className="magic">Magic Resistance</span></h3></div>
                                                  </div>
                                              </div>
                                              <div className="col-md-3 crust col-sm-4 col-4">
                                                  <div className="card_boxes">
                                                      <h4>Weapons</h4>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="custom_bg">
                                          <div className="row">
                                              <div className="col-md-5 col-sm-4 col-4">
                                                  <div className="card_boxes hk_confirm">
                                                      <div className="profiless"><img src="/assets/img/sword2x.png" /></div>
                                                      <div className="profiless"><h4>Sword</h4></div>
                                                  </div>
                                              </div>
                                              <div className="col-md-4 crust col-sm-4 col-4">
                                                  <div className="card_boxes">
                                                      <div className="profiless"><h3>+12 <span className="magic green">Attack Speed</span></h3></div>
                                                  </div>
                                              </div>
                                              <div className="col-md-3 crust col-sm-4 col-4">
                                                  <div className="card_boxes">
                                                      <h4>Weapons</h4>
                                                  </div>
                                              </div>
                                          </div>
                                      </div> */}
                      {/* <div className="col-md-12 res_price_info_w">
                                          <div className="priceinfo mt-5">
                                              <h3>Registration Price</h3>
                                              <span><img src="/assets/img/ethurem.png" alt="" /> 50.00</span>
                                              <p>0.01245 ETH</p>
                                              <h6>Once you register for a fight, you will not be able to cancel  or change the registration</h6>
                                          </div>
                                      </div> */}
                    </div>
                    <div className="col-md-12 res_price_info_w reg_price">
                      <div className="priceinfo mt-5">
                        <h3>Registration Price</h3>
                        <span>
                          <img src="/assets/img/ethurem.png" alt="" />
                          <span className="entryfee">{tournament.entryFee}</span>
                        </span>
                        <p>0.01245 ETH</p>
                        <h6>Once you register for a brawl, you will not be able to cancel or change the registration</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="select_abilites modal-footer priceinfo res_price_info_btn px_footer_btn flex-nowrap">
              <div className="for_selectbox hk_hover_for_border">
                <button type="button" className="btn btn_bg_hk hk_continue with_borders" onClick={onClose} data-dismiss="modal" aria-label="Close">
                  Cancel
                </button>
              </div>

              <button type="button" className="btn btn_bg_hk hk_continue bg_button_height" onClick={selectTransaction}>
                Confirm
              </button>
            </div>
          </div>
        </div>
        {/* <div className="select_abilites modal-footer priceinfo res_price_info_btn px_footer_btn flex-nowrap">
        <div className="for_selectbox hk_hover_for_border">
          <button type="button" className="btn btn_bg_hk hk_continue with_borders" onClick={onClose} data-dismiss="modal" aria-label="Close">
            Cancel
          </button>
        </div>
        <button type="button" className="btn btn_bg_hk hk_continue bg_button_height" onClick={selectTransaction}>
          Confirm
        </button>
      </div> */}
      </div>
      <div className="bottom_shadow">
        <img src="/assets/img/top_shadow2x.png" alt="" />
      </div>
    </div>
  );
};
export default ConfirmAbilites;
