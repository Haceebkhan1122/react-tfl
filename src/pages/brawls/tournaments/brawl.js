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
import { FetchMatches } from '../../../actions/tournament-matches-actions';

function Brawl() {
  const dispatch = useDispatch();
  const location = useLocation();

  const [myOnly, setMyOnly] = useState(false);
  const [tab, setTab] = useState('OPEN_TOURNAMENTS');
  const [status, setStatus] = useState('OPEN');
  const [sort, setSort] = useState(-1);
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

  const reset = () => {
    setPage(1);
    setSort(-1);
    dispatch({ type: 'CLEAR-TOURNAMENTS' });
    dispatch({ type: 'CLEAR-TOURNAMENTS-LOAD-MORE' });
    dispatch({ type: 'CLEAR-MATCHES' });
    dispatch({ type: 'CLEAR-MATCHES-LOAD-MORE' });
  };

  const onTabChange = tab => {
    tab === 'OPEN_TOURNAMENTS' ? setStatus('OPEN') : setStatus('STARTED');
    setTab(tab);
    setMyOnly(false);
    reset();
  };

  const onStatusChange = status => {
    setStatus(status);
    reset();
  };

  useEffect(() => {
    switch (tab) {
      case 'LIVE_BRAWLS':
        dispatch(FetchMatches(myOnly, user?.userID, tab, page, limit, sort));
        break;
      case 'FINISHED_BRAWLS':
        dispatch(FetchMatches(myOnly, user?.userID, tab, page, limit, sort));
        break;
      case 'OPEN_TOURNAMENTS':
        dispatch(GetTournments(myOnly, user?.userID, status, page, limit, sort));
        break;
      case 'CLOSED_TOURNAMENTS':
        dispatch(GetTournments(myOnly, user?.userID, status, page, limit, sort));
        break;
    }
  }, [status, tab, sort, page, limit, myOnly, user]);

  return (
    <div className="main_wrapper">
      <div className="top_nft pt-5">
        <div className="container resp_container_w">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="title_section pt-4">
                <h1>Tournament</h1>
              </div>
              <ul className="nav nav-tabs tab_mb" id="myTab" role="tablist">
                <li className="nav-item" onClick={() => onTabChange('OPEN_TOURNAMENTS')}>
                  <a className="nav-link active" id="open-tab" data-toggle="tab" href="#open-tournaments" role="tab" aria-controls="home" aria-selected="true">
                    Open Tournaments
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('LIVE_BRAWLS')}>
                  <a className="nav-link" id="live-tab" data-toggle="tab" href="#live-brawl" role="tab" aria-controls="profile" aria-selected="false">
                    Live Brawls
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('CLOSED_TOURNAMENTS')}>
                  <a className="nav-link" id="past-tab" data-toggle="tab" href="#past" role="tab" aria-controls="contact" aria-selected="false">
                    Closed Tournaments
                  </a>
                </li>
                <li className="nav-item" onClick={() => onTabChange('FINISHED_BRAWLS')}>
                  <a className="nav-link" id="finish-tab" data-toggle="tab" href="#" role="tab" aria-controls="contact" aria-selected="false">
                    Finished Brawls
                  </a>
                </li>
              </ul>
            </div>
            <div className="row w-100 pl-3">
              <div className="col-md-9">
                <div className="drops_main">
                  {tab === 'CLOSED_TOURNAMENTS' && (
                    <div className="tournament_drops">
                      <div className="for_selectbox">
                        <select
                          onChange={e => {
                            onStatusChange(e.target.value);
                          }}
                          value={status}
                        >
                          <option value="" disabled>
                            Status
                          </option>
                          <option value="STARTED">Scheduled</option>
                          <option value="LIVE">Live</option>
                          <option value="CLOSE">Past</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="tournament_drops">
                    <div className="for_selectbox">
                      <select>
                        <option>Location</option>
                        <option></option>
                      </select>
                    </div>
                  </div>

                  <div className="tournament_drops">
                    <div className="for_selectbox">
                      <select>
                        <option>Tournament Rules</option>
                        <option></option>
                        <option></option>
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
                        <option>Sort By</option>
                        <option value={1}>Ascending</option>
                        <option value={-1}>Descending</option>
                      </select>
                    </div>
                  </div>

                  <div className="tournament_drops">
                    <div class="dropdown">
                      <a class="btn dropdown-toggle fk-height for_selectbox text-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                        Entry Fee
                      </a>

                      <div class="dropdown-menu fk-top" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">
                          <div className="range-value">
                            <div className="fk-min">
                              <label>Min</label>
                              <input className="min" type="text" placeholder="0"></input>
                            </div>
                            <p></p>
                            <div className="fk-max">
                              <label>Max</label>
                              <input className="max" type="text" placeholder="5000"></input>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* <div className="for_selectbox">
                      <select>
                        <option>Entry Fee</option>
                        <option></option>
                        <option></option>
                      </select>
                    </div> */}
                  </div>

                  <div className="tournament_drops">
                    <div class="dropdown">
                      <a class="btn dropdown-toggle fk-height for_selectbox text-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                        Prizepool
                      </a>

                      <div class="dropdown-menu fk-top" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">
                          <div className="range-value">
                            <div className="fk-min">
                              <label>Min</label>
                              <input className="min" type="text" placeholder="0"></input>
                            </div>
                            <p></p>
                            <div className="fk-max">
                              <label>Max</label>
                              <input className="max" type="text" placeholder="5000"></input>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* <div className="for_selectbox">
                      <select>
                        <option>Prizepool</option>
                        <option></option>
                        <option></option>
                      </select>
                    </div> */}
                  </div>
                </div>
              </div>

              {tab !== 'CLOSED_TOURNAMENTS' && (      
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <label className="hk_switch hk_with_tab">
                  <Switch
                    onChange={state => {
                      setMyOnly(state);
                      setPage(1);
                    }}
                    checked={myOnly}
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
                <span className="switch_label">{`My ${tab === 'OPEN_TOURNAMENTS' || tab === 'CLOSED_TOURNAMENTS' ? 'Brawls' : 'Brawls'} Only`}</span>
              </div>
              )}
              
              {tab === 'CLOSED_TOURNAMENTS' && (
                <div className="col-md-12 d-flex align-items-center justify-content-end mt-2">
                  <label className="hk_switch hk_with_tab text-right mr-4">
                    <Switch
                      onChange={state => {
                        setMyOnly(state);
                        setPage(1);
                      }}
                      checked={myOnly}
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
                  <span className="switch_label">{`My ${tab === 'OPEN_TOURNAMENTS' || tab === 'CLOSED_TOURNAMENTS' ? 'Brawls' : 'Brawls'} Only`}</span>
                </div>
              )}

            </div>
            <div className="tab-content col-xl-12" id="myTabContent">
              <div className="tab-pane fade show active" id="open-tournaments" role="tabpanel" aria-labelledby="open-tab">
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing">
                      <table className="table">
                        {(tab === 'OPEN_TOURNAMENTS' || tab === 'CLOSED_TOURNAMENTS') && (
                          <>
                            <TableHead />
                            <TableBody />
                          </>
                        )}

                        {(tab === 'LIVE_BRAWLS' || tab === 'FINISHED_BRAWLS') && (
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
