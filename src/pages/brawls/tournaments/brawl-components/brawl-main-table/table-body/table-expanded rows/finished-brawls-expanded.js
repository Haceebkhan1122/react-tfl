import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Countdown from 'react-countdown';
import { GetTournment } from '../../../../../../../actions/tournament-actions';

const FinishedBrawlExpandedRow = ({ selectFighter, tournamentStatus, match, unselectMatch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [result, setResult] = useState(false);
  const [element, setElement] = useState(true);

  const tournament = useSelector(state => state.tournaments.tournament);

  useEffect(() => {
    dispatch(GetTournment(match.tournamenID));
  }, [match]);

  const hideFinishedBrawlExpand = () => {
    unselectMatch();
  };

  const goToDetails = () => {
    navigate(`/brawl/play/${tournament._id}/${match._id}`);
  };

  const handleResult = () => {
    setResult(true);
    setElement(false);
  };

  const handleHide = () => {
    setResult(false);
    setElement(true);
  };

  useEffect(() => {
    const element = document.getElementById('scrollIntoView');
    element.scrollIntoView(true);
  }, []);

  const copyMatchID = () => {
    navigator.clipboard.writeText(match._id);
  };

  return (
    <tr id="scrollIntoView" className="colapsingg">
      <td colSpan="8">
        <div className="hk_colapsing">
          <div className="row">
            <div className="col-6 mb-2">
              <div className="d-flex align-items-center">
                <h3>{tournament?.name}</h3>
                <h5>
                  {tournament?.location}{' '}
                  <span onClick={copyMatchID} className="copy_icon">
                    <img src="/assets/img/copy.png" alt="" />
                  </span>
                </h5>
              </div>
            </div>
            <div className="col-6 text-right">
              <span onClick={hideFinishedBrawlExpand} className="cross_hide position_initial finished_cross" style={{ right: '-85px' }}>
                <img src="/assets/img/cut.png" alt="" />
              </span>
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                {tournament?.entryFee}k
              </span>
            </div>
            <div className="col-6 table_rules">
              <div className="d-flex align-items-center">
                <h4>Brawl Rules</h4>
                <h6>No Holds Barred</h6>
                <p className="status mr-4">
                  STATUS <span style={{ color: 'red' }}>{match.state}</span>
                </p>
                <p className="status">
                  BRAWLED AT <span style={{ color: '#ccc' }}> {new Date(match.startDate).toLocaleTimeString()}</span>
                </p>
              </div>
            </div>
            <div className="col-6 text-right registerd button_for_result_see">
              <div className="for_selectbox hk_hover_for_border mb-2">
                <button onClick={goToDetails} type="button" className="btn btn_bg_hk hk_continue with_borders see_details">
                  REPLAY
                </button>
              </div>
            </div>
          </div>
          <hr className="special_line"  />
          <div className="w-100">
            <table className="table for_tr_bg">
              {element && (
                <tr>
                  <td className="hk_padding_brawl">
                    <div className="start_bg first_show for_brawl_page">
                      <div className="row for_zindex resp_bg_position brawl_table_fight">
                        <div className="col-md-5 moving_right mb-md-0 mb-3">
                          {/* <div className="players_cards_main">
                            <div
                              className="players_info_game"
                              style={{
                                backgroundImage: `url(${match.player1.characterAvatar})`,
                              }}
                            >
                              <div className="brwaling_cards_top_right">
                                <h2>30 W - 77 L</h2>
                                <p>Brawls</p>
                              </div>

                              {match.result.WinnerIndex === match.player1.playerId && (
                                <div className="see_result">
                                  <img src="/assets/img/winner.png" alt="" />
                                </div>
                              )}

                              <div className="content_gamer">
                                <h5>{match.player1.race}</h5>
                                <h4>
                                  {match.player1.characterName} <span>#733342</span>
                                </h4>
                              </div>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mt_winner_left_mini_card">
                              <div>
                                <span>
                                  <img src="/assets/img/rs1.png" class="winner_left_mini_img" />
                                </span>
                                <span class="mind_text">Mind</span>
                              </div>
                              <div>
                                <span class="if_activated_center">If Activated</span>
                              </div>
                              <div class="number_text">
                                <span class="font-weight-bold text-white">+10 </span>
                                <span class="punch_text">Punch Ability</span>
                              </div>
                            </div>
                          </div> */}
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
                                                Col <br /><span>#73399</span>
                                            </h4>
                                        </div>
                                        <div className="content_gamer top_left_gp">
                                            <img src='/assets/img/sqare_mind.png' alt="Mint" />
                                            <p>MIND</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='winner_controller'>
                                    <div className="see_result">
                                        <img src="/assets/img/winner_new.png" alt="" />
                                  <a className="btn btn_bg_hk mt-3 mb-4" onClick={handleResult}>
                                    SEE RESULTS
                                  </a>
                                    </div>
                                </div>
                                <div className="content_gamer gp_card_bottonn for_win_bottom">
                                    <h5>If Activated</h5>
                                    <h4>
                                        <b>+10</b> <span>Punch Ability</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-2 order_static res_vs_spark_img d-flex justify-content-center align-items-center my-md-0 my-3">
                          <div className="vs">
                            <img src="/assets/img/vs.png" alt="" />
                          </div>
                        </div>
                        <div className="col-md-5 moving_right_3">
                        <div className='for_bg_players_cards_main gameplay_new_design  looser_player'>
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

                              {String(match.result.WinnerIndex) === String(match.player2.playerId) && (
                                <div className="see_result">
                                  <img src="/assets/img/winner.png" alt="" />
                                </div>
                              )}

                              <div className="content_gamer">
                                <h5>{match.player2.race}</h5>
                                <h4>
                                  {match.player2.characterName} <span>#733342</span>
                                </h4>
                              </div>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mt_winner_left_mini_card">
                              <div>
                                <span>
                                  <img src="/assets/img/rs1.png" class="winner_left_mini_img right_loss_img" />
                                </span>
                                <span class="mind_text">Mind</span>
                              </div>
                              <div>
                                <span class="if_activated_center">If Activated</span>
                              </div>
                              <div class="number_text">
                                <span class="font-weight-bold text-white">+10 </span>
                                <span class="punch_text right_loss_punch_text">Punch Ability</span>
                              </div>
                            </div>
                          </div> */}
                        </div>
                        {/* <div className="col-md-12 text-center hk_enter pt-4">
                          <h1 className="resp_enter_tournament_font">See the results</h1>
                          <a className="btn btn_bg_hk mt-4 mb-4" onClick={handleResult}>
                            SEE RESULTS
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {result && (
                <tr>
                  <div className="start_bg  mb-5 brawls_card_showing result_content_main third_show resp_third_show_h for_brawl_page">
                    <div className="row res_vs_card_bg_pos brawl_table_fight">
                      <div className="col-md-4">
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
                            {match.result.WinnerIndex === match.player1.playerId && (
                              <div className="see_result">
                                <img src="/assets/img/winner.png" alt="" />
                              </div>
                            )}
                            <div className="content_gamer">
                              <h5>Undead</h5>
                              <h4>
                                Cols<span> #73399</span>
                              </h4>
                            </div>
                          </div>
                          <div className="card_brawl select_abilites ">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="for_align">
                                  <div className="boots_on_result">
                                    <img src={match.player1.character?.rune?.img} alt="" />
                                    <h3>{match.player1.character?.rune?.name}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      <div className="col-md-4 order-md-2 order-3 ">
                        <div className="topper_area mb-3 text-center">
                          <p>Brawl Time</p>
                        </div>
                        <div className="for_result_content">
                          <h4>{match.result.logs?.player1DamageDone || 'N/A'}</h4>
                          <span className="special_font">Damage Done</span>
                          <h4>{match.result.logs?.player2DamageDone || 'N/A'}</h4>
                        </div>
                        <div className="for_result_content">
                          <h4>{match.result.logs?.player1AbilitiesUsed || 'N/A'}</h4>
                          <span className="special_font">Abilities Used</span>
                          <h4>{match.result.logs?.player2AbilitiesUsed || 'N/A'}</h4>
                        </div>
                        <div className="for_result_content">
                          <h4>{match.result.logs?.player1Boosters || 'N/A'}</h4>
                          <span className="special_font">Boosters</span>
                          <h4>{match.result.logs?.player2Boosters || 'N/A'}</h4>
                        </div>
                        <div className="for_result_content">
                          <h4>{match.result.logs?.player1DamageRecived || 'N/A'}</h4>
                          <span className="special_font">Damage recieved</span>
                          <h4>{match.result.logs?.player2DamageRecived || 'N/A'}</h4>
                        </div>
                        <div className="for_result_content">
                          <h4>{match.result.logs?.player2DamageBlocked || 'N/A'}</h4>
                          <span className="special_font">Damage Blokced</span>
                          <h4>{match.result.logs?.player2DamageBlocked || 'N/A'}</h4>
                        </div>
                        <div className="for_result_content">
                          <h4>{match.result.logs?.player1Advantage || 'N/A'}</h4>
                          <span className="special_font">Advantage</span>
                          <h4>{match.result.logs?.player2Advantage || 'N/A'}</h4>
                        </div>
                        <div className="continued mt-5">
                          <a className="btn btn_bg_hk mt-4 mb-md-0 mb-md-5 mb-0 forward" onClick={handleHide}>
                            HIDE DETAILS
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4 order-md-3 order-2 result">
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
                            {match.result.WinnerIndex === match.player2.playerId && (
                              <div className="see_result">
                                <img src="/assets/img/winner.png" alt="" />
                              </div>
                            )}
                            <div className="content_gamer">
                              <h5>Scales</h5>
                              <h4>
                                Kusk <span>#733555 </span>
                              </h4>
                            </div>
                          </div>
                          <div className="card_brawl select_abilites">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="for_align">
                                  <div className="boots_on_result">
                                    <img src={match.player2.character?.rune?.img} alt="" />
                                    <h3>{match.player2.character?.rune?.name}</h3>
                                  </div>
                             </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </tr>
              )}
            </table>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default FinishedBrawlExpandedRow;
