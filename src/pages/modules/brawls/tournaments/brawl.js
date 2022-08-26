import React, { useEffect, useState } from 'react';
import './tournaments.css';
import Header from '../../../../components/header/header';
import Footer from '../../../../components/footer/footer';
import $ from 'jquery';
import { Link, useLocation } from 'react-router-dom';

function Brawl() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    $('tr.onclicking').click(function () {
      $('tr.onclicking').hide('fast', function () {
        $('tr.colapsingg').show(600);
      });
      // $("tr.colapsingg").show(600);
    });
    $('span.cross_hide').click(function () {
      $('tr.colapsingg').hide(300);
      $('tr.onclicking').show(200);
    });

    $('.modal-content.select_abilites').hide();
    $('.modal-content.select_boost').hide();
    $('.modal-content.confirm_seletion').hide();
    $('.modal-content.transaction_confirm').hide();

    $('a.select_boots_page').click(function () {
      $('.modal-content.select_abilites').show();
      $('.select_fighter').hide();
      $('.modal-content.select_boost').hide();
    });

    $('button.hk_continue').click(function () {
      $('.modal-content.confirm_seletion').show();
      $('.modal-content.select_abilites').hide();
      $('.select_fighter').hide();
    });

    $('button.back_reverse').click(function () {
      $('.modal-content.select_fighter').show();
      $('.modal-content.select_abilites').hide();
      $('.select_boost').hide();
    });
    $('button.back_reverse.weapons').click(function () {
      $('.modal-content.select_fighter').hide();
      $('.modal-content.select_abilites').show();
      $('.select_boost').hide();
    });
    $('button.hk_continue_forselection').click(function () {
      $('.modal-content.confirm_seletion').show();
      $('.modal-content.select_abilites').hide();
      $('.select_boost').hide();
      $('.select_fighter').hide();
    });

    $('.select_abilites.modal-footer.priceinfo button.hk_continue').click(function () {
      $('.modal-content.confirm_seletion').hide();
      $('.modal-content.transaction_confirm').show();
      $('.modal-content.select_abilites').hide();
      $('.select_boost').hide();
      $('.select_fighter').hide();
    });
  }, []);

  const [result, setResult] = useState(false);
  const [profiles, setProfiles] = useState(true);
  const [column, setColumn] = useState(true);

  const resultSee = e => {
    e.preventDefault();
    setResult(true);
    setProfiles(false);
  };
  const colShow = e => {
    setColumn(true);
  };

  const copyMatchID = () => {
    navigator.clipboard.writeText(tournament._id);
  };

  return (
    <div className="main_wrapper">
      <Header />
      <div className="top_nft pt-5">
        <div className="container-fluid resp_container_w">
          <div className="row tab_mb">
            <div className="col-md-6 mx-auto pt-5">
              <div className="title_section pt-4">
                <h1>Brawls</h1>
              </div>
              <ul className="nav nav-tabs border-0 justify-content-center" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active bg-transparent border-0" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                    Ongoing Brawls
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bg-transparent border-0" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    Next to Brawl
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link bg-transparent border-0" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                    Results
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container resp_container_w">
          <div className="row">
            {/* <div className="col-md-12 pt-5">
                            <div className="title_section pt-4">
                                <h1>Brawls</h1>
                            </div>
                            <ul className="nav nav-tabs tab_mb" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Ongoing Brawls</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Next to Brawl</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Results</a>
                                </li>
                            </ul>
                        </div> */}
            <div className="tab-content col-xl-12" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="row">
                  <div className="col-md-8">
                    <div className="drops_main">
                      <div className="tournament_drops">
                        <div className="for_selectbox">
                          <select>
                            <option>Brawl Rules</option>
                            <option>No Holds Barred</option>
                          </select>
                        </div>
                      </div>
                      <div className="tournament_drops">
                        <div className="for_selectbox">
                          <select>
                            <option>Sort By</option>
                            <option>Ascending </option>
                            <option>Descending </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <label className="switch mb-0">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <span className="my_brawls_check_text">My Brawls Only</span>
                  </div>
                  <div className="col-md-12 pb-5">
                    <div className="table_main scroll_table_tournament">
                      <div className="scroll_inner_tournament fix_table_h_listing">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Brawl</th>
                              <th scope="col">LOCATION</th>
                              <th scope="col" className="tooltip_custom">
                                Brawl Rules
                                <span className="info_icon">
                                  <img src="/assets/img/info.png" alt="" />
                                </span>
                                <span className="tooltiptext tooltip-bottom">
                                  This shows all tournament rules for each tournament. for eg the type of fight style and type of fighter race. Only eligible fighters will be permitted to enter a
                                  tournament on these tournament rules.
                                </span>
                              </th>
                              <th scope="col">Entry fee</th>
                              <th scope="col">Prize Pool</th>
                              <th scope="col">Registered</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="onclicking">
                              <td>The Real Bout</td>
                              <td>US - Florida</td>
                              <td>No Holds Barred</td>
                              <td>
                                <span className="text_color">
                                  <img src="/assets/img/ethurem.png" alt="" />
                                  1500
                                </span>
                              </td>
                              <td>
                                <span className="text_color">
                                  <img src="/assets/img/ethurem.png" alt="" />
                                  10K
                                </span>
                              </td>
                              <td>5/10</td>
                            </tr>
                            <tr className="colapsingg">
                              <td colSpan="6">
                                <div className="hk_colapsing">
                                  <div className="row">
                                    <div className="col-6 mb-2">
                                      <div className="d-flex align-items-center">
                                        <h3>The Real Bout</h3>
                                        <h5>
                                          Florida - USA{' '}
                                          <span className="copy_icon">
                                            <img src="/assets/img/copy.png" alt="" />
                                          </span>
                                        </h5>
                                      </div>
                                    </div>
                                    <div className="col-6 text-right">
                                      <span className="cross_hide">
                                        <img src="/assets/img/cut.png" alt="" />
                                      </span>
                                      <span className="text_color">
                                        <img src="/assets/img/ethurem.png" alt="" />
                                        10k
                                      </span>
                                    </div>
                                    <div className="col-6 table_rules">
                                      <div className="d-flex align-items-center">
                                        <h4>Brawl Rules</h4>
                                        <h6>No Holds Barred</h6>
                                        <p className="status">
                                          STATUS <span>OPEN</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-6 text-right registerd">
                                      <p>
                                        {' '}
                                        Registered<span> 5/10</span>
                                      </p>
                                    </div>
                                  </div>
                                  <hr className="special_line" />
                                  <div className="w-100 scroll_table_pop">
                                    <table className="table for_tr_bg">
                                      <tr>
                                        <th>Characters</th>
                                        <th>race</th>
                                        <th>win rate</th>
                                        <th>brawl Record</th>
                                        <th>Owner</th>
                                      </tr>
                                      <tr>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/c1.png" />
                                          </span>
                                          <span className="user_name">Thrutlauz</span>
                                        </td>
                                        <td>Scales </td>
                                        <td>58.00%</td>
                                        <td>100 W - 75 L</td>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/profile.png" />
                                          </span>
                                          <span className="user_name">0X5gt4tf</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/c2.png" />
                                          </span>
                                          <span className="user_name">Kusk</span>
                                        </td>
                                        <td>Scales </td>
                                        <td>35.00%</td>
                                        <td>50 W - 67 L</td>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/pr1.jpg" />
                                          </span>
                                          <span className="user_name">0X5gt4t7</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/c3.png" />
                                          </span>
                                          <span className="user_name">Collazig</span>
                                        </td>
                                        <td>Squids</td>
                                        <td>92.00%</td>
                                        <td>30 W - 77 L</td>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/pr2.jpeg" />
                                          </span>
                                          <span className="user_name">0X5gt4t6</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/c4.png" />
                                          </span>
                                          <span className="user_name">Gaelalaer</span>
                                        </td>
                                        <td>Squids</td>
                                        <td>42.00%</td>
                                        <td>99 W - 25 L</td>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/pr3.jpg" />
                                          </span>
                                          <span className="user_name">0X5gt4t34</span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/c5.png" />
                                          </span>
                                          <span className="user_name">Cols</span>
                                        </td>
                                        <td>Undead </td>
                                        <td>22.00%</td>
                                        <td>35 W - 78 L</td>
                                        <td>
                                          <span className="profile">
                                            <img src="/assets/img/pr4.jpg" />
                                          </span>
                                          <span className="user_name">0X5gt4t1</span>
                                        </td>
                                      </tr>
                                    </table>
                                  </div>
                                  <div className="row">
                                    <div className="col-md-12 text-center hk_enter">
                                      <h1 className="resp_enter_tournament_font">Enter the brawl with your fighter</h1>
                                      <a className="btn btn_bg_hk" data-toggle="modal" data-target=".bd-example-modal-lg">
                                        Brawl
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade row" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="row">
                  <div className="col-md-8">
                    <div className="drops_main">
                      <div className="tournament_drops">
                        <div className="for_selectbox">
                          <select>
                            <option>Brawl Rules</option>
                            <option>No Holds Barred</option>
                          </select>
                        </div>
                      </div>
                      <div className="tournament_drops">
                        <div className="for_selectbox">
                          <select>
                            <option>Sort By</option>
                            <option>Ascending </option>
                            <option>Descending </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <label className="switch mb-0">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <span className="my_brawls_check_text">My Brawls Only</span>
                  </div>
                  <div className="col-md-12">
                    <div className="table_main scroll_table_tournament">
                      <div className="scroll_inner_tournament brawls_result_table_h">
                        <table className="table">
                          <thead>
                            {column && (
                              <tr>
                                <th scope="col">Tournament</th>
                                <th scope="col">LOCATION</th>
                                <th scope="col">Race TYPE</th>
                                <th scope="col">Entry fee</th>
                                <th scope="col">Prize Pool</th>
                                <th scope="col">Registered</th>
                              </tr>
                            )}
                          </thead>
                          <tbody>
                            <tr className="onclicking">
                              <td>The Real Bout</td>
                              <td>US - Florida</td>
                              <td>Humeek</td>
                              <td>
                                <span className="text_color">
                                  <img src="/assets/img/ethurem.png" alt="" />
                                  1500
                                </span>
                              </td>
                              <td>
                                <span className="text_color">
                                  <img src="/assets/img/ethurem.png" alt="" />
                                  10K
                                </span>
                              </td>
                              <td>2/10</td>
                            </tr>
                            <tr className="colapsingg">
                              <td colSpan="6">
                                <div className="hk_colapsing pb-3">
                                  <div className="row">
                                    <div className="col-6 mb-2">
                                      <div className="d-flex align-items-center">
                                        <h3 className="pt-1">Last Chains</h3>
                                        <h5 className="pt-2">California - USA </h5>
                                      </div>
                                    </div>
                                    <div className="col-6 text-right">
                                      <span className="cross_hide">
                                        <img src="/assets/img/cut.png" onClick={colShow} alt="" />
                                      </span>
                                      <span className="text_color">
                                        <img src="/assets/img/ethurem.png" alt="" />
                                        3000
                                      </span>
                                    </div>
                                    <div className="col-6 table_rules">
                                      <div className="d-flex align-items-center">
                                        <h4>Brawl Rules</h4>
                                        <h6>No Hold Barred</h6>
                                        <p className="status">
                                          STATUS <span className="closed_status">CLOSED</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-6 text-right registerd see_details_table button_for_result_see">
                                      <p>
                                        <div className="for_selectbox hk_hover_for_border mb-4">
                                          <button type="button" className="btn btn_bg_hk hk_continue with_borders see_details" onClick={resultSee}>
                                            SEE BRAWL RESULTS
                                          </button>
                                        </div>
                                        <span> BRAWL FINISHED</span>
                                      </p>
                                    </div>
                                  </div>
                                  <hr className="special_line for_list_result" />
                                  <div className="tournament_player_data mt-4 result_showing_custom result_resp_tag">
                                    <div className="row">
                                      <div className="col-4">
                                        <div className="for_centerization mb-3">
                                          <div className="result_chain">
                                            <h3>1</h3>
                                          </div>
                                          <div className="result_chain position-relative">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c1.png" alt="" className="result_button_profile" />
                                              <span>Thrutlauz</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c2.png" alt="" className="result_button_profile" />
                                                <span>Kusk</span>
                                              </a>
                                            </div>
                                            <div className="green_overlay">WATCH</div>
                                          </div>
                                          <div className="result_chain">
                                            <img src="/assets/img/result_map1.png" className="map1" alt="" />
                                          </div>
                                        </div>
                                        <div className="for_centerization">
                                          <div className="result_chain">
                                            <h3>2</h3>
                                          </div>
                                          <div className="result_chain">
                                            {/* <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                                                                                            <img src="/assets/img/c5.png" alt="" className="result_button_profile" />
                                                                                            <span>Cols</span>
                                                                                        </a> */}
                                            {/* add or r emove looser_main on this div */}
                                            <div className="looser_main">
                                              {/* add bg-transparent and looser on anchor tag */}
                                              <a className="btn btn_bg_hk mt-0 looser d-flex justify-content-start bg-transparent">
                                                <img src="/assets/img/c3.png" alt="" className="result_button_profile" />
                                                <span>Collazig</span>
                                              </a>
                                            </div>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start bg-transparent">
                                                <img src="/assets/img/c3.png" alt="" className="result_button_profile" />
                                                <span>Collazig</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="for_centerization">
                                          <div className="result_chain third_gamers">
                                            <h3>3</h3>
                                          </div>
                                          <div className="result_chain mt-4 pt-3 empty_state">
                                            <h6>LOSERS MATCHES OF 1 AND 2</h6>
                                            {/* <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                                                                                            <img src="/assets/img/c2.png" alt="" className="result_button_profile" /> 
                                                                                            <span>Kusk</span>
                                                                                        </a> */}
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-0 looser d-flex justify-content-start">
                                                <img src="/assets/img/c4.png" alt="" className="result_button_profile" />
                                                <span>Gaelalaer</span>
                                              </a>
                                            </div>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c4.png" alt="" className="result_button_profile" />
                                                <span>Gaelalaer</span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="result_chain">
                                            <img src="/assets/img/result_map2.png" alt="" className="map2" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-4 mt-5 pt-3 pl-5">
                                        <div className="for_centerization mb-3 pl-3">
                                          <div className="result_chain">
                                            <h3>4</h3>
                                          </div>
                                          <div className="result_chain">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c1.png" alt="" className="result_button_profile" />
                                              <span>Thrutlauz</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c4.png" alt="" className="result_button_profile" />
                                                <span>Gaelalaer</span>
                                                <span className="numbering">3rd</span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="result_chain">
                                            <img src="/assets/img/result_map1.png" alt="" className="map3" />
                                          </div>
                                        </div>
                                        <div className="for_centerization pl-3">
                                          <div className="result_chain">
                                            <h3>5</h3>
                                          </div>
                                          <div className="result_chain">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c5.png" alt="" className="result_button_profile" />
                                              <span>Cols</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c3.png" alt="" className="result_button_profile" />
                                                <span>Collazig</span>
                                                <span className="numbering">4th</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-4 hk_last_two_players">
                                        <div className="for_centerization mb-3">
                                          <div className="result_chain">
                                            <h3>6</h3>
                                          </div>
                                          <div className="result_chain">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c1.png" alt="" className="result_button_profile" />
                                              <span>Thrutlauz</span>
                                              <span className="numbering">1st</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c5.png" alt="" className="result_button_profile" />
                                                <span>Cols </span>
                                                <span className="numbering">2nd</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {profiles && (
                                    <div className="tournament_player_data mt-5 d-none">
                                      <div className="row resp_tournament_collapse_trcard">
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>1st</h4>
                                            </div>
                                            <img src="/assets/img/t1.png" alt="" />
                                            <h3>Thrutlauz</h3>
                                            <p>
                                              #73345 <i className="fa fa-circle" aria-hidden="true"></i> Scales
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>2nd</h4>
                                            </div>
                                            <img src="/assets/img/t2.png" alt="" />
                                            <h3>Cols</h3>
                                            <p>
                                              #733342 <i className="fa fa-circle" aria-hidden="true"></i> Undead{' '}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>3rd</h4>
                                            </div>
                                            <img src="/assets/img/t3.png" alt="" />
                                            <h3>Collazig</h3>
                                            <p>
                                              #733399 <i className="fa fa-circle" aria-hidden="true"></i> Squids{' '}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>4th</h4>
                                            </div>
                                            <img src="/assets/img/t4.png" alt="" />
                                            <h3>Gaelalaer</h3>
                                            <p>
                                              #73399 <i className="fa fa-circle" aria-hidden="true"></i> Squids{' '}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row mt-3">
                                        {/* <div className="for_selectbox hk_hover_for_border mb-4">
                                                                                    <button type="button" className="btn btn_bg_hk hk_continue with_borders see_details" onClick={resultSee}>SEE BRAWL RESULTS</button>
                                                                                </div> */}
                                        <div className="col-md-12 text-center hk_follow">
                                          <h1 className="fnt_res_23px">
                                            The prize pool of
                                            <span className="text_color mr-2">
                                              <img src="/assets/img/ethurem.png" alt="" />
                                              3000
                                            </span>{' '}
                                            will be divided as follows:
                                          </h1>
                                          <div className="positions_holder mt-5">
                                            <div className="position_holder_data">
                                              <h4>
                                                1st -{' '}
                                                <span className="text_color">
                                                  <img src="/assets/img/ethurem.png" alt="" />
                                                  1500
                                                </span>
                                              </h4>
                                            </div>
                                            <div className="position_holder_data">
                                              <h4>
                                                2nd -{' '}
                                                <span className="text_color">
                                                  <img src="/assets/img/ethurem.png" alt="" />
                                                  1000
                                                </span>
                                              </h4>
                                            </div>
                                            <div className="position_holder_data">
                                              <h4>
                                                3rd -{' '}
                                                <span className="text_color">
                                                  <img src="/assets/img/ethurem.png" alt="" />
                                                  500
                                                </span>
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="row">
                  <div className="col-md-8">
                    <div className="drops_main">
                      <div className="tournament_drops">
                        <div className="for_selectbox">
                          <select>
                            <option>Brawl Rules</option>
                            <option>No Holds Barred</option>
                          </select>
                        </div>
                      </div>
                      <div className="tournament_drops">
                        <div className="for_selectbox">
                          <select>
                            <option>Sort By</option>
                            <option>Ascending </option>
                            <option>Descending </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 d-flex align-items-center justify-content-end">
                    <label className="switch mb-0">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                    <span className="my_brawls_check_text">My Brawls Only</span>
                  </div>
                  <div className="col-md-12">
                    <div className="table_main scroll_table_tournament">
                      <div className="scroll_inner_tournament brawls_result_table_h">
                        <table className="table">
                          <thead>
                            {column && (
                              <tr>
                                <th scope="col">Tournament</th>
                                <th scope="col">LOCATION</th>
                                <th scope="col">Race TYPE</th>
                                <th scope="col">Entry fee</th>
                                <th scope="col">Prize Pool</th>
                                <th scope="col">Registered</th>
                              </tr>
                            )}
                          </thead>
                          <tbody>
                            <tr className="onclicking">
                              <td>The Real Bout</td>
                              <td>US - Florida</td>
                              <td>Humeek</td>
                              <td>
                                <span className="text_color">
                                  <img src="/assets/img/ethurem.png" alt="" />
                                  1500
                                </span>
                              </td>
                              <td>
                                <span className="text_color">
                                  <img src="/assets/img/ethurem.png" alt="" />
                                  10K
                                </span>
                              </td>
                              <td>2/10</td>
                            </tr>
                            <tr className="colapsingg">
                              <td colSpan="6">
                                <div className="hk_colapsing pb-3">
                                  <div className="row">
                                    <div className="col-6 mb-2">
                                      <div className="d-flex align-items-center">
                                        <h3 className="pt-1">Last Chains</h3>
                                        <h5 className="pt-2">California - USA </h5>
                                      </div>
                                    </div>
                                    <div className="col-6 text-right">
                                      <span className="cross_hide">
                                        <img src="/assets/img/cut.png" onClick={colShow} alt="" />
                                      </span>
                                      <span className="text_color">
                                        <img src="/assets/img/ethurem.png" alt="" />
                                        3000
                                      </span>
                                    </div>
                                    <div className="col-6 table_rules">
                                      <div className="d-flex align-items-center">
                                        <h4>Brawl Rules</h4>
                                        <h6>No Hold Barred</h6>
                                        <p className="status">
                                          STATUS <span className="closed_status">CLOSED</span>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-6 text-right registerd see_details_table button_for_result_see">
                                      <p>
                                        <div className="for_selectbox hk_hover_for_border mb-4">
                                          <button type="button" className="btn btn_bg_hk hk_continue with_borders see_details">
                                            SEE DETAILS
                                          </button>
                                        </div>
                                        <span> BRAWL FINISHED</span>
                                      </p>
                                    </div>
                                  </div>
                                  <hr className="special_line for_list_result" />
                                  <div className="tournament_player_data mt-4 result_showing_custom result_resp_tag d-none">
                                    <div className="row">
                                      <div className="col-4">
                                        <div className="for_centerization mb-3">
                                          <div className="result_chain">
                                            <h3>1</h3>
                                          </div>
                                          <div className="result_chain position-relative">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c1.png" alt="" className="result_button_profile" />
                                              <span>Thrutlauz</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c2.png" alt="" className="result_button_profile" />
                                                <span>Kusk</span>
                                              </a>
                                            </div>
                                            <div className="green_overlay">WATCH</div>
                                          </div>
                                          <div className="result_chain">
                                            <img src="/assets/img/result_map1.png" className="map1" alt="" />
                                          </div>
                                        </div>
                                        <div className="for_centerization">
                                          <div className="result_chain">
                                            <h3>2</h3>
                                          </div>
                                          <div className="result_chain">
                                            {/* <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                                                                                            <img src="/assets/img/c5.png" alt="" className="result_button_profile" />
                                                                                            <span>Cols</span>
                                                                                        </a> */}
                                            {/* add or r emove looser_main on this div */}
                                            <div className="looser_main">
                                              {/* add bg-transparent and looser on anchor tag */}
                                              <a className="btn btn_bg_hk mt-0 looser d-flex justify-content-start bg-transparent">
                                                <img src="/assets/img/c3.png" alt="" className="result_button_profile" />
                                                <span>Collazig</span>
                                              </a>
                                            </div>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start bg-transparent">
                                                <img src="/assets/img/c3.png" alt="" className="result_button_profile" />
                                                <span>Collazig</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="for_centerization">
                                          <div className="result_chain third_gamers">
                                            <h3>3</h3>
                                          </div>
                                          <div className="result_chain mt-4 pt-3 empty_state">
                                            <h6>LOSERS MATCHES OF 1 AND 2</h6>
                                            {/* <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                                                                                            <img src="/assets/img/c2.png" alt="" className="result_button_profile" /> 
                                                                                            <span>Kusk</span>
                                                                                        </a> */}
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-0 looser d-flex justify-content-start">
                                                <img src="/assets/img/c4.png" alt="" className="result_button_profile" />
                                                <span>Gaelalaer</span>
                                              </a>
                                            </div>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c4.png" alt="" className="result_button_profile" />
                                                <span>Gaelalaer</span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="result_chain">
                                            <img src="/assets/img/result_map2.png" alt="" className="map2" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-4 mt-5 pt-3 pl-5">
                                        <div className="for_centerization mb-3 pl-3">
                                          <div className="result_chain">
                                            <h3>4</h3>
                                          </div>
                                          <div className="result_chain">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c1.png" alt="" className="result_button_profile" />
                                              <span>Thrutlauz</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c4.png" alt="" className="result_button_profile" />
                                                <span>Gaelalaer</span>
                                                <span className="numbering">3rd</span>
                                              </a>
                                            </div>
                                          </div>
                                          <div className="result_chain">
                                            <img src="/assets/img/result_map1.png" alt="" className="map3" />
                                          </div>
                                        </div>
                                        <div className="for_centerization pl-3">
                                          <div className="result_chain">
                                            <h3>5</h3>
                                          </div>
                                          <div className="result_chain">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c5.png" alt="" className="result_button_profile" />
                                              <span>Cols</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c3.png" alt="" className="result_button_profile" />
                                                <span>Collazig</span>
                                                <span className="numbering">4th</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-4 hk_last_two_players">
                                        <div className="for_centerization mb-3">
                                          <div className="result_chain">
                                            <h3>6</h3>
                                          </div>
                                          <div className="result_chain">
                                            <a className="btn btn_bg_hk mt-0 d-flex justify-content-start">
                                              <img src="/assets/img/c1.png" alt="" className="result_button_profile" />
                                              <span>Thrutlauz</span>
                                              <span className="numbering">1st</span>
                                            </a>
                                            <div className="looser_main">
                                              <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                                                <img src="/assets/img/c5.png" alt="" className="result_button_profile" />
                                                <span>Cols </span>
                                                <span className="numbering">2nd</span>
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {profiles && (
                                    <div className="tournament_player_data mt-5">
                                      <div className="row resp_tournament_collapse_trcard">
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>1st</h4>
                                            </div>
                                            <img src="/assets/img/t1.png" alt="" />
                                            <h3>Thrutlauz</h3>
                                            <p>
                                              #73345 <i className="fa fa-circle" aria-hidden="true"></i> Scales
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>2nd</h4>
                                            </div>
                                            <img src="/assets/img/t2.png" alt="" />
                                            <h3>Cols</h3>
                                            <p>
                                              #733342 <i className="fa fa-circle" aria-hidden="true"></i> Undead{' '}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>3rd</h4>
                                            </div>
                                            <img src="/assets/img/t3.png" alt="" />
                                            <h3>Collazig</h3>
                                            <p>
                                              #733399 <i className="fa fa-circle" aria-hidden="true"></i> Squids{' '}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                                          <div className="player_bio">
                                            <div className="top_bio">
                                              <h4>4th</h4>
                                            </div>
                                            <img src="/assets/img/t4.png" alt="" />
                                            <h3>Gaelalaer</h3>
                                            <p>
                                              #73399 <i className="fa fa-circle" aria-hidden="true"></i> Squids{' '}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row mt-3">
                                        {/* <div className="for_selectbox hk_hover_for_border mb-4">
                                                                                    <button type="button" className="btn btn_bg_hk hk_continue with_borders see_details" onClick={resultSee}>SEE BRAWL RESULTS</button>
                                                                                </div> */}
                                        <div className="col-md-12 text-center hk_follow">
                                          <h1 className="fnt_res_23px">
                                            The prize pool of
                                            <span className="text_color mr-2">
                                              <img src="/assets/img/ethurem.png" alt="" />
                                              3000
                                            </span>{' '}
                                            will be divided as follows:
                                          </h1>
                                          <div className="positions_holder mt-5">
                                            <div className="position_holder_data">
                                              <h4>
                                                1st -{' '}
                                                <span className="text_color">
                                                  <img src="/assets/img/ethurem.png" alt="" />
                                                  1500
                                                </span>
                                              </h4>
                                            </div>
                                            <div className="position_holder_data">
                                              <h4>
                                                2nd -{' '}
                                                <span className="text_color">
                                                  <img src="/assets/img/ethurem.png" alt="" />
                                                  1000
                                                </span>
                                              </h4>
                                            </div>
                                            <div className="position_holder_data">
                                              <h4>
                                                3rd -{' '}
                                                <span className="text_color">
                                                  <img src="/assets/img/ethurem.png" alt="" />
                                                  500
                                                </span>
                                              </h4>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
      <div
        className="modal fade hk_modal_for_select bd-example-modal-lg"
        id="exampleModal"
        tabindex="-1"
        data-backdrop="static"
        data-keyboard="false"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg resp_modal_w_lg" role="document">
          <div className="modal-content select_fighter">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Select your fighter
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="cross_hides">
                  <img src="/assets/img/cut.png" alt="" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal_content">
                <div className="tournament_drops mb-4 flex-wrap mb_res_cust ">
                  <div className="for_selectbox hk_too_width mb_resp_575">
                    <input type="text" placeholder="Search" className="form-control" />
                  </div>
                  <div className="for_selectbox">
                    <select>
                      <option>Race</option>
                      <option>Humans</option>
                      <option>Scales</option>
                      <option>Squids</option>
                      <option>Undead</option>
                      <option>White Hair</option>
                    </select>
                  </div>
                </div>
                <div className="table_main exampleModal_resp">
                  <div className="card_selection scroll_list_310">
                    <div className="custom_bg">
                      <div className="row">
                        <div className="col-md-5 col-sm-5 col-5">
                          <div className="card_boxes">
                            <div className="profiless">
                              <img src="/assets/img/c5.png" />
                            </div>
                            <div className="profiless">
                              <h4>Cols</h4>
                              <p>
                                <span>
                                  #73399 <i className="fa fa-circle" aria-hidden="true"></i>
                                </span>
                                <span> Undead </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-4">
                          <div className="card_boxes">
                            <div className="profiless">
                              <h3> 35 W - 78 L</h3>
                              <p>
                                <span>Brawls</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-3">
                          <div className="card_boxes">
                            <a className="btn btn_bg_hk select_boots_page">Select</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom_bg">
                      <div className="row">
                        <div className="col-md-5 col-sm-5 col-5">
                          <div className="card_boxes">
                            <div className="profiless">
                              <img src="/assets/img/c2.png" />
                            </div>
                            <div className="profiless">
                              <h4>Kusk</h4>
                              <p>
                                <span>
                                  #733555 <i className="fa fa-circle" aria-hidden="true"></i>
                                </span>
                                <span>Scales</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-4">
                          <div className="card_boxes">
                            <div className="profiless">
                              <h3> 50 W - 67 L</h3>
                              <p>
                                <span>Brawls</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-3">
                          <div className="card_boxes">
                            <a className="btn btn_bg_hk select_boots_page">Select</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom_bg">
                      <div className="row">
                        <div className="col-md-5 col-sm-5 col-5">
                          <div className="card_boxes">
                            <div className="profiless">
                              <img src="/assets/img/c3.png" />
                            </div>
                            <div className="profiless">
                              <h4>Collazig</h4>
                              <p>
                                <span>
                                  #733399 <i className="fa fa-circle" aria-hidden="true"></i>
                                </span>
                                <span>Squids</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-4">
                          <div className="card_boxes">
                            <div className="profiless">
                              <h3> 30 W - 77 L</h3>
                              <p>
                                <span>Brawls</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-3">
                          <div className="card_boxes">
                            <a className="btn btn_bg_hk select_boots_page">Select</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="custom_bg">
                      <div className="row">
                        <div className="col-md-5 col-sm-5 col-5">
                          <div className="card_boxes">
                            <div className="profiless">
                              <img src="/assets/img/c1.png" />
                            </div>
                            <div className="profiless">
                              <h4>Thrutlauz</h4>
                              <p>
                                <span>
                                  #73345 <i className="fa fa-circle" aria-hidden="true"></i>
                                </span>
                                <span> Scales</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-4">
                          <div className="card_boxes">
                            <div className="profiless">
                              <h3> 100 W - 75 L</h3>
                              <p>
                                <span>Brawls</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-3 col-3">
                          <div className="card_boxes">
                            <a className="btn btn_bg_hk select_boots_page">Select</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-content select_abilites">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Select Boost
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="cross_hides">
                  <img src="/assets/img/cut.png" alt="" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal_content">
                <div className="table_main">
                  <div className="card_selection">
                    <div className="top_part">
                      <img src="/assets/img/check1.png" alt="" />
                    </div>
                    <h2>Cols</h2>
                    <p>#73399</p>
                    <form action="#">
                      <div className="row stock-images for_border_color">
                        <div className="col-md-12 col-sm-12 col-12 border_color_box">
                          <div className="boots hk_only_this">
                            <form action="#" className="row">
                              <div className="stock-images col-md-6 color_border">
                                <div className="exact_copy">
                                  <input id="test0" name="same-group-name" type="checkbox" />
                                  <label for="test0">
                                    <div className="image">
                                      {' '}
                                      <img src="/assets/img/boot1.png" alt="" /> Magic
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="stock-images col-md-6 color_border">
                                <div className="exact_copy">
                                  <input id="test1" name="same-group-name" type="checkbox" />
                                  <label for="test1">
                                    <div className="image">
                                      {' '}
                                      <img src="/assets/img/boot2.png" alt="" /> Fire
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="stock-images col-md-6 color_border">
                                <div className="exact_copy">
                                  <input id="test2" name="same-group-name" type="checkbox" />
                                  <label for="test2">
                                    <div className="image">
                                      {' '}
                                      <img src="/assets/img/boot3.png" alt="" /> Earth
                                    </div>
                                  </label>
                                </div>
                              </div>
                              <div className="stock-images col-md-6 color_border">
                                <div className="exact_copy">
                                  <input id="test3" name="same-group-name" type="checkbox" />
                                  <label for="test3">
                                    <div className="image">
                                      {' '}
                                      <img src="/assets/img/boot4.png" alt="" /> Air
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        {/* <div className="col-md-6 col-sm-12 col-12 for_box_border1">
                                                    <div className="boots">
                                                        <form action="#">
                                                            <div className="row stock-images">
                                                                <div className="exact_copy"><input id="test1" name="same-group-name" type="checkbox" /><label for="test1">
                                                                    <div className="image"> <img src="/assets/img/boot2.png" alt="" /> Fire</div>
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12 for_box_border2">
                                                    <div className="boots">
                                                        <form action="#">
                                                            <div className="row stock-images">
                                                                <div className="exact_copy"><input id="test2" name="same-group-name" type="checkbox" /><label for="test2">
                                                                    <div className="image"> <img src="/assets/img/boot3.png" alt="" /> Earth</div>
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12 col-12 for_box_border3">
                                                    <div className="boots">
                                                        <form action="#">
                                                            <div className="row stock-images">
                                                                <div className="exact_copy"><input id="test3" name="same-group-name" type="checkbox" /><label for="test3">
                                                                    <div className="image"> <img src="/assets/img/boot4.png" alt="" /> Air</div>
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div> */}
                      </div>
                    </form>
                    {/* <div className="row ml-0 mr-0 exact_copy_resp">
                                            <div className="col-md-6">
                                                <div className="boots hk_only_this">
                                                    <form action="#">
                                                        <div className="row stock-images">
                                                            <div className="exact_copy"><input id="test0" name="same-group-name" type="radio" /><label for="test0">
                                                                <div className="image"> <img src="/assets/img/boot1.png" alt="" /> Magic</div>
                                                            </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-0 for_box_border1">
                                                <div className="boots">
                                                    <form action="#">
                                                        <div className="row stock-images">
                                                            <div className="exact_copy"><input id="test1" name="same-group-name" type="radio" /><label for="test1">
                                                                <div className="image"> <img src="/assets/img/boot2.png" alt="" /> Fire</div>
                                                            </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-0 pr-3 for_box_border2">
                                                <div className="boots">
                                                    <form action="#">
                                                        <div className="row stock-images">
                                                            <div className="exact_copy"><input id="test2" name="same-group-name" type="radio" /><label for="test2">
                                                                <div className="image"> <img src="/assets/img/boot3.png" alt="" /> Earth</div>
                                                            </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-md-6 p-0 for_box_border3">
                                                <div className="boots">
                                                    <form action="#">
                                                        <div className="row stock-images">
                                                            <div className="exact_copy"><input id="test3" name="same-group-name" type="radio" /><label for="test3">
                                                                <div className="image"> <img src="/assets/img/boot4.png" alt="" /> Air</div>
                                                            </label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="select_abilites modal-footer resp_px_modal_footer">
              <button type="button" className="btn back_reverse pl-0 ml-0">
                <img src="/assets/img/back.png" alt="" /> back
              </button>
              <button type="button" className="btn btn_bg_hk hk_continue mr_3_px">
                Continue
              </button>
            </div>
          </div>
          {/* <div className="modal-content select_boost">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select Weapons</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="tournament_drops mb-4 mb_res_cust flex-wrap">
                                    <div className="for_selectbox hk_too_width">
                                        <input type="search" placeholder="Search" className="form-control" />
                                    </div>
                                    <div className="for_selectbox">
                                        <select>
                                            <option>Filter By</option>
                                            <option>Race 1</option>
                                            <option>Race 2</option>
                                            <option>Race 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="table_main exampleModal_resp">
                                    <div className="card_selection scroll_list_310">
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5 col-5">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-4">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><h3>+10 </h3><p><span>Magic Resistance</span></p></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-3">
                                                    <div className="card_boxes">
                                                        <div className="for_selectbox">
                                                        <a className="btn btn_bg_hk">Select</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-md-5 col-sm-5 col-5">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-4">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><h3>+10 </h3><p><span>Magic Resistance</span></p></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-3 col-3">
                                                    <div className="card_boxes">
                                                        <a className="btn btn_bg_hk selected">Selected</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="select_abilites modal-footer">
                            <button type="button" className="btn back_reverse weapons ml-0"><img src="/assets/img/back.png" alt="" /> back</button>
                            <button type="button" className="btn btn_bg_hk hk_continue_forselection mr_1_px">Continue</button>
                        </div>
                    </div> */}
          <div className="modal-content confirm_seletion">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Confirm Selection
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="cross_hides">
                  <img src="/assets/img/cut.png" alt="" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="modal_content">
                <div className="table_main select_abilites">
                  <div className="card_selection">
                    <div className="top_part">
                      <img src="/assets/img/check2.png" alt="" />
                    </div>
                    <h2 className="text-center mb-2">Cols</h2>
                    <p className="text-center">#73399</p>
                    <div className="row ml-0 mr-0">
                      <div className="table_main resp_xs_add_scroll">
                        <div className="card_selection mini_circle_img">
                          <div className="custom_bg">
                            <div className="row">
                              <div className="col-md-5 col-sm-4 col-4">
                                <div className="card_boxes hk_confirm">
                                  <div className="profiless">
                                    <img src="/assets/img/boot1.png" className="mr-0" />
                                  </div>
                                  <div className="profiless">
                                    <h4>Magic</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 crust col-sm-4 col-4">
                                <div className="card_boxes">
                                  <div className="profiless">
                                    <h3>
                                      +10 <span className="magic">Magic Resistance</span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 crust col-sm-4 col-4">
                                <div className="card_boxes">
                                  <h4>Boost</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="custom_bg">
                            <div className="row">
                              <div className="col-md-5 col-sm-4 col-4">
                                <div className="card_boxes hk_confirm">
                                  <div className="profiless">
                                    <img src="/assets/img/boot2.png" className="mr-0" />
                                  </div>
                                  <div className="profiless">
                                    <h4>Fire</h4>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 crust col-sm-4 col-4">
                                <div className="card_boxes">
                                  <div className="profiless">
                                    <h3>
                                      +12 <span className="magic green">Attack Speed</span>
                                    </h3>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 crust col-sm-4 col-4">
                                <div className="card_boxes">
                                  <h4>Boost</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="custom_bg">
                                                        <div className="row">
                                                            <div className="col-md-5 col-sm-4 col-4">
                                                                <div className="card_boxes hk_confirm">
                                                                    <div className="profiless"><img src="/assets/img/mshield2x.png" /></div>
                                                                    <div className="profiless"><h4>Magic Shield</h4></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 crust col-sm-4 col-4">
                                                                <div className="card_boxes">
                                                                    <div className="profiless"><h3>+10 <span className="magic">Magic Resistance</span></h3></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 crust col-sm-4 col-4">
                                                                <div className="card_boxes">
                                                                    <h4>Weapons</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="custom_bg">
                                                        <div className="row">
                                                            <div className="col-md-5 col-sm-4 col-4">
                                                                <div className="card_boxes hk_confirm">
                                                                    <div className="profiless"><img src="/assets/img/sword2x.png" /></div>
                                                                    <div className="profiless"><h4>Sword</h4></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4 crust col-sm-4 col-4">
                                                                <div className="card_boxes">
                                                                    <div className="profiless"><h3>+12 <span className="magic green">Attack Speed</span></h3></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3 crust col-sm-4 col-4">
                                                                <div className="card_boxes">
                                                                    <h4>Weapons</h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                          {/* <div className="col-md-12 res_price_info_w">
                                                        <div className="priceinfo mt-5">
                                                            <h3>Registration Price</h3>
                                                            <span><img src="/assets/img/ethurem.png" alt="" /> 50.00</span>
                                                            <p>0.01245 ETH</p>
                                                            <h6>Once you register for a fight, you will not be able to cancel  or change the registration</h6>
                                                        </div>
                                                    </div> */}
                        </div>
                        <div className="col-md-12 res_price_info_w">
                          <div className="priceinfo mt-5">
                            <h3>Registration Price</h3>
                            <span>
                              <img src="/assets/img/ethurem.png" alt="" /> 50.00
                            </span>
                            <p>0.01245 ETH</p>
                            <h6>Once you register for a brawl, you will not be able to cancel or change the registration</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="select_abilites modal-footer priceinfo res_price_info_btn px_footer_btn flex-nowrap">
              <div className="for_selectbox hk_hover_for_border">
                <button type="button" className="btn btn_bg_hk hk_continue with_borders" data-dismiss="modal" aria-label="Close">
                  Cancel
                </button>
              </div>
              <button type="button" className="btn btn_bg_hk hk_continue bg_button_height">
                Confirm
              </button>
            </div>
          </div>
          <div className="modal-content transaction_confirm">
            <div className="modal-header resp_trans_pt_modal">
              <h5 className="modal-title" id="exampleModalLabel">
                Transaction Confirmation
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span className="cross_hides">
                  <img src="/assets/img/cut.png" alt="" />
                </span>
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
                              <h3>Registration Price</h3>
                              <span>
                                <img src="/assets/img/ethurem.png" alt="" /> 50.00
                              </span>
                              <p>0.01245 ETH</p>
                            </div>
                            <div className="priceinfo mt-5">
                              <h3>ESTIMATED TOTAL</h3>
                              <span>
                                <img src="/assets/img/ethurem.png" alt="" /> 50.00
                              </span>
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
            <div className="select_abilites modal-footer priceinfo res_w_100 px_footer_btn">
              <div className="for_selectbox hk_hover_for_border">
                <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">
                  Cancel
                </button>
              </div>
              <Link to="play">
                <button type="button" className="btn btn_bg_hk hk_continue bg_button_height">
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brawl;
