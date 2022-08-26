import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetTournment } from '../../../../../../../actions/tournament-actions';

const LiveBrawlExpandedRow = ({ selectFighter, tournamentStatus, match, unselectMatch }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tournament = useSelector(state => state.tournaments.tournament);

  useEffect(() => {
    dispatch(GetTournment(match.tournamenID));
  }, [match]);

  const hideLiveBrawlExpand = () => {
    unselectMatch();
  };

  const goToDetails = () => {
    navigate(`/brawl/play/${tournament._id}/${match._id}`);
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
      <td colSpan="12">
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
              <span onClick={hideLiveBrawlExpand} className="cross_hide position_initial" style={{right: '-85px'}}>
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
                <p className="status">
                  STATUS <span>{match.state}</span>
                </p>
              </div>
            </div>
            <div className="col-6 text-right registerd">
              <p>
                {' '}
                STARTING AT
                <span className="text-lowercase"> {new Date(match.startDate).toLocaleTimeString()}</span>
              </p>
            </div>
          </div>
          <hr className="special_line" />
          <div className="w-100">
            <table className="table for_tr_bg">
              <tr>
                <td className="hk_padding_brawl">
                  <div className="start_bg first_show for_brawl_page">
                    <div className="row for_zindex resp_bg_position brawl_table_fight">
                      <div className="col-md-5 moving_right mb-md-0 mb-3">
                        <div className='for_bg_players_cards_main'>
                          <div className="players_cards_main">
                            <div
                              className="players_info_game"
                              style={{
                                backgroundImage: "url('../assets/img/cn1.png')"
                              }}
                            >
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
                            <div className="content_gamer">
                              <h5>{match.player1.race}</h5>
                              <h4>
                                {match.player1.characterName} <span>#733342</span>
                              </h4>
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
                        <div className='for_bg_players_cards_main'>
                          <div className="players_cards_main">
                            <div
                              className="players_info_game second"
                              style={{
                                backgroundImage: "url('../assets/img/cn2.png')"
                              }}
                            >
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
                            <div className="content_gamer">
                              <h5>{match.player2.race}</h5>
                              <h4>
                                {match.player2.characterName} <span>#733342</span>
                              </h4>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div className="row">
            <div className="col-md-12 text-center hk_enter">
              <h1 className="resp_enter_tournament_font">Watch the fight between players</h1>
              <a onClick={goToDetails} className="btn btn_bg_hk mt-4 mb-4">
                Watch
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
export default LiveBrawlExpandedRow;
