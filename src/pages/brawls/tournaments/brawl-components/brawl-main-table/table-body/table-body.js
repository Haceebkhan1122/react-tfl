import { useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { GetTournments, GetTournment, electTournament, GetTournmentLocal } from '../../../../../../actions/tournament-actions';
import BrawlStandings from '../../../../brawl-result-components/brawl-standings/brawl-standings';
import TournamentDetails from '../../../tournament-details/tournaments-details';
import FinishedBrawlExpandedRow from './table-expanded rows/finished-brawls-expanded';
import LiveBrawlExpandedRow from './table-expanded rows/live-brawls-expanded';
import OngoingTournamentsRow from './table-expanded rows/ongoing-tournaments';
import PastTournamentsRow from './table-expanded rows/past-tournaments-row';

const TableBody = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedTournament = useSelector(state => state.tournaments.tournament);
  const tournaments = useSelector(state => state.tournaments.tournaments);

  const SelectTournament = tournament => {
    if (tournament && tournament.state === 'CLOSE') {
      dispatch(GetTournmentLocal(tournament));
    } else if (tournament && tournament.state === 'OPEN') {
      dispatch(GetTournmentLocal(tournament));
    } else {
      navigate(`/brawl/tournament/${tournament._id}`);
    }
  };

  const close = () => {
    dispatch(GetTournmentLocal(null));
  };

  return (
    <tbody>
      {tournaments.map(tournament => (
        <>
          <tr className="onclicking" key={tournament._id} onClick={() => SelectTournament(tournament)}>
            <td>{tournament.name}</td>
            <td>{tournament.location}</td>
            <td>No Holds Barred</td>
            <td>
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                {tournament.entryFee}
              </span>
            </td>
            <td>
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                {tournament.winPrice}
              </span>
            </td>
            <td>
              {tournament.players.length}/{tournament.roundsCount}
            </td>

            {tournament.state === 'LIVE' && (
              <td className="live_brawl">
                <span className="live_match_tag">
                  <i className="fa fa-circle" aria-hidden="true"></i> Live
                </span>
              </td>
            )}
          </tr>

          {selectedTournament && selectedTournament._id === tournament._id && selectedTournament.state === 'OPEN' && <TournamentDetails close={close} tournament={selectedTournament} />}

          {selectedTournament && selectedTournament._id === tournament._id && selectedTournament.state === 'CLOSE' && <BrawlStandings tournament={selectedTournament} />}
        </>
        // <BrawlStandings selectedTournament={selectedTournament}
      ))}
      {/* {tournament &&
            <tr className="colapsingg">
                <td colSpan="6">
                    <div className="hk_colapsing">
                        <div className="row">
                            <div className="col-6 mb-2">
                                <div className="d-flex align-items-center">
                                    <h3>{tournament.name}</h3>
                                    <h5>Florida - USA <span className='copy_icon'><img src='/assets/img/copy.png' alt="" /></span></h5>
                                </div>
                            </div>
                            <div className="col-6 text-right">
                                <span className="cross_hide"><img src="/assets/img/cut.png" alt="" /></span>
                                <span className="text_color"><img src="/assets/img/ethurem.png" alt="" />10k</span>
                            </div>
                            <div className="col-6 table_rules">
                                <div className="d-flex align-items-center">
                                    <h4>Brawl Rules</h4>
                                    <h6>No Holds Barred</h6>
                                    <p className="status">STATUS <span>OPEN</span></p>
                                </div>
                            </div>
                            <div className="col-6 text-right registerd">
                                <p> Registered<span> 5/10</span></p>
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
                                    <td><span className="profile"><img src="/assets/img/c1.png" /></span><span className="user_name">Thrutlauz</span></td>
                                    <td>Scales </td>
                                    <td>58.00%</td>
                                    <td>100 W - 75 L</td>
                                    <td><span className="profile"><img src="/assets/img/profile.png" /></span><span className="user_name">0X5gt4tf</span></td>
                                </tr>
                                <tr>
                                    <td><span className="profile"><img src="/assets/img/c2.png" /></span><span className="user_name">Kusk</span></td>
                                    <td>Scales </td>
                                    <td>35.00%</td>
                                    <td>50 W - 67 L</td>
                                    <td><span className="profile"><img src="/assets/img/pr1.jpg" /></span><span className="user_name">0X5gt4t7</span></td>
                                </tr>
                                <tr>
                                    <td><span className="profile"><img src="/assets/img/c3.png" /></span><span className="user_name">Collazig</span></td>
                                    <td>Squids</td>
                                    <td>92.00%</td>
                                    <td>30 W - 77 L</td>
                                    <td><span className="profile"><img src="/assets/img/pr2.jpeg" /></span><span className="user_name">0X5gt4t6</span></td>
                                </tr>
                                <tr>
                                    <td><span className="profile"><img src="/assets/img/c4.png" /></span><span className="user_name">Gaelalaer</span></td>
                                    <td>Squids</td>
                                    <td>42.00%</td>
                                    <td>99 W - 25 L</td>
                                    <td><span className="profile"><img src="/assets/img/pr3.jpg" /></span><span className="user_name">0X5gt4t34</span></td>
                                </tr>
                                <tr>
                                    <td><span className="profile"><img src="/assets/img/c5.png" /></span><span className="user_name">Cols</span></td>
                                    <td>Undead </td>
                                    <td>22.00%</td>
                                    <td>35 W - 78 L</td>
                                    <td><span className="profile"><img src="/assets/img/pr4.jpg" /></span><span className="user_name">0X5gt4t1</span></td>
                                </tr>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center hk_enter">
                                <h1 className="resp_enter_tournament_font">Enter the brawl with your fighter</h1>
                                <a className="btn btn_bg_hk" data-toggle="modal" data-target=".bd-example-modal-lg" onClick={selectFighter}>Brawl</a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            } */}

      {/* {tournmentSelector.tournament && */}

      {/* } */}
      {/* <tr className="onclicking">
                                                <td>The Hunter</td>
                                                <td>US - Chicago</td>
                                                <td>No Holds Barred</td>
                                                <td><span className="text_color"><img src="/assets/img/ethurem.png" alt="" />1000</span></td>
                                                <td><span className="text_color"><img src="/assets/img/ethurem.png" alt="" />20K</span></td>
                                                <td>4/10</td>
                                            </tr>
                                            <tr className="onclicking">
                                                <td>The boult</td>
                                                <td>US - New york</td>
                                                <td>No Holds Barred</td>
                                                <td><span className="text_color"><img src="/assets/img/ethurem.png" alt="" />5000</span></td>
                                                <td><span className="text_color"><img src="/assets/img/ethurem.png" alt="" />100K</span></td>
                                                <td>7/10</td>
                                            </tr> */}
    </tbody>
  );
};
export default TableBody;
