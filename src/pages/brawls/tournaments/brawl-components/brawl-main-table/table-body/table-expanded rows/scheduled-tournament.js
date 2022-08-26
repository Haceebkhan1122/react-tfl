import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { GetTournment } from '../../../../../../../actions/tournament-actions';
import MatchScheduled from '../../../../../brawls-components/brawling-now/match-states/match-scheduled';

const ScheduledTournamentsRow = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetTournment(match.tournamenID));
  }, [match]);

  const tournament = useSelector(state => state.tournaments.tournament);

  const copyMatchID = () => {
    navigator.clipboard.writeText(match._id);
  };

  return (
    <>
      <tr className="colapsingg">
        <td colSpan="12">
          <div className="hk_colapsing pb-3">
            <div className="row">
              <div className="col-md-6 mb-2 col-sm-8 col-12 mb-sm-4 mb-0">
                <div className="d-flex align-items-center flex_column_custom_385">
                  <h3>{tournament && tournament.name}</h3>
                  <h5>{tournament && tournament.location}</h5>
                </div>
              </div>
              <div className="col-md-6 text_right col-sm-4 col-12 mb-4 text_left_custom_385">
                <span class="cross_hide position_initial shedule" style={{right: '-85px'}}>
                  <img src="/assets/img/cut.png" alt="" />
                </span>
                <span className="text_color">
                  <img src="/assets/img/ethurem.png" alt="" />
                  {tournament && tournament.winPrice}
                </span>
              </div>
              <div className="col-md-6 col-sm-12 col-12 table_rules mb-md-0 mb-2 pr-sm-0 pr-0">
                <div class="d-flex align-items-center">
                  <h4>Brawl Rules</h4>
                  <h6>No Hold Barred</h6>
                  <p className="status">
                    {match && (match.state == 'INCOMPLETED' || match.state == 'SENTFORRENDER' || match.state == 'READYFORRENDER' || match.state == 'RENDERED') && <span>SCHEDULED</span>}
                    {match && match.state == 'LIVE' && <span>{match.state}</span>}
                    {match && (match.state == 'ENDED' || match.state == 'COMPLETE') && <span>ENDED</span>}
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12 text-md-right registerd text-left">
                <p>
                  {' '}
                  Registered
                  <span>
                    {' '}
                    {tournament && tournament.players.length}/{tournament && tournament.roundsCount}
                  </span>
                </p>
              </div>
            </div>

            {match ? (
              <>{match && (match.state == 'READYFORRENDER' || match.state == 'SENTFORRENDER' || match.state == 'RENDERED') && <MatchScheduled tournament={tournament} match={match} />}</>
            ) : (
              <div className="title_section pt-4 text-left">
                <h4 className="text-left pl-2 text-white">Tournament will be started at {tournament && new Date(tournament.startDate).toLocaleString()}</h4>
              </div>
            )}
          </div>
        </td>
      </tr>
    </>
  );
};
export default ScheduledTournamentsRow;
