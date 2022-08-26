import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import '../../../characterdetails/character-details.css';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import $ from 'jquery'
import { useLocation } from "react-router-dom";

function PurchaseCompleted({close}) {
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
 
    const { character } = useParams();
    const dispatch = useDispatch();

    return (
        <div className="hide modal-content confirm_seletion bough_fight_main_tops res_w_auto_confirm_seletion">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Purchase Completed</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
                    <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                </button>
            </div>
            <div className="modal-body">
                <div className="modal_content">
                    <div className="table_main select_abilites bough_fight_main">
                        <div className="card_selection">
                            <div className="top_part">
                                <img src="/assets/img/select_boot_top.png" alt="" />
                            </div>
                            <h2 className="text-center mb-2">Viking Sheild</h2>
                            <p className="text-center">#733342</p>
                            <div className="row ml-0 mr-0">
                                <div className="table_main">
                                    <div className="card_selection">
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-sm-6 col-12">
                                                    <div className="fight_bought">
                                                        <h3>Human</h3>
                                                        <p>Base Race</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12 hk_bought_line">
                                                    <div className="fight_bought">
                                                        <h3>Humeek</h3>
                                                        <p>Race</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className="fight_bought">
                                                        <h3>Male</h3>
                                                        <p>Gender</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-12">
                                                    <div className="fight_bought">
                                                        <h3>100 W - 75 L</h3>
                                                        <p>Brawls</p>
                                                    </div>
                                                </div>
                                            </div>
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
                    <Link to="/MarketPlace">
                        <button type="button" className="btn btn_bg_hk hk_continue with_borders go_marketplace cust_btn_px_modal">To Market</button>
                    </Link>
                </div>
                <Link to="/market-place/character-details/character-details-2">
                    <button type="button" className="btn btn_bg_hk hk_continue go_marketplace cust_btn_px_modal h_46_btnjust_shape goes_remove" >To Collection</button>
                </Link>
            </div>
        </div>
    )
}

export default PurchaseCompleted
