import React, { useEffect } from 'react'
import Header from '../../../../components/header/header';
import Footer from '../../../../components/footer/footer';
import SkillBar from 'react-skillbars';
import $ from 'jquery';
import { Link } from "react-router-dom";

function CharacterDetails() {
    

     // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
    useEffect(() => {
        $(function () {
            var hasBeenTrigged = false;
            $(window).scroll(function (e) {
                if ($(this).scrollTop() >= 1100 && !hasBeenTrigged) {
                    $('.skillbar-percent').each(function () {
                        var $this = $(this);
                        $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                            duration: 4000,
                            easing: 'swing',
                            step: function () {
                                $this.text(Math.ceil(this.Counter));
                            }
                        });
                    });
                    hasBeenTrigged = true;
                }
                    
            });
        });

        $(document).ready(function(){
            $("tr.onclicking").click(function () {
                $("tr.colapsingg").show(600);
                $("tr.onclicking").hide('fast');
            });
            $("span.cross_hide").click(function () {
                $("tr.colapsingg").hide(300);
                $("tr.onclicking").show(200);
            });
    
            $('.modal-content.confirm_seletion').hide();
            $('.modal-content.transaction_confirm').show();
            $('.modal-content.place_a_bid').show();
    
    
         
            $('button.confirm').click(function () {
                $(this).parents('.modal').find('.modal-content.confirm_seletion').show();
                $(this).parents('.modal').find('.modal-content.transaction_confirm').hide();
            });

            $('#exampleModal1 .modal-header .close,#exampleModal1 [data-dismiss="modal"]').on('click',function () {
                $(this).parents('.modal').find('.modal-content.confirm_seletion').hide();
                $(this).parents('.modal').find('.modal-content.transaction_confirm').show();
            });
    
            // $('button.btn_bg_hk.go_marketplace').click(function(){
            //     $('.modal-open').css('overflow', 'overlay');
            //     $('.modal-backdrop.fade.show').css('display', 'none');
            // });
    
            $('.submit').click(function(){
                var amount = document.getElementById('get_amount').value
    
                if(amount.length > 2){
                    $(this).parents('body').removeClass('modal-open');
                    $(this).parents('body').css('padding-right', '0');
                    console.log('success bid amount');
                    $(this).parents('form').find('.invalid-feedback').addClass('d-block');
                    $(this).parents('form').find('.invalid-feedback').text('').css('color', '#45b26c');
                    $(this).parents('body').find('.modal-backdrop.fade').removeClass('show').css('display','none');
                    // $(this).parents('form').find('input').val('');
                    $(this).parents('.modal').find('form').trigger('reset');
                    $(this).parents('body').find('.modal').removeClass('show').css('display','none');
                }
                else{
                    console.log('wrong bid amount');
                    $(this).parents('form').find('.invalid-feedback').addClass('d-block');
                    $(this).parents('form').find('.invalid-feedback').text('Please Enter Your Correct Amount').css('color','red');
                }
            });
    
            
    
            function enforce_maxlength(event) {
                var t = event.target;
                if (t.hasAttribute('maxlength')) {
                t.value = t.value.slice(0, t.getAttribute('maxlength'));
                }
            }
            document.body.addEventListener('input', enforce_maxlength);
    
        });
        



        

    }, [])

 
    var skills = [
        { "type": "Haseeb", "level": 60},
    ];
   
    // console.log(count);
   

    return (
        <div className="main_wrapper">
            <Header />
            <div className="top_nft pt-5 character_details">
                <div className="chara_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 character_profile">
                                <div className="char_image res_char_img">
                                        <img src="/assets/img/char_girl.png" alt="" />
                                </div>
                                <div className="share_wishlist_main">
                                    <a href="#">
                                        <img src="/assets/img/Shape@2x.png" alt="" />
                                        {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
                                    </a>
                                    <a href="#">
                                        <img src="/assets/img/Vector@2x.png" alt="" />
                                        {/* <i className="fa fa-share-alt"></i> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-sm-0 px-5">
                    <div className="character_info">
                        <div className="row">
                            <div className="col-xl-6 col-lg-5 col-md-12">
                                <div className="char_info left_info">
                                    <h3>Elven Legionnaire</h3>
                                    <p>#733342</p>
                                    <ul className="flex-wrap">
                                        <li><h4>Human</h4><p>Base Race</p></li>
                                        <li><h4>Humeek</h4><p>Race</p></li>
                                        <li><h4>Female</h4><p>Gender</p></li>
                                        <li><h4>3 of 3 left</h4><p>Quickening</p></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="char_info right_info">
                                    <div className="d-flex align-items-center for_right resp_profiler_name">
                                        <div className="char_pro_name">
                                            <h5>Micheal John</h5>
                                            <p>Owner</p>
                                        </div>
                                        <div className="char_pro_name">
                                            <img src="/assets/img/profile.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center for_right res_cha resp_wrap_575 justify-content-sm-right">
                                        <div className="biding_buy_area">
                                            <button className="tc_btn"><img src="/assets/img/ethurem.png" alt="" /> 2300 TC</button>
                                        </div>
                                        <div className="biding_buy_area">
                                                <div className="for_selectbox hk_hover_for_border"><a className="btn btn_bg_hk" data-toggle="modal" data-target="#exampleModal1">Buy Now</a></div>
                                        </div>
                                        <div className="biding_buy_area">
                                                <a className="btn btn_bg_hk selected" data-toggle="modal" data-target="#exampleModalLong">Place Bid</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="char_line" />
                            <div className="col-md-12 px-3">
                                <div className="details_char">
                                <h6>Details</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                                <div className="detail_profile">
                                    <div className="char_pro_name">
                                        <img src="/assets/img/profile.png" alt="" />
                                    </div>
                                    <div className="char_pro_name">
                                        <h5>Micheal John</h5>
                                        <p>Creator</p>
                                    </div>
                                </div>
                                    <div className="char_details_attributes" id="place">
                                <div className="row">
                                    <div className="col-md-12 p-0 details_char pl-3 pt-5">
                                        <h6>Attributes</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="char_attributes">
                                            <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                            <img src="/assets/img/m1.png" alt="" />
                                                </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Magic Resistance</h4>
                                                        <div className="attr_skills">
                                                            <SkillBar skills={skills} level={100}/> 
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m4.png" alt="" />
                                                </div>
                                                        <div className="alpha width_full">
                                                    <h4 className="d-flex skills_char_number">Movement Speed</h4>
                                                    <div className="attr_skills blue">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m7.png" alt="" />
                                                </div>
                                                <div className="alpha width_full">
                                                    <h4 className="d-flex skills_char_number">Attack Speed</h4>
                                                    <div className="attr_skills brown_light">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m2.png" alt="" />
                                                </div>
                                                <div className="alpha width_full">
                                                    <h4 className="d-flex skills_char_number">Turn Rate</h4>
                                                    <div className="attr_skills brown">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m5.png" alt="" />
                                                </div>
                                                <div className="alpha width_full">
                                                    <h4 className="d-flex skills_char_number">Vision Range</h4>
                                                    <div className="attr_skills yellow">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m8.png" alt="" />
                                                </div>
                                                        <div className="alpha width_full">
                                                            <h4 className="d-flex skills_char_number">Attack Range</h4>
                                                    <div className="attr_skills">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m3.png" alt="" />
                                                </div>
                                                        <div className="alpha width_full">
                                                            <h4 className="d-flex skills_char_number">Projectile Speed</h4>
                                                    <div className="attr_skills yellow">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m6.png" alt="" />
                                                </div>
                                                        <div className="alpha width_full">
                                                            <h4 className="d-flex skills_char_number">Base Attack Time</h4>
                                                            <div className="attr_skills brown">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_attributes">
                                                    <div className="d-flex align-items-center">
                                                <div className="alpha">
                                                    <img src="/assets/img/m9.png" alt="" />
                                                </div>
                                                        <div className="alpha width_full">
                                                            <h4 className="d-flex skills_char_number">Collision Size</h4>
                                                            <div className="attr_skills brown_light">
                                                        <SkillBar skills={skills} level={100} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div className="char_parents_card mb-5 px-lg-4">
                                    <div className="col-md-12 p-0 details_char pl-0 pt-5">
                                            <h6>Parents</h6>
                                        </div>
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
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
                                        </div>
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <div className="full_box slider">
                                                    <div className="card_hk">
                                                        <div className="for_image">
                                                            <img src="/assets/img/girl.png" alt="" />
                                                        </div>
                                                        <div className="box_main">
                                                            <div className="content_for first">
                                                                <h3>Viking Sheild</h3>
                                                                <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
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
                    </div>
                </div>
            </div>
            <Footer />
            <div className="modal fade hk_modal_for_select bd-example-modal-lg only_for_char_det" id="exampleModal1" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                    <div className="modal-content confirm_seletion bough_fight_main_tops res_w_auto_confirm_seletion">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Purchase Completed</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                            <Link to="/market-place/character-details/character-profile-details">
                                <button type="button" className="btn btn_bg_hk hk_continue go_marketplace cust_btn_px_modal h_46_btnjust_shape">To Collection</button>
                            </Link>
                        </div>
                    </div>
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
                                <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                            </div>
                            <button type="button" className="btn btn_bg_hk hk_continue confirm h_46_btnjust_shape">Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade hk_modal_for_select only_for_char_det thiss" id="exampleModalLong" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                    <div className="modal-content confirm_seletion place_a_bid">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Place a bid</h5>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="table_main select_abilites bough_fight_main placing_bid">
                                    <div className="card_selection">
                                        <div className="top_part">
                                            <img src="/assets/img/place_bid.png" className="bid_person" alt="" />
                                        </div>
                                        <form id="myForm">
                                            <div className="row ml-1 mr-1">
                                                <div className="col-md-12 ">
                                                    <div className="tournament_drops">
                                                        <div className="for_selectbox res_w_for_selectbox">
                                                            {/* <input type="number" placeholder="Enter bid Amount" oninput="numberOnly(this.id);" maxlength="4" id="bid_amount" className="form-control" /> */}
                                                            <input type="number" className="form-control" id="get_amount" placeholder="Enter bid Amount" min="0" max="99" maxlength="4"/>
                                                        </div>
                                                        <div className="invalid-feedback text-left">
                                                            Enter bid Amount
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 mb-2">
                                                    <div className="splash align-items-center">
                                                        <div className="splash_content">
                                                        <h4>GAS FEE</h4>
                                                        </div>
                                                        <div className="splash_content">
                                                                <p><img src="/assets/img/ethurem.png" alt="" /> 20.00 <span>0.0126 ETH</span></p>
                                                        </div>
                                                        </div>
                                                </div>
                                                <div className="col-md-12 mb-2">
                                                    <div className="splash">
                                                        <div className="splash_content">
                                                            <h4 className="pb_5_px">ESTIMATED TOTAL</h4>
                                                        </div>
                                                        <div className="splash_content">
                                                            <p><img src="/assets/img/ethurem.png" alt="" /> 20.00 <span>0.0126 ETH</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="select_abilites modal-footer priceinfo res_px_modal_footer flex-nowrap">
                                                        <div className="for_selectbox hk_hover_for_border">
                                                            <Link to="/MarketPlace">
                                                                <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                                                            </Link>
                                                        </div>
                                                        <button type="button" className="btn btn_bg_hk hk_continue go_marketplace submit position-relative h_46_btnjust_shape">
                                                            <span className="btn_loader_overlay">
                                                                <span className="btn_loader"></span>
                                                            </span>
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="select_abilites modal-footer priceinfo res_px_modal_footer">
                                                <div className="for_selectbox hk_hover_for_border">
                                                    <Link to="/MarketPlace">
                                                        <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                                                    </Link>
                                                </div>
                                                <button type="button" className="btn btn_bg_hk hk_continue go_marketplace submit">Submit</button>
                                            </div> */}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="select_abilites modal-footer priceinfo res_px_modal_footer flex-nowrap">
                            <div className="for_selectbox hk_hover_for_border">
                                <Link to="/MarketPlace">
                                    <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                                </Link>
                            </div>
                            <button type="button" className="btn btn_bg_hk hk_continue go_marketplace">Submit</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CharacterDetails
