import React, { useEffect } from 'react';
import '../../../brawls.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import $ from 'jquery';
import Countdown from 'react-countdown';

const MatchScheduled = ({ tournament, match }) => {
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

    $(document).ready(function () {
      let initialTimer = 0;

      // $('#video1').on('timeupdate', function (event) {
      //     if (this.currentTime >= this.duration - 1) {
      //         $('.second_show').hide();
      //         $('.third_show').show();
      //     }
      // });

      // setInterval(function () {

      //     setTimeout(function () {
      //         console.log('initialTimer ---> Interval 1 ', initialTimer);
      //         $(".moving_right").animate({ left: '630px' }, 2000, 'linear');
      //         $(".moving_right_3").animate({ right: '630px' }, 2000, 'linear');
      //         initialTimer = initialTimer + 5000;
      //     }, initialTimer);

      //     setTimeout(function () {
      //          console.log('initialTimer ---> Interval 2 ', initialTimer);
      //         $(".moving_right").animate({ left: '0px' }, 2000, 'linear');
      //         $(".moving_right_3").animate({ right: '0px' }, 2000, 'linear');

      //     }, initialTimer + 5000);

      // }, 5000);
    });
  }, []);

  return (
    <>
      <div className="row for_zindex resp_bg_position">
        <div className="col-md-12">
          <div className="topper_area mb-5">
            {match.startDate && (
              <h3>
                {' '}
                <Countdown zeroPadTime={2} daysInHours={3} zeroPadDays={false} date={Date.parse(match.startDate)} />
              </h3>
            )}
            {!match.startDate && <h3> N/A</h3>}
            <p>Starting In</p>
          </div>
        </div>
        <div className="col-md-5 moving_right mb-md-0 mb-3">
          <div className="for_bg_players_cards_main">
            <div className="players_cards_main">
              <div
                className="players_info_game"
                style={{
                  backgroundImage: `url(${match.player1.character.thumbnail})`,
                }}
              ></div>
              {/* <div className="brwaling_cards_top_right">
                                <h2>30 W - 77 L</h2>
                                <p>Brawls</p>
                            </div> */}
              <div className="content_gamer">
                <h5>{match.player1.race}</h5>
                <h4>
                  <span>{match.player1.characterName}</span>
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="players_cards_main">
                    <div className="players_info_game" style={{ backgroundImage: `url(${match.player1.characterAvatar})` }}>
                        <div className="content_gamer">
                            <h5>{match.player1.race}</h5>
                            <h4>{match.player1.characterName} <span>#73399</span></h4>
                        </div>
                    </div>
                </div> */}
        </div>
        <div className="col-md-2 order_static res_vs_spark_img d-flex justify-content-center align-items-center my-md-0 my-3">
          <div className="vs">
            <img src="/assets/img/vs.png" alt="" />
          </div>
        </div>
        <div className="col-md-5 moving_right_3">
          {/* <div className="players_cards_main">
                    <div className="players_info_game second" style={{ backgroundImage: `url(${match.player2.characterAvatar})` }}>
                        <div className="content_gamer">
                            <h5>{match.player2.race}</h5>
                            <h4>{match.player2.characterName} <span>#733555</span></h4>
                        </div>
                    </div>
                </div> */}
          <div className="for_bg_players_cards_main">
            <div className="players_cards_main">
              <div
                className="players_info_game second"
                style={{
                  backgroundImage: `url(${match.player2.character.thumbnail})`,
                }}
              ></div>
              {/* <div className="brwaling_cards_top_right">
                                <h2>30 W - 77 L</h2>
                                <p>Brawls</p>
                            </div> */}
              <div className="content_gamer">
                <h5>{match.player2.race}</h5>
                <h4>
                  <span>{match.player2.characterName}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MatchScheduled;
