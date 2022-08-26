import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllTournamentMatches } from "../../../../actions/tournament-matches-actions";
import TournamentBrackets from "../../tournaments/tournament-brackets";

const BrawlStandings = (tournament) => {
  const rounds = [
    {
      title: "Round one",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
      ],
    },
    {
      title: "Round one",
      seeds: [
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
  ];

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useSelector((state) => {
    return state.tournamentMatches.matches;
  });

  const [result, setResult] = useState(false);
  const [profiles, setProfiles] = useState(true);
  const [column, setColumn] = useState(true);
  const [loading, setLoading] = useState(true);

  const resultSee = (e) => {
    e.preventDefault();
    navigate(`/brawl/bracket/${tournament.tournament._id}`);

    // setResult(!result);
    // setProfiles(result);
  };
  const colShow = (e) => {
    dispatch({ type: "UNSELECT-TOURNAMENT", data: null });
    setColumn(true);
  };

  const GroupTournaments = (matches) => {
    // let temp = {};
    // let leastlevel = '0';
    // matches.map((match, index) => {
    //     if (index === 0) leastlevel = index.toString();
    //     if (!match) {
    //         if (!temp[leastlevel]) temp[leastlevel] = [];
    //         temp[leastlevel].unshift(null);
    //     } else {
    //         if (!temp[match.level]) temp[match.level] = [];
    //         temp[match.level].push(match);
    //     }
    // })

    console.log(matches);
  };

  useEffect(() => {
    // $("tr.onclicking").click(function () {
    //     $("tr.colapsingg").show(600);
    //     $("tr.onclicking").hide('fast');
    //     setColumn(false);
    // });
    // $("span.cross_hide").click(function () {
    //     $("tr.colapsingg").hide(300);
    //     $("tr.onclicking").show(200);
    // });
    dispatch(FetchAllTournamentMatches(tournament.tournament._id));
  }, []);

  useEffect(() => {
    const element = document.getElementById("scrollIntoView");
    element.scrollIntoView(true);
  }, []);

  const watchMatchVideo = (tournamentID, matchID) => {
    navigate(`/brawl/play/${tournamentID}/${matchID}`);
  };

  return (
    <>
      {/* {matches && GroupTournaments(matches)} */}
      {tournament && tournament.tournament && (
        <tr id="scrollIntoView">
          <td colSpan="6">
            <div className="hk_colapsing pb-3">
              <div className="row">
                <div className="col-6 mb-5">
                  <div className="d-flex align-items-center">
                    <h3 className="pt-1">{tournament.tournament.name} </h3>
                    <h5 className="pt-2">{tournament.tournament.location} </h5>
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
                      <button
                        type="button"
                        className="btn btn_bg_hk hk_continue with_borders see_details"
                        onClick={resultSee}
                      >
                        SEE BRAWL RESULTS
                      </button>
                    </div>
                    <span>BRAWL FINISHED</span>
                  </p>
                </div>
              </div>
              <hr className="special_line for_list_result" />
              {result && (
                <div className="tournament_player_data mt-4 result_showing_custom result_resp_tag">
                  <div className="row">
                    <TournamentBrackets
                      tid={tournament.tournament._id}
                      rounds={matches}
                      showFullBracketLink={true}
                    />
                  </div>
                </div>
              )}
              {profiles && (
                <div className="tournament_player_data mt-5">
                  <div className="row resp_tournament_collapse_trcard">
                    {tournament &&
                      tournament.tournament.winners &&
                      tournament.tournament.winners.map((winner, index) => (
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
                          <div className="player_bio">
                            {index === 0 ? (
                              <div className="top_bio">
                                <h4>{index + 1}st</h4>
                              </div>
                            ) : undefined}

                            {index === 1 ? (
                              <div className="top_bio">
                                <h4>{index + 1}nd</h4>
                              </div>
                            ) : undefined}

                            {index === 2 ? (
                              <div className="top_bio">
                                <h4>{index + 1}rd</h4>
                              </div>
                            ) : undefined}

                            {index === 3 ? (
                              <div className="top_bio">
                                <h4>{index + 1}th</h4>
                              </div>
                            ) : undefined}

                            <img src={winner.characterAvatar} alt="" />
                            <h3>{winner.characterName}</h3>
                            <p>
                              #73345{" "}
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>{" "}
                              {winner.race}
                              MetaID: {winner.metaID}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="row mt-3">
                    {/* <div className="for_selectbox hk_hover_for_border mb-4">
                      <button type="button" className="btn btn_bg_hk hk_continue with_borders see_details" onClick={resultSee}>
                        SEE BRAWL RESULTS
                      </button>
                    </div> */}
                    <div className="col-md-12 text-center hk_follow">
                      <h1 className="fnt_res_23px">
                        The prize pool of{" "}
                        {tournament.tournament.currency == "Taunt" && (
                          <img src="/assets/img/ethurem.png" alt="" />
                        )}
                        {tournament.tournament.currency == "Doller" && (
                          // <img src="/assets/img/ethurem.png" alt="" />
                          <span>$</span>
                        )}
                        <span className="text_color mr-2">
                          {tournament.tournament.winPrice}
                        </span>{" "}
                        will be divided as follows:
                      </h1>
                      <div className="positions_holder mt-5">
                        <div className="position_holder_data">
                          <h4>
                            1st -{" "}
                            {tournament.tournament.currency == "Taunt" && (
                              <img src="/assets/img/ethurem.png" alt="" />
                            )}
                            {tournament.tournament.currency == "Doller" && (
                              <span>$</span>
                            )}
                            <span className="text_color">
                              {tournament.tournament.winPrice * 0.5}
                            </span>
                          </h4>
                        </div>
                        <div className="position_holder_data">
                          <h4>
                            2nd -{" "}
                            {tournament.tournament.currency == "Taunt" && (
                              <img src="/assets/img/ethurem.png" alt="" />
                            )}
                            {tournament.tournament.currency == "Doller" && (
                              <span>$</span>
                            )}
                            <span className="text_color">
                              {tournament.tournament.winPrice * 0.5 * 0.66}
                            </span>
                          </h4>
                        </div>
                        <div className="position_holder_data">
                          <h4>
                            3rd -{" "}
                            {tournament.tournament.currency == "Taunt" && (
                              <img src="/assets/img/ethurem.png" alt="" />
                            )}
                            {tournament.tournament.currency == "Doller" && (
                              <span>$</span>
                            )}
                            <span className="text_color">
                              {tournament.tournament.winPrice * 0.5 * 0.34}
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
      )}
    </>
  );
};
export default BrawlStandings;
