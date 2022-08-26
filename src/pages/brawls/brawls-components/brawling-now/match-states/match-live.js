import React, { useEffect } from 'react';
import '../../../brawls.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import $ from 'jquery';
import Countdown from 'react-countdown';

const MatchLive = ({ tournament, match }) => {
  useEffect(() => {
    $('body').removeClass('modal-open');
    $('.modal-backdrop.fade.show').css('display', 'none');
    $('body').css('padding', '0');

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

    // $(document).ready(function () {
    //     let initialTimer = 0;

    //     // $('#video1').on('timeupdate', function (event) {
    //     //     if (this.currentTime >= this.duration - 1) {
    //     //         $('.second_show').hide();
    //     //         $('.third_show').show();
    //     //     }
    //     // });

    //     setInterval(function () {

    //         setTimeout(function () {
    //             console.log('initialTimer ---> Interval 1 ', initialTimer);
    //             $(".moving_right").animate({ left: '630px' }, 2000, 'linear');
    //             $(".moving_right_3").animate({ right: '630px' }, 2000, 'linear');
    //             initialTimer = initialTimer + 5000;
    //         }, initialTimer);

    //         setTimeout(function () {
    //             console.log('initialTimer ---> Interval 2 ', initialTimer);
    //             $(".moving_right").animate({ left: '0px' }, 2000, 'linear');
    //             $(".moving_right_3").animate({ right: '0px' }, 2000, 'linear');

    //         }, initialTimer + 5000);

    //     }, 5000);
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
                autoPlay={'autoplay'}
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
      <div className="start_bg mb-5 brawls_card_showing second_show resp_third_show_h">
        <div className="row">
          <div className="col-md-5 mb-md-0 mb-3">
            <div className='for_bg_players_cards_main gameplay_new_design'>
              <div className="players_cards_main">
                <div className="players_info_game"
                  style={{
                    backgroundImage: "url('/assets/img/gpcn1.png')"
                  }}
                  >
                  <div className='d-flex justify-content-between'>
                  <div className="content_gamer top_left_gp">
                    <h4>
                      Col <br/><span>#73399</span>
                    </h4>
                  </div>
                  <div className="content_gamer top_left_gp">
                    <img src='/assets/img/sqare_mind.png' alt="Mint" />     
                     <p>MIND</p>
                  </div>
                  </div>
                </div>
                <div className="content_gamer gp_card_bottonn">
                  <h5>If Activated</h5>
                  <h4>
                    <b>+10</b> <span>Punch Ability</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* <div className="players_cards_main">
              <div className="players_info_game ddd" style={{ backgroundImage: `url(${match.player1.characterAvatar})` }}>
                <div className="brwaling_cards_top_right">
                  <h2>35 W - 78 L</h2>
                  <p>Brawls</p>
                </div>
                <div className="content_gamer">
                  <h5>{match.player1.race}</h5>
                  <h4>
                    {match.player1.characterName} <span>#73399</span>
                  </h4>
                </div>
              </div>
              <div className="card_brawl select_abilites">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test5" name="same-group-name" type="checkbox" />
                            <label for="test5">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot1.png" alt="" /> Magic Pulse
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 for_box_border1">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test6" name="same-group-name" type="checkbox" />
                            <label for="test6">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot2.png" alt="" />
                                Fire Ball
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 pr-3 for_box_border2">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test7" name="same-group-name" type="checkbox" />
                            <label for="test7">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot3.png" alt="" /> Earth Strike
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 for_box_border3">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test8" name="same-group-name" type="checkbox" />
                            <label for="test8">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot4.png" alt="" />
                                Gusty Wind
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
          <div className="col-md-2 res_vs_spark_img_second d-flex align-items-center justify-content-center mb-md-0 mb-3">
            <div className="vs">
              <img src="/assets/img/vs.png" alt="" />
            </div>
          </div>
          <div className="col-md-5">
            <div className='for_bg_players_cards_main gameplay_new_design'>
              <div className="players_cards_main">
                <div className="players_info_game second"
                  style={{
                    backgroundImage: "url('/assets/img/gpcn3.png')"
                  }}
                >
                  <div className='d-flex justify-content-between'>
                    <div className="content_gamer top_left_gp">
                      <h4>
                        Col <br /><span>#73399</span>
                      </h4>
                    </div>
                    <div className="content_gamer top_left_gp">
                      <img src='/assets/img/sqare_mind.png' alt="Mint" />
                      <p>MIND</p>
                    </div>
                  </div>
                </div>
                <div className="content_gamer gp_card_bottonn">
                  <h5>If Activated</h5>
                  <h4>
                    <b>+10</b> <span>Punch Ability</span>
                  </h4>
                </div>
              </div>
            </div>
            {/* <div className="players_cards_main ">
              <div className="players_info_game second" style={{ backgroundImage: `url(${match.player2.characterAvatar})` }}>
                <div className="brwaling_cards_top_right">
                  <h2>30 W - 77 L</h2>
                  <p>Brawls</p>
                </div>
                <div className="content_gamer">
                  <h5>{match.player2.race}</h5>
                  <h4>
                    {match.player2.characterName} <span>#733555</span>
                  </h4>
                </div>
              </div>
              <div className="card_brawl select_abilites">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test0" name="same-group-name" type="checkbox" />
                            <label for="test0">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot1.png" alt="" /> Magic Pulse
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 for_box_border1">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test1" name="same-group-name" type="checkbox" />
                            <label for="test1">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot2.png" alt="" />
                                Fire Ball
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 pr-3 for_box_border2">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test2" name="same-group-name" type="checkbox" />
                            <label for="test2">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot3.png" alt="" /> Earth Strike
                              </div>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 for_box_border3">
                    <div className="boots">
                      <form action="#">
                        <div className="stock-images">
                          <div className="exact_copy">
                            <input id="test3" name="same-group-name" type="checkbox" />
                            <label for="test3">
                              <div className="image">
                                {' '}
                                <img src="/assets/img/boot4.png" alt="" /> Gusty Wind
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
      </div>
    </>
  );
};
export default MatchLive;
