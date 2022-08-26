import React, { useEffect } from 'react'
import '../quickening.css';
import $ from 'jquery';
import SelectFighter from './select-fighter/select-fighter'
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

        // $('.modal-content.quickening_loader').hide();
        // $('.modal-content.quick_sucess').hide();

        // $('button.btn_bg_hk.go_marketplace').click(function () {
        //     $('.modal-open').css('overflow', 'overlay');
        //     $('.modal-backdrop.fade.show').css('display', 'none');
        // });
        // $('button.btn_bg_hk.hk_continue.to_quicks').click(function () {
        //     $('.modal-open').css('overflow', 'overlay');
        //     $('.modal-backdrop.fade.show').css('display', 'none');
        // });


        $('button.quickening_continue').click(function(){
            $('.modal-content.quickening_loader').show();
            $('.modal-content.transaction_confirm').hide();
            setTimeout(function () { 
                $('.modal-content.quickening_loader').hide();
                $('.modal-content.quick_sucess').show();
            }, 3000);
        });
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
       <>            <div className="top_nft pt-5 character_details chara_profile_details resp_chardetail">
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

            <SelectFighter/>
            
            
            </>

    )
}

export default ChooseFighter
