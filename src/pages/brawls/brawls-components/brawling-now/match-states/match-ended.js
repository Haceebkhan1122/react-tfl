import React, { useEffect, useState } from "react";
import "../../../brawls.css";
import { Link, useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import Countdown from "react-countdown";

const MatchEnded = ({ tournament, match }) => {
  const [showMoves, setShowMoves] = useState(false);

  useEffect(() => {
    $("body").removeClass("modal-open");
    $(".modal-backdrop.fade.show").css("display", "none");
    $("body").css("padding", "0");

    // $(document).ready(function () {
    //     $('a.forward').click(function () {
    //         $('.third_show').hide();
    //         $('.last_show').show();
    //     });

    //     $('.second_show').hide();
    //     $('.third_show').hide();
    //     $('.last_show').hide();

    //     setTimeout(function () {
    //         $('.first_show').hide();
    //         $('.second_show').show();
    //     }, 10000);

    //     // setTimeout(function () {
    //     //     $('.third_show').hide();
    //     //     $('.first_show').hide();
    //     //     $('.second_show').hide();
    //     //     $('.last_show').hide();

    //     // },62000);
    //     $('.last_show').hide();
    //     $('.third_show').hide();
    // });
  }, []);

  return (
    <>
      <div className="start_bg mb-0 p-0 brawls_card_showing second_show video_area resp_third_show_h mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="video_part">
              <video
                id="video1"
                src={match.result.url}
                muted
                autoPlay={"autoplay"}
                preload="auto"
                width="100%"
                height="100%"
                // onEnded={() => {
                //     console.log('Ended');
                //     getLiveMatch();
                // }}
              ></video>
            </div>
          </div>
        </div>
      </div>
      {!showMoves ? (
        <div className="start_bg mb-5 brawls_card_showing result_content_main third_show resp_third_show_h">
          <div className="row res_vs_card_bg_pos">
            <div
              className={`col-md-4  ${
                match.result.WinnerIndex === match.player1.playerId
                  ? ""
                  : "result"
              }`}
            >
              <div className='controller_of_brawl_result'>
                <div className='for_bg_players_cards_main brawl_hk_standing'>
                  <div className="players_cards_main">
                    <div
                      className="players_info_game"
                      style={{
                        backgroundImage: "url('/assets/img/cn1.png')"
                      }}
                    >
                      {match.result.WinnerIndex === match.player1.playerId && (
                        <div className="see_result">
                          <img src="/assets/img/winner.png" alt="" />
                        </div>
                      )}
                    </div>
                    <div className="brwaling_cards_top_right">
                      <h2>30 W - 77 L</h2>
                      <p>Brawls</p>
                    </div>
                    <div className="content_gamer">
                      <h5>{match.player1.race}</h5>
                      <h4>
                        <span>Col #733342</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 hk_hk_brawl_standing_bottom pt-3">
                  <div className="for_align">
                    <div className="boots_on_result">
                      <img src={match.player1.character?.rune?.img} alt="" />
                      <h3>{match.player1.character?.rune?.name}</h3>
                    </div>
                    <div className="content_gamer gp_card_bottonn for_win_bottom">
                      <h4>
                        <b>+10</b> <span>Punch Ability</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="players_cards_main with_out_bg">
                <div
                  className="players_info_game"
                  style={{
                    backgroundImage: `url(${match.player1.characterAvatar})`,
                  }}
                >
                  <div className="brwaling_cards_top_right">
                    <h2>99 W - 25 L</h2>
                    <p>Brawls</p>
                  </div>
                  {match &&
                    match.result.WinnerIndex === match.player1.playerId && (
                      <div className="see_result">
                        <img src="/assets/img/winner.png" alt="" />
                      </div>
                    )}
                  <div className="content_gamer">
                    <h5>{match.player1.race}</h5>
                    <h4>
                      {match.player1.characterName}
                      <span> #73399</span>
                    </h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt_winner_left_mini_card">
                  <div>
                    <span>
                      <img src="/assets/img/rs1.png" className="winner_left_mini_img" />
                    </span>
                    <span className="mind_text">Mind</span>
                  </div>
                  <div className="number_text">
                    <span className="font-weight-bold text-white">+10 </span>
                    <span className="punch_text">Punch Ability</span>
                  </div>
                </div>
                <div className="card_brawl select_abilites">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot1.png" alt="" />
                          <h3>Magic Pulse</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot2.png" alt="" />
                          <h3>Earth Strike</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot3.png" alt="" />
                          <h3>Fire Ball</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot4.png" alt="" />
                          <h3>Gusty Wind</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-4 order-md-2 order-3 ">
              <div className="topper_area mb-3">
                <h3>
                  {" "}
                  {/* <Countdown zeroPadTime={2} daysInHours={3} zeroPadDays={false} date={Date.now() + 10000} /> */}
                </h3>
                <p>Brawl Time</p>
              </div>
              <div className="for_result_content">
                <h4>
                  {match.result.logs
                    ? match.result.logs.player2DamageBlocked
                    : 0}
                </h4>
                <span className="special_font">Damge Done</span>
                <h4>
                  {match.result.logs
                    ? match.result.logs.player1DamageBlocked
                    : 0}
                </h4>
              </div>
              <div className="for_result_content">
                <h4>4</h4>
                <span className="special_font">Abilities Used</span>
                <h4>4</h4>
              </div>
              <div className="for_result_content">
                <h4>2</h4>
                <span className="special_font">Boosters</span>
                <h4>2</h4>
              </div>
              <div className="for_result_content">
                <h4>
                  {match.result.logs
                    ? match.result.logs.player1DamageRecived
                    : 0}
                </h4>
                <span className="special_font">Damage recieved</span>
                <h4>
                  {match.result.logs
                    ? match.result.logs.player2DamageRecived
                    : 0}
                </h4>
              </div>
              <div className="for_result_content">
                <h4>
                  {match.result.logs
                    ? match.result.logs.player2DamageBlocked
                    : 0}
                </h4>
                <span className="special_font">Damage Blokced</span>
                <h4>
                  {match.result.logs
                    ? match.result.logs.player1DamageBlocked
                    : 0}
                </h4>
              </div>
              <div className="for_result_content">
                <h4>300</h4>
                <span className="special_font">Advantage</span>
                <h4>200</h4>
              </div>
              <div
                className="continued mt-5"
                onClick={() => {
                  setShowMoves(true);
                }}
              >
                <a className="btn btn_bg_hk mt-4 mb-md-0 mb-md-5 mb-0 forward">
                  Continue
                </a>
              </div>
            </div>
            <div
              className={`col-md-4 order-md-3 order-2 ${
                match.result.WinnerIndex != match.player1.playerId
                  ? ""
                  : "result"
              }`}
            >
              <div className='controller_of_brawl_result'>
                <div className='for_bg_players_cards_main brawl_hk_standing'>
                  <div className="players_cards_main">
                    <div
                      className="players_info_game second"
                      style={{
                        backgroundImage: "url('/assets/img/cn1.png')"
                      }}
                    >
                      {match.result.WinnerIndex === match.player1.playerId && (
                        <div className="see_result" style={{visibility: 'hidden'}}>
                          <img src="/assets/img/winner.png" alt="" />
                        </div>
                      )}
                    </div>
                    <div className="brwaling_cards_top_right">
                      <h2>30 W - 77 L</h2>
                      <p>Brawls</p>
                    </div>
                    <div className="content_gamer">
                      <h5>{match.player1.race}</h5>
                      <h4>
                        <span>Col #733342</span>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 hk_hk_brawl_standing_bottom pt-3">
                  <div className="for_align">
                    <div className="boots_on_result">
                      <img src={match.player1.character?.rune?.img} alt="" />
                      <h3>{match.player1.character?.rune?.name}</h3>
                    </div>
                    <div className="content_gamer gp_card_bottonn for_win_bottom">
                      <h4>
                        <b>+10</b> <span>Power Ability</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="players_cards_main with_out_bg">
                <div
                  className="players_info_game second"
                  style={{
                    backgroundImage: `url(${match.player2.characterAvatar})`,
                  }}
                >
                  <div className="brwaling_cards_top_right">
                    <h2>30 W - 77 L</h2>
                    <p>Brawls</p>
                  </div>
                  {match && match.result.WinnerIndex != match.player1.playerId && (
                    <div className="see_result">
                      <img src="/assets/img/winner.png" alt="" />
                    </div>
                  )}
                  <div className="content_gamer">
                    <h5>{match.player2.race}</h5>
                    <h4>
                      {match.player2.characterName}
                      <span> #73399</span>
                    </h4>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt_winner_left_mini_card">
                  <div>
                    <span>
                      <img src="/assets/img/rs1.png" className="winner_left_mini_img" />
                    </span>
                    <span className="mind_text">Mind</span>
                  </div>
                  <div className="number_text">
                    <span className="font-weight-bold text-white">+10 </span>
                    <span className="punch_text">Punch Ability</span>
                  </div>
                </div>
                <div className="card_brawl select_abilites">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot1.png" alt="" />
                          <h3>Magic Pulse</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot2.png" alt="" />
                          <h3>Earth Strike</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot3.png" alt="" />
                          <h3>Fire Ball</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="for_align">
                        <div className="boots_on_result">
                          <img src="/assets/img/boot4.png" alt="" />
                          <h3>Gusty Wind</h3>
                        </div>
                        <div className="boots_on_result">
                          <span>1x</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="start_bg  mb-5 pb-5 brawls_card_showing last_show resp_third_show_h">
          <div className="row">
            <div
              className={`col-md-5 ${
                match.result.WinnerIndex != match.player1.playerId
                  ? "result"
                  : ""
              }`}
            >
                <div className='controller_of_brawl_result'>
                  <div className='for_bg_players_cards_main brawl_hk_standing'>
                    <div className="players_cards_main">
                      <div
                        className="players_info_game"
                        style={{
                          backgroundImage: "url('/assets/img/cn1.png')"
                        }}
                      >
                        {match.result.WinnerIndex === match.player1.playerId && (
                          <div className="see_result">
                            <img src="/assets/img/winner.png" alt="" />
                          </div>
                        )}
                      </div>
                      <div className="brwaling_cards_top_right">
                        <h2>30 W - 77 L</h2>
                        <p>Brawls</p>
                      </div>
                      <div className="content_gamer">
                        <h5>{match.player1.race}</h5>
                        <h4>
                          <span>Col #733342</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 hk_hk_brawl_standing_bottom pt-3">
                    <div className="for_align">
                      <div className="boots_on_result">
                        <img src={match.player1.character?.rune?.img} alt="" />
                        <h3>{match.player1.character?.rune?.name}</h3>
                      </div>
                      <div className="content_gamer gp_card_bottonn for_win_bottom">
                        <h4>
                          <b>+10</b> <span>Punch Ability</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              {/* <div className="players_cards_main">
                <div
                  className="players_info_game"
                  style={{
                    backgroundImage: `url(${match.player1.characterAvatar})`,
                  }}
                >
                  <div className="brwaling_cards_top_right">
                    <h2>935 W - 78 L</h2>
                    <p>Brawls</p>
                  </div>
                  {match &&
                    match.result.WinnerIndex === match.player1.playerId && (
                      <div className="see_result">
                        <img src="/assets/img/winner.png" alt="" />
                      </div>
                    )}
                  <div className="content_gamer">
                    <h5>{match.player1.race}</h5>
                    <h4>
                      {match.player1.characterName}
                      <span> #73399</span>
                    </h4>
                  </div>
                </div>
                <div className="card_brawl select_abilites">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test0"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test0">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot1.png"
                                    alt=""
                                  />{" "}
                                  Magic Pulse
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 for_box_border1">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test1"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test1">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot2.png"
                                    alt=""
                                  />{" "}
                                  Magic Pulse
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pr-3 for_box_border2">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test2"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test2">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot3.png"
                                    alt=""
                                  />{" "}
                                  Earth Strike
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 for_box_border3">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test3"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test3">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot4.png"
                                    alt=""
                                  />{" "}
                                  Earth Strike
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mt-4 for_right_border">
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m1.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Magic Resistance</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m2.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Turn Rate</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m3.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Projectile Speed</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mt-4 for_right_border">
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m4.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Movement Speed</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m5.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Vision Range</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m6.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Base Attack Time</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mt-4">
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m7.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Attack Speed</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m8.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Attack Range</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m9.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Collision Size</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-2 res_vs_spark_img_second d-flex align-items-center justify-content-center my-md-0 my-3">
              <div className="vs">
                <img src="/assets/img/vs.png" alt="" />
              </div>
            </div>
            <div
              className={`col-md-5 ${
                match.result.WinnerIndex != match.player1.playerId
                  ? ""
                  : "result"
              }`}
            >
                <div className='controller_of_brawl_result'>
                  <div className='for_bg_players_cards_main brawl_hk_standing'>
                    <div className="players_cards_main">
                      <div
                        className="players_info_game second"
                        style={{
                          backgroundImage: "url('/assets/img/cn2.png')"
                        }}
                      >
                        {match.result.WinnerIndex === match.player1.playerId && (
                          <div className="see_result" style={{visibility:'hidden'}}>
                            <img src="/assets/img/winner.png" alt="" />
                          </div>
                        )}
                      </div>
                      <div className="brwaling_cards_top_right">
                        <h2>30 W - 77 L</h2>
                        <p>Brawls</p>
                      </div>
                      <div className="content_gamer">
                        <h5>{match.player2.race}</h5>
                        <h4>
                          <span>Col #733342</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 hk_hk_brawl_standing_bottom pt-3">
                    <div className="for_align">
                      <div className="boots_on_result">
                        <img src={match.player2.character?.rune?.img} alt="" />
                        <h3>{match.player2.character?.rune?.name}</h3>
                      </div>
                      <div className="content_gamer gp_card_bottonn for_win_bottom">
                        <h4>
                          <b>+10</b> <span>Power Ability</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              {/* <div className="players_cards_main">
                <div
                  className="players_info_game second"
                  style={{
                    backgroundImage: `url(${match.player2.characterAvatar})`,
                  }}
                >
                  <div className="brwaling_cards_top_right">
                    <h2>30 W - 77 L</h2>
                    <p>Brawls</p>
                  </div>
                  {match && match.result.WinnerIndex != match.player1.playerId && (
                    <div className="see_result">
                      <img src="/assets/img/winner.png" alt="" />
                    </div>
                  )}
                  <div className="content_gamer">
                    <h5>{match.player2.race}</h5>
                    <h4>
                      {match.player2.characterName}
                      <span> #73399</span>
                    </h4>
                  </div>
                </div>
                <div className="card_brawl select_abilites">
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test0"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test0">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot1.png"
                                    alt=""
                                  />{" "}
                                  Magic Pulse
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 for_box_border1">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test1"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test1">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot2.png"
                                    alt=""
                                  />{" "}
                                  Magic Pulse
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pr-3 for_box_border2">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test2"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test2">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot3.png"
                                    alt=""
                                  />{" "}
                                  Earth Strike
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 for_box_border3">
                      <div className="boots">
                        <form action="#">
                          <div className="stock-images">
                            <div className="exact_copy">
                              <input
                                id="test3"
                                name="same-group-name"
                                type="checkbox"
                              />
                              <label for="test3">
                                <div className="image">
                                  {" "}
                                  <img
                                    src="/assets/img/boot4.png"
                                    alt=""
                                  />{" "}
                                  Earth Strike
                                </div>
                              </label>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mt-4 for_right_border">
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m1.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Magic Resistance</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m2.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Turn Rate</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m3.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Projectile Speed</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mt-4 for_right_border">
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m4.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Movement Speed</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m5.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Vision Range</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m6.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Base Attack Time</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mt-4">
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m7.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Attack Speed</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m8.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Attack Range</h6>
                        </div>
                      </div>
                      <div className="small_brawls_cards">
                        <div className="custom_mini_data">
                          <img src="/assets/img/m9.png" alt="" />
                        </div>
                        <div className="custom_mini_data">
                          <h4>20</h4>
                          <h6>Collision Size</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <Link
            to={`/brawl/tournament/${tournament._id}`}
            className="btn btn_bg_hk mt-4 mb-md-0 mb-md-5 mb-0 forward mt-5"
          >
            See More
          </Link>
        </div>
      )}
    </>
  );
};
export default MatchEnded;
