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
                                            <form className="form-row">
                                                <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                                                    <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                                                        <input type="number" placeholder="Price" className="form-control"  />
                                                    </div>
                                                </div>
                                             </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select_abilites modal-footer priceinfo modal_footer_px0 flex-nowrap pt-0">
                            <div className="for_selectbox hk_hover_for_border">
                                <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                            </div>
                            <button type="button" className="btn btn_bg_hk hk_continue quickening_continue h_46_btnjust_shape">Confirm</button>
                        </div>
                 </div>
                </div>
            </div>
    )
}
export default ConfirmTransaction