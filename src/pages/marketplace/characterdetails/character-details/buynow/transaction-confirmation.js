import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import '../../../characterdetails/character-details.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
function TransactionConfirmationDialog({ close, confirm }) {

    const { character } = useParams();
    const dispatch = useDispatch();

    return (
        <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">

            <div className="modal-content transaction_confirm">
                <div className="modal-header resp_trans_pt_modal">
                    <h5 className="modal-title" id="exampleModalLabel">Transaction Confirmation</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
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
                                                    <h3>Fighter Price</h3>
                                                    <span><img src="/assets/img/ethurem.png" alt="" /> 50.00</span>
                                                    <p>0.01245 ETH</p>
                                                </div>
                                                <div className="priceinfo mt-5">
                                                    <h3 className="pb_5_px">ESTIMATED TOTAL</h3>
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
                <div className="select_abilites modal-footer priceinfo res_px_modal_footer flex-nowrap">
                    <div className="for_selectbox hk_hover_for_border">
                        <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders" onClick={close}>Cancel</button>
                    </div>
                    <button type="button" className="btn btn_bg_hk hk_continue confirm h_46_btnjust_shape" onClick={confirm}>Confirm</button>
                </div>
            </div>


        </div>
    )
}

export default TransactionConfirmationDialog
