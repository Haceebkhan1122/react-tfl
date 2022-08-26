import './tournaments.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';

import { GetTournments } from '../../../actions/tournament-actions';
import TableBody from './brawl-components/brawl-main-table/table-body/table-body';
import TableHead from '../brawl-result-components/brawl-table-head/tableHead';
import TableHeadTournamentMatches from '../brawl-result-components/brawl-table-head/table-head-tournament-matches';
import TableBodyTournamentMatches from './brawl-components/brawl-main-table/table-body/table-body-toutnament-matches';
import { fetchMatches } from '../../../actions/tournament-matches-actions';

function Brawl() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [myBrawls, setMyBrawls] = useState(false);
  const [tab, setTab] = useState('OPEN');
  const [sort, setSort] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // useEffect(() => {
  //     $("tr.onclicking").click(function () {
  //         $("tr.onclicking").hide('fast',function(){
  //             $("tr.colapsingg").show(600);
  //         });
  //         // $("tr.colapsingg").show(600);
  //     });
  //     // $("span.cross_hide").click(function () {
  //     //     $("tr.colapsingg").hide(300);
  //     //     $("tr.onclicking").show(200);
  //     // });
  // }, [])

  // function selectFighter() {
  //   setChooseFighter(true);
  //   console.log(chooseFighter, 'chooseFighterrrr');
  // }

  // function selectAbilites(e) {
  //   setChooseFighter(false);
  //   setSelectChooseAbilitess(true);
  // }

  // function selectBoost() {
  //   setSelectChooseAbilitess(false);
  //   setSelectConfirmAbilites(true);
  // }

  // function selectTransaction() {
  //   setSelectConfirmAbilites(false);
  //   setSelectConfirmTransaction(true);
  // }

  // function onClose() {
  //   setChooseFighter(false);
  //   setSelectChooseAbilitess(false);
  //   setSelectConfirmAbilites(false);
  //   setSelectConfirmTransaction(false);
  // }

  // function backToOldChooseFighter() {
  //   console.log('called');
  //   setChooseFighter(true);
  //   setSelectChooseAbilitess(false);
  //   console.log(setSelectChooseAbilitess);
  // }

  // function goForPage() {
  //   setSelectConfirmTransaction(false);
  // }

  const user = useSelector(state => state.auth.user?.data);
  const isMatchesLoading = useSelector(state => state.tournamentMatches.loading);
  const isTournamentsLoading = useSelector(state => state.tournaments.loading);
  const canLoadMoreTournaments = useSelector(state => state.tournaments.canLoadMore);
  const canLoadMoreMatches = useSelector(state => state.tournamentMatches.canLoadMore);

  const isLoading = isMatchesLoading || isTournamentsLoading;
  const canLoadMore = canLoadMoreTournaments || canLoadMoreMatches;

  const onTabChange = (tab, actionType) => {
    setTab(tab);
    setPage(1);
    setSort(1);
    dispatch({ type: actionType });
    dispatch({ type: 'CLEAR-TOURNAMENTS-LOAD-MORE' });
    dispatch({ type: 'CLEAR-MATCHES-LOAD-MORE' });
  };

  useEffect(() => {
    switch (tab) {
      case 'LIVE_BRAWLS':
        dispatch(fetchMatches(myBrawls, user?.userID, tab, page, limit, sort));
        break;
      case 'FINISH_BRAWLS':
        dispatch(fetchMatches(myBrawls, user?.userID, tab, page, limit, sort));
        break;
      case 'OPEN':
        dispatch(GetTournments(tab, page, limit, sort));
        break;
      case 'STARTED':
        dispatch(GetTournments(tab, page, limit, sort));
        break;
      case 'CLOSE':
        dispatch(GetTournments(tab, page, limit, sort));
        break;
    }
  }, [tab, sort, page, limit, myBrawls, user]);

  return (
    <div className="main_wrapper">
      <div className="top_nft pt-5">
        <div className="container resp_container_w">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="title_section pt-4">
                <h1>Brawls</h1>
              </div>
              <ul className="nav nav-tabs tab_mb" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => onTabChange('OPEN', 'CLEAR-TOURNAMENTS')}>
                  <a className="nav-link active" id="open-tab" data-toggle="tab" href="#open-tournaments" role="tab" aria-controls="home" aria-selected="true">
                    Open Tournaments
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('LIVE_BRAWLS', 'CLEAR-MATCHES')}>
                  <a className="nav-link" id="live-tab" data-toggle="tab" href="#live-brawl" role="tab" aria-controls="profile" aria-selected="false">
                    Live Brawls
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('FINISH_BRAWLS', 'CLEAR-MATCHES')}>
                  <a className="nav-link" id="finish-tab" data-toggle="tab" href="#" role="tab" aria-controls="contact" aria-selected="false">
                    Finished Brawls
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('STARTED', 'CLEAR-TOURNAMENTS')}>
                  <a className="nav-link" id="started-tab" data-toggle="tab" href="#started" role="tab" aria-controls="contact" aria-selected="false">
                    Scheduled Tournaments
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('CLOSE', 'CLEAR-TOURNAMENTS')}>
                  <a className="nav-link" id="past-tab" data-toggle="tab" href="#past" role="tab" aria-controls="contact" aria-selected="false">
                    Past Tournaments
                  </a>
                </li>
              </ul>
            </div>
            <div className="row w-100 pl-3">
              <div className="col-md-9">
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
                      <select
                        onChange={e => {
                          setSort(e.target.value);
                          setPage(1);
                        }}
                        value={sort}
                      >
                        <option disabled>Sort By</option>
                        <option value={1}>Ascending</option>
                        <option value={-1}>Descending</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {(tab === 'LIVE_BRAWLS' || tab === 'FINISH_BRAWLS') && (
                <div className="col-md-3 d-flex align-items-center justify-content-end">
                  <label className="hk_switch hk_with_tab">
                    <Switch
                      onChange={state => {
                        setMyBrawls(state);
                        setPage(1);
                      }}
                      checked={myBrawls}
                      uncheckedIcon={false}
                      checkedIcon={false}
                      width={40}
                      height={12}
                      onColor="#3f347b"
                      offColor="#ccc"
                      boxShadow={false}
                      activeBoxShadow={false}
                    />
                  </label>
                  <span className="switch_label">My Brawls Only</span>
                </div>
              )}
            </div>
            <div className="tab-content col-xl-12" id="myTabContent">
              <div className="tab-pane fade show active" id="open-tournaments" role="tabpanel" aria-labelledby="open-tab">
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing">
                      <table className="table">
                        {(tab === 'OPEN' || tab === 'LIVE' || tab === 'CLOSE' || tab === 'STARTED') && (
                          <>
                            <TableHead />
                            <TableBody />
                          </>
                        )}

                        {(tab === 'LIVE_BRAWLS' || tab === 'FINISH_BRAWLS') && (
                          <>
                            <TableHeadTournamentMatches />
                            <TableBodyTournamentMatches />
                          </>
                        )}
                      </table>
                      {/* <div className="table_data_loader">LOADING</div> */}

                      {/* loader none  */}
                      <div className={`three col table_data_loader ${!isLoading && 'd-none'}`}>
                        <div className="loader2" id="loader-6">
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      {/* loader none  */}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="tab-pane fade" id="live-brawl" role="tabpanel" aria-labelledby="live-tab">
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing hk_scroll_none">
                      <table className="table">
                        <thead>
                          {column && (
                            <tr>
                              <th scope="col">Fighter 1</th>
                              <th scope="col">Fighter 2</th>
                              <th scope="col">Tournament</th>
                              <th scope="col">MATCH</th>
                              <th scope="col">STARTING IN</th>
                            </tr>
                          )}
                        </thead>
                        <tbody>
                          <tr className="onclicking">
                            <td>
                              <span className="profile">
                                <img src="/assets/img/table_char1.png" />
                              </span>
                              <span className="user_name">Viking Sheild</span>
                            </td>
                            <td>
                              <span className="profile">
                                <img src="/assets/img/table_char2.png" />
                              </span>
                              <span className="user_name">Sword Master</span>
                            </td>
                            <td className="live_brawl">Last Chains</td>
                            <td className="live_brawl">1st Round</td>
                            <td className="live_brawl">
                              <span className="live_match_tag">
                                <i className="fa fa-circle" aria-hidden="true"></i> Live
                              </span>
                            </td>
                          </tr>
                         
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="finish-brawl" role="tabpanel" aria-labelledby="finish-tab">
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing hk_scroll_none">
                      <table className="table">
                        <thead>
                          {column && (
                            <tr>
                              <th scope="col">Fighter 1</th>
                              <th scope="col">Fighter 2</th>
                              <th scope="col">Tournament</th>
                              <th scope="col">MATCH</th>
                              <th scope="col">BRAWLED AT</th>
                            </tr>
                          )}
                        </thead>
                        <tbody>
                          <tr className="onclicking">
                            <td>
                              <span className="profile">
                                <img src="/assets/img/table_char1.png" />
                              </span>
                              <span className="user_name">Viking Sheild</span>
                            </td>
                            <td>
                              <span className="profile">
                                <img src="/assets/img/table_char2.png" />
                              </span>
                              <span className="user_name">Sword Master</span>
                            </td>
                            <td className="live_brawl">Last Chains</td>
                            <td className="live_brawl">1st Round</td>
                            <td className="live_brawl">18 JAN 2022, 13:17</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="ongoing" role="tabpanel" aria-labelledby="ongoing-tab">
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing hk_scroll_none">
                      <table className="table">
                        <thead>
                          {column && (
                            <tr>
                              <th scope="col">Tournament</th>
                              <th scope="col">Location</th>
                              <th scope="col">Tournament Rules</th>
                              <th scope="col">Entry Fee</th>
                              <th scope="col">Prize Pool</th>
                              <th scope="col">Fighters</th>
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
                            <td>64</td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="past" role="tabpanel" aria-labelledby="past-tab">
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing hk_scroll_none">
                      <table className="table">
                        <thead>
                          {column && (
                            <tr>
                              <th scope="col">Tournament</th>
                              <th scope="col">Location</th>
                              <th scope="col">Tournament Rules</th>
                              <th scope="col">Entry Fee</th>
                              <th scope="col">Prize Pool</th>
                              <th scope="col">Fighters</th>
                            </tr>
                          )}
                        </thead>
                        <tbody>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div> */}

              {canLoadMore && (
                <button onClick={() => setPage(state => state + 1)} className="btn btn_bg_hk position-relative">
                  See More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brawl;
