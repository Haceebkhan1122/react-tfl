import React, { useEffect } from 'react'
import '../characterdetails/character-details.css';
import { Link, useLocation } from "react-router-dom";
import $ from 'jquery';
import CharacterProfile from './character-profile-details/character-profile/character-profile';
import Collection from './character-profile-details/collections/collection';



function CharacterProfileDetails() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    
    useEffect(() => {
        $('button.go_marketplace').click(function () {
            $('.modal-open').css('overflow', 'overlay');
            $('.modal-backdrop.fade.show').css('display', 'none');
        });
    }, [])


    return (
        <>
            <div className="top_nft pt-5 character_details chara_profile_details">
                    <CharacterProfile/>
                    <Collection/>
                   
            </div>
            {/* <div className="modal fade hk_modal_for_select bd-example-modal-lg show congrats_new_fighter" id="exampleModal1" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content confirm_seletion bough_fight_main_tops">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Congrats on New Fighter</h5>
                            <button type="button" className="close go_marketplace" data-dismiss="modal" aria-label="Close">
                                <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="table_main select_abilites bough_fight_main">
                                    <div className="card_selection">
                                        <div className="top_part">
                                            <img src="/assets/img/congo_fight.png" alt="" />
                                        </div>
                                        <h2 className="text-center mb-2">Unnamed</h2>
                                        <p className="text-center">#733342</p>
                                        <div className="row ml-0 mr-0">
                                            <div className="table_main">
                                                <div className="card_selection">
                                                    <div className="custom_bg">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="fight_bought">
                                                                    <h3>Human</h3>
                                                                    <p>Base Race</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 hk_bought_line">
                                                                <div className="fight_bought">
                                                                    <h3>Humeek</h3>
                                                                    <p>Race</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="fight_bought">
                                                                    <h3>Male</h3>
                                                                    <p>Gender</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
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
                        <div className="select_abilites modal-footer priceinfo flex-nowrap">
                            <div className="for_selectbox hk_hover_for_border">
                                <Link to="/MarketPlace">
                                    <button type="button" className="btn btn_bg_hk hk_continue with_borders go_marketplace" data-dismiss="modal" aria-label="Close">Name</button>
                                </Link>
                            </div>
                            <Link to="/CharacterProfileDetails">
                                <button type="button" className="btn btn_bg_hk hk_continue go_marketplace" data-dismiss="modal" aria-label="Close">Continue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div> */}
            </>
    )
}

export default CharacterProfileDetails
