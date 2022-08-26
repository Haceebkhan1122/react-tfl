import React, { useEffect } from "react";
import "../../brawls.css";
import { Link, useLocation, useParams } from "react-router-dom";
import $ from "jquery";
import Countdown from "react-countdown";
import MatchScheduled from "./match-states/match-scheduled";
import MatchLive from "./match-states/match-live";
import MatchEnded from "./match-states/match-ended";

const BrawlingNow = ({ tournament, match }) => {
  // useEffect(() => {
  //     console.log('BRAWL NOW : ', tournament);
  // }, [tournament])

  useEffect(() => {
    // $('body').removeClass('modal-open');
    // $('.modal-backdrop.fade.show').css('display', 'none');
    // $('body').css('padding', '0');
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
    //     $('#video1').on('timeupdate', function (event) {
    //         if (this.currentTime >= this.duration - 1) {
    //             $('.second_show').hide();
    //             $('.third_show').show();
    //         }
    //     });
    //     // setInterval(function(){
    //     //     setTimeout(function () {
    //     //         console.log('initialTimer ---> Interval 1 ', initialTimer);
    //     //         $(".moving_right").animate({ left: '630px' }, 2000, 'linear');
    //     //         $(".moving_right_3").animate({ right: '630px' }, 2000, 'linear');
    //     //         initialTimer = initialTimer + 5000;
    //     //     }, initialTimer);
    //     //     setTimeout(function () {
    //     //         console.log('initialTimer ---> Interval 2 ', initialTimer);
    //     //         $(".moving_right").animate({ left: '0px' }, 2000, 'linear');
    //     //         $(".moving_right_3").animate({ right: '0px' }, 2000, 'linear');
    //     //     }, initialTimer + 5000);
    //     // }, 5000);
    // });
  }, []);

  // $("#video1").on(
  //     "timeupdate",
  //     function (event) {
  //         if (this.currentTime >= this.duration - 1) {
  //             $('.second_show').hide();
  //             $('.third_show').show();
  //         }

  //     });

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="hk_colapsing">
          <div className="row">
            <div className="col-md-6 mb-2 col-sm-8 col-12 mb-sm-4 mb-0">
              <div className="d-flex align-items-center flex_column_custom_385">
                <h3>{tournament && tournament.name}</h3>
                <h5>{tournament && tournament.location}</h5>
              </div>
            </div>
            <div className="col-md-6 text_right col-sm-4 col-12 mb-4 text_left_custom_385">
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                {tournament && tournament.winPrice}
              </span>
            </div>
            <div className="col-md-6 col-sm-12 col-12 table_rules mb-md-0 mb-2 pr-sm-0 pr-0">
              <div className="d-flex align-items-center">
                <h4>Brawl Rules</h4>
                <h6>No Hold Barred</h6>
                <p className="status">
                  STATUS
                  {match &&
                    (match.state === "INCOMPLETED" ||
                      match.state === "SENTFORRENDER" ||
                      match.state === "READYFORRENDER") && (
                      <span>SCHEDULED</span>
                    )}
                  {match && match.state === "LIVE" && (
                    <span>{match.state}</span>
                  )}
                  {match &&
                    (match.state === "ENDED" || match.state === "COMPLETE") && (
                      <span>ENDED</span>
                    )}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-12 text-md-right registerd text-left">
              <p>
                {" "}
                Registered
                <span>
                  {" "}
                  {tournament && tournament.players.length}/
                  {tournament && tournament.roundsCount}
                </span>
              </p>
            </div>
          </div>

          {match ? (
            <>
              {match &&
                (match.state === "READYFORRENDER" ||
                  match.state === "SENTFORRENDER" ||
                  match.state === "RENDERED") && (
                  <MatchScheduled tournament={tournament} match={match} />
                )}

              {match && match.state === "LIVE" && (
                <MatchLive tournament={tournament} match={match} />
              )}

              {match &&
                (match.state === "ENDED" || match.state === "COMPLETED") && (
                  <MatchEnded tournament={tournament} match={match} />
                )}
            </>
          ) : (
            <div className="title_section pt-4 text-left">
              <h4 className="text-left pl-2 text-white">
                Tournament will be started at{" "}
                {tournament && new Date(tournament.startDate).toLocaleString()}
              </h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BrawlingNow;
