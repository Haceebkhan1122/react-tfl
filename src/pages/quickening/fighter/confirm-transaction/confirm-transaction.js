import React, {useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import $ from 'jquery';

const ConfirmTransaction=()=>{

    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        $('button.btn_bg_hk.go_marketplace').on('click', function () {
            $('.modal-open').css('overflow', 'overlay');
            $('.modal-backdrop.fade.show').css('display', 'none');
            $('body').removeClass('modal-open');
        });
    }, [])
    return(
        <div className="modal fade hk_modal_for_select bd-example-modal-lg" id="exampleModal" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                 <div className="modal-content transaction_confirm">
                        <div className="modal-header resp_trans_pt_modal">
                            <h5 className="modal-title" id="exampleModalLabel">Transaction Confirmation</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="table_main select_abilites">
                                    <div className="card_selection">
                                        <div className="row ml-1 mr-1">
                                            <div className="table_main">
                                                <div className="card_selection">
                                                    <div className="col-md-12">
                                                        <div className="priceinfo mt-3">
                                                            <h3>Current Price</h3>
                                                            <span><img src="/assets/img/ethurem.png" alt="" /> 50.00</span>
                                                            <p>0.01245 ETH</p>
                                                        </div>
                                                        <div className="priceinfo mt-5">
                                                            <h3>ESTIMATED TOTAL</h3>
                                                            <span><img src="/assets/img/ethurem.png" alt="" /> 50.00</span>
                                                            <p>0.01245 ETH</p>
                                                        </div>
                                                        <button className="addMore">Add More Taunt Coins</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select_abilites modal-footer priceinfo modal_footer_px0 flex-nowrap">
                            <div className="for_selectbox hk_hover_for_border">
                                <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                            </div>
                            <button type="button" className="btn btn_bg_hk hk_continue quickening_continue h_46_btnjust_shape">Confirm</button>
                        </div>
                 </div>
                <div className="modal-content quickening_loader">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Quickening</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="modal_content">
                            <div className="table_main select_abilites">
                                <div className="card_selection">
                                    <div className="row ml-1 mr-1 loeaderss">
                                            <div className="loader4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="modal-content quick_sucess">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Quickening Success</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="table_main select_abilites">
                                    <div className="card_selection">
                                        <div className="row ml-1 mr-1">
                                          <div className="quick_success">
                                                <h3>Lets give them privacy</h3>
                                                <p className="text-center">Quickening takes about 2-3 minutes to complete and new fighter to appear in your collection</p>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select_abilites modal-footer priceinfo modal_footer_px0 flex-nowrap">
                            <div className="for_selectbox hk_hover_for_border">
                                <Link to="/Quickening">
                                <button type="button" className="btn btn_bg_hk hk_continue with_borders to_quicks go_marketplace">To Quickening</button>
                                </Link>
                            </div>
                            <Link to="/market-place/character-details/character-profile-details">
                            <button type="button" className="btn btn_bg_hk hk_continue quickening_continue for_congrats go_marketplace" data-toggle="modal" data-target="#exampleModal1">to Collection</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default ConfirmTransaction