import React, { useEffect } from 'react'
import '../marketplace/marketplace.css';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
// import $ from 'jquery';
import { Link } from "react-router-dom";

function MarketPlace() {
  
    return (
        <div className="main_wrapper">
            <Header />
            <div className="top_nft pt-5 market_place card_market_first pb-5">
                <div className="container">
                    <div className="row card_first_row">
                        <div className="col-md-12 pt-5">
                            <div className="title_section pt-4 text-left res_475_card_heading">
                                <h1 className="text-left pl-3">Air dropping Soon</h1>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                           <div className="dropping_item">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/viking.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">Legendary</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                            <div className="dropping_item">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/hammer_market.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">Legendary</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                            <div className="dropping_item">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/knife_market.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">Legendary</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                            <div className="dropping_item">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/elven.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">Legendary</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className="row hot_sale">
                        <div className="col-md-12 pt-5">
                            <div className="title_section pt-4 text-left d-flex align-items-end justify-content-between pb-4 res_475_card_heading row">
                                <h1 className="text-left pl-3 col-sm-10 col-12 text-sm-left text-center">Hot SALE</h1>
                                <a href="#" className="view_all_flex pb_19_px col-sm-2 col-12 text-sm-right text-center">View All</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                       
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="row hot_sale">
                        <div className="col-md-12 pt-5">
                            <div className="title_section pt-4 text-left d-flex align-items-end justify-content-between pb-4 row">
                                <h1 className="text-left pl-3 col-sm-10 col-12 text-sm-left text-center">What’s New</h1>
                                <a href="#" className="view_all_flex pb_19_px col-sm-2 col-12 text-sm-right text-center">View All</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="row hot_sale mb-5">
                        <div className="col-md-12 pt-5">
                            <div className="title_section pt-4 text-left d-flex align-items-end justify-content-between pb-4 row">
                                <h1 className="text-left pl-3 col-sm-10 col-12 text-sm-left text-center">Available NFT’s</h1>
                                <a href="#" className="view_all_flex pb_19_px col-sm-2 col-12 text-sm-right text-center">View All</a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
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
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
            </div>
       
    )
}

export default MarketPlace
