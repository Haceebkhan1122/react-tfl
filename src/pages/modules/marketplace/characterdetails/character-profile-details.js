import React, { useEffect } from 'react'
import '../characterdetails/character-details.css';
import Header from '../../../../components/header/header';
import Footer from '../../../../components/footer/footer';
import { Link } from "react-router-dom";
import $ from 'jquery';


function CharacterProfileDetails() {

    useEffect(() => {
        $('button.go_marketplace').click(function () {
            $('.modal-open').css('overflow', 'overlay');
            $('.modal-backdrop.fade.show').css('display', 'none');
        });
    }, [])


    return (
        <div className="main_wrapper">
            <Header />
            <div className="top_nft pt-5 character_details chara_profile_details">
                <div className="profile_content_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                                <div className="profile_content_profile pl-2">
                                    <div className="profile_flex">
                                        <div className="profile_flex_inner">
                                            <img src="/assets/img/profile.png" alt="" />
                                        </div>
                                        <div className="profile_flex_inner resp_text">
                                            <h3>Goerge Hudson</h3>
                                            <p>0xe4d36ba823334a815f331bba0f42d4fac100d970 <span><i className="fa fa-clone" aria-hidden="true"></i></span></p>
                                        </div>
                                    </div>
                                    <div className="profile_numbers resp_profile_numbers flex-md-nowrap flex-wrap">
                                        <h4>250 <span>Characters</span></h4>
                                        <h4>75 <span>Bread</span></h4>
                                        <h4>100 W - 75 L <span>Brawls</span></h4>
                                        <h4>57.14% <span>Win Rate</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12">
                                <div className="profile_flex prof_right pt-3">
                                    <a href="#"><span><i className="fa fa-cog" aria-hidden="true"></i> Settings</span></a>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>


                    <div className="character_profile_info">
                        <div className="row">
                            <div className="col-md-12 p-0">
                              <div className="char_details_attributes">
                                    <div className="row">
                                        <div className="container px-sm-0 px-5">
                                            <div className="col-md-12 p-0 details_char pl-2 pt-5">
                                                <h6>Collections</h6>
                                            </div>
                                        </div>
                                    <div className="container px-sm-0 px-5">
                                        <div className="col-md-12 pl-2">
                                            <div className="drops_main">
                                                <div className="tournament_drops forchar_prof">
                                                    <div className="for_selectbox"><input type="text" placeholder="Search" className="form-control" /></div>
                                                </div>
                                                <div className="tournament_drops">
                                                    <div className="for_selectbox">
                                                        <select>
                                                            <option>Race</option>
                                                            <option>Rules 1</option>
                                                            <option>Rules 2</option>
                                                            <option>Rules 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="tournament_drops">
                                                    <div className="for_selectbox">
                                                        <select>
                                                            <option>Gender</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="tournament_drops">
                                                    <div className="for_selectbox">
                                                        <select>
                                                            <option>Sort By</option>
                                                            <option>Ascending </option>
                                                            <option>descending </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container px-sm-0 px-5">
                                        <div className="char_parents_card mb-0">
                                            
                                            <div className="col-md-12 p-0 details_char pt-4">
                                                <div className="container">
                                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">For Sale</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Favourites</a>
                                                    </li>
                                                </ul>
                                                </div>
                                                </div>
                                        </div>
                                    </div>
                                            <hr className="char_line" />
                                            <div className="container px-sm-0 px-5">
                                                <div className="tab-content mt-4 px-2" id="pills-tabContent">
                                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                                        <div className="row char_detail_profile_card">
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                <div className="full_box slider">
                                                                    <div className="card_hk">
                                                                        <div className="for_image">
                                                                            <img src="/assets/img/viking.png" alt="" />
                                                                        </div>
                                                                        <div className="box_main">
                                                                            <div className="content_for first">
                                                                                <h3>Viking Sheild</h3>
                                                                                <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                    <div className="full_box slider">
                                                                        <div className="card_hk">
                                                                            <div className="for_image">
                                                                                <img src="/assets/img/viking.png" alt="" />
                                                                            </div>
                                                                            <div className="box_main">
                                                                                <div className="content_for first">
                                                                                    <h3>Viking Sheild</h3>
                                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                <div className="full_box slider">
                                                                    <div className="card_hk">
                                                                        <div className="for_image">
                                                                            <img src="/assets/img/viking.png" alt="" />
                                                                        </div>
                                                                        <div className="box_main">
                                                                            <div className="content_for first">
                                                                                <h3>Viking Sheild</h3>
                                                                                <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                    <div className="full_box slider">
                                                                        <div className="card_hk">
                                                                            <div className="for_image">
                                                                                <img src="/assets/img/viking.png" alt="" />
                                                                            </div>
                                                                            <div className="box_main">
                                                                                <div className="content_for first">
                                                                                    <h3>Viking Sheild</h3>
                                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                        <div className="row char_detail_profile_card">
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                    <div className="full_box slider">
                                                                        <div className="card_hk">
                                                                            <div className="for_image">
                                                                                <img src="/assets/img/viking.png" alt="" />
                                                                            </div>
                                                                            <div className="box_main">
                                                                                <div className="content_for first">
                                                                                    <h3>Viking Sheild</h3>
                                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                    <div className="full_box slider">
                                                                        <div className="card_hk">
                                                                            <div className="for_image">
                                                                                <img src="/assets/img/viking.png" alt="" />
                                                                            </div>
                                                                            <div className="box_main">
                                                                                <div className="content_for first">
                                                                                    <h3>Viking Sheild</h3>
                                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                                        <div className="row char_detail_profile_card">
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                    <div className="full_box slider">
                                                                        <div className="card_hk">
                                                                            <div className="for_image">
                                                                                <img src="/assets/img/viking.png" alt="" />
                                                                            </div>
                                                                            <div className="box_main">
                                                                                <div className="content_for first">
                                                                                    <h3>Viking Sheild</h3>
                                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                                <Link to="/CharacterDetails2">
                                                                    <div className="full_box slider">
                                                                        <div className="card_hk">
                                                                            <div className="for_image">
                                                                                <img src="/assets/img/viking.png" alt="" />
                                                                            </div>
                                                                            <div className="box_main">
                                                                                <div className="content_for first">
                                                                                    <h3>Viking Sheild</h3>
                                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
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
            <Footer />
            <div className="modal fade hk_modal_for_select bd-example-modal-lg show congrats_new_fighter" id="exampleModal1" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
                            <Link to="/market-place/character-details/character-profile-details">
                                <button type="button" className="btn btn_bg_hk hk_continue go_marketplace" data-dismiss="modal" aria-label="Close">Continue</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterProfileDetails
