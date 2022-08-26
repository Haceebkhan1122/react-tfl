import React, { useEffect } from 'react'
import '.././quickening.css';
import Header from '../../../../components/header/header';
import Footer from '../../../../components/footer/footer';
import $ from 'jquery';
import { Link } from "react-router-dom";

function ChooseFighter() {

    useEffect(() => {
        $("tr.onclicking").click(function () {
            $("tr.colapsingg").show(600);
            $("tr.onclicking").hide('fast');
        });
        $("span.cross_hide").click(function () {
            $("tr.colapsingg").hide(300);
            $("tr.onclicking").show(200);
        });

        $('.modal-content.quickening_loader').hide();
        $('.modal-content.quick_sucess').hide();

        $('button.btn_bg_hk.go_marketplace').click(function () {
            $('.modal-open').css('overflow', 'overlay');
            $('.modal-backdrop.fade.show').css('display', 'none');
        });
        // $('button.btn_bg_hk.hk_continue.to_quicks').click(function () {
        //     $('.modal-open').css('overflow', 'overlay');
        //     $('.modal-backdrop.fade.show').css('display', 'none');
        // });


        // $('button.quickening_continue').click(function(){
        //     $('.modal-content.quickening_loader').show();
        //     $('.modal-content.transaction_confirm').hide();
        //     setTimeout(function () { 
        //         $('.modal-content.quickening_loader').hide();
        //         $('.modal-content.quick_sucess').show();
        //     }, 3000);
        // });
        $('.custom_bg.for_demo').click(function(){
            $('.on_demo_showing').show();
            $('.kind_wait').hide();
            $('a.btn.btn_bg_hk.selected').removeClass('disabled');
        });

        //   $('button.for_congrats').click(function () {
        //     $('.modal-content.congrats_new_fighter').show();
        // });
    }, [])

    return (
        <div className="main_wrapper">
            <Header />
            <div className="top_nft pt-5 character_details chara_profile_details resp_chardetail">
                <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md-12">
                        <div className="title_fighter">
                            <h1>Quickening</h1>
                        </div>
                    </div>
                    </div>
                    <div className="width_custom_compress">
                    <div className="row">
                     <div className="col-xl-4 col-lg-4 col-md-5 offset-lg-1 offset-md-0">
                        <div className="fighter_person">
                            <img src="/assets/img/viking.png" alt="" />
                        </div>
                        <div className="content_fighterPerson">
                            <h3>Viking Sheild</h3>
                            <p>#733342</p>
                        </div>
                        <div className="gender_area_fighter">
                                <h5>Human<p>Base Race</p></h5>
                                <h5>Humeek<p>Race</p></h5>
                                <h5>Male<p>Gender</p></h5>
                                <h5>3 of 3 left<p>Quickening</p></h5>
                        </div>
                            <hr className="char_line" />
                            <div className="fighter_bottom">
                                <div className="fighter_bottom_inner">
                                    <h4>100 W - 75 L</h4>
                                    <p>Brawls</p>
                                </div>
                                <div className="fighter_bottom_inner br_fighter_right">
                                    <h4>57.14%</h4>
                                    <p>Win Rate</p>
                                </div>
                            </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                        <div className="fighter_center_arrows">
                            {/* <img src="/assets/img/multi_arrows.png" alt="" /> */}
                            <img src="/assets/img/back.png" alt="" />
                            <img src="/assets/img/back.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 kind_wait">
                                <div className="fighter_person waiting" data-toggle="modal" data-target="#exampleModalLong">
                                    <img src="/assets/img/add_fighter.png" alt="" />
                            <h2>Choose a female Charachter</h2>
                            <p>To start breeding please choose a female character from your own collection </p>
                        </div>
                        <div className="content_fighterPerson for_Waited">
                            <h3>Viking Sheild</h3>
                            <p>#733342</p>
                        </div>
                                <div className="gender_area_fighter for_Waited">
                            <h5>Human<p>Base Race</p></h5>
                            <h5>Humeek<p>Race</p></h5>
                            <h5>Male<p>Gender</p></h5>
                            <h5>3 of 3 left<p>Quickening</p></h5>
                        </div>
                                <hr className="char_line for_Waited"  />
                                <div className="fighter_bottom for_Waited">
                            <div className="fighter_bottom_inner">
                                <h4>100 W - 75 L</h4>
                                <p>Brawls</p>
                            </div>
                            <div className="fighter_bottom_inner br_fighter_right">
                                <h4>57.14%</h4>
                                <p>Win Rate</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-5 on_demo_showing">
                        <div className="fighter_person">
                            <img src="/assets/img/elven.png" alt="" />
                        </div>
                        <div className="content_fighterPerson">
                            <h3>Viking Sheild</h3>
                            <p>#733342</p>
                        </div>
                        <div className="gender_area_fighter">
                            <h5>Human<p>Base Race</p></h5>
                            <h5>Humeek<p>Race</p></h5>
                            <h5>Male<p>Gender</p></h5>
                            <h5>3 of 3 left<p>Quickening</p></h5>
                        </div>
                        <hr className="char_line" />
                        <div className="fighter_bottom">
                            <div className="fighter_bottom_inner">
                                <h4>100 W - 75 L</h4>
                                <p>Brawls</p>
                            </div>
                            <div className="fighter_bottom_inner br_fighter_right">
                                <h4>57.14%</h4>
                                <p>Win Rate</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-md-12 text-center pt-5">
                        <div className="get_started ">
                            <div className="biding_buy_area"><a className="btn btn_bg_hk selected  m-auto disabled" data-toggle="modal" data-target=".bd-example-modal-lg">Get Started</a></div>
                        </div>
                    </div>
                
            </div>
            </div>
            <Footer />
            <div className="modal fade hk_modal_for_select" id="exampleModalLong" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                    <div className="modal-content select_fighter select_char">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select your character</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="tournament_drops mb-4 flex-wrap">
                                    <div className="for_selectbox hk_too_width mb_resp_575">
                                        <input type="search" placeholder="Search" className="form-control" />
                                    </div>
                                    <div className="for_selectbox mb_resp_575">
                                        <select>
                                            <option>Race</option>
                                            <option>Race 1</option>
                                            <option>Race 2</option>
                                            <option>Race 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="table_main">
                                    <div className="card_selection scroll_auto_x res_w_table max_scroll_y547">
                                        <div className="custom_bg for_demo" data-dismiss="modal" aria-label="Close">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>
 
                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
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
                                <button type="button"  className="btn btn_bg_hk hk_continue with_borders to_quicks">To Quickening</button>
                                </Link>
                            </div>
                            <Link to="market-place/character-details/character-profile-details">
                                <button type="button" className="btn btn_bg_hk hk_continue quickening_continue for_congrats" data-toggle="modal" data-target="#exampleModal1">to Collection</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseFighter
