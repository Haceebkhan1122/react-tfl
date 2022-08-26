import { useState } from 'react';
import { useSelector } from 'react-redux';
import FinishedBrawlExpandedRow from './table-expanded rows/finished-brawls-expanded';
import LiveBrawlExpandedRow from './table-expanded rows/live-brawls-expanded';
import ScheduledTournamentsRow from './table-expanded rows/scheduled-tournament';

const TableBodyTournamentMatches = props => {
  const { forCurrentBrawls } = props;
  const [selectedMatch, SetSelectedMatch] = useState(null);

  const matches = useSelector(state => state.tournamentMatches.matches);
  const currentBrawls = useSelector(state => state.tournamentMatches.currentBrawls);

  const GotToDetails = (tid, match) => {
    SetSelectedMatch(match);
  };

  const unselectMatch = () => {
    SetSelectedMatch(null);
  };

  return (
    <tbody>
      {(forCurrentBrawls ? currentBrawls : matches).map(match => {
        return (
          <>
            <tr className="onclicking" onClick={() => GotToDetails(match.tournamenID, match)}>
              <td>{match?.tournamentName || 'NA'}</td>
              <td>{typeof match?.level === 'string' ? match?.level : `Level ${match?.level + 1}`}</td>
              {match?.player1 ? <td>{`${match?.player1.playerName} [${match?.player1.characterName}]`}</td> : <td>TBD</td>}
              {match?.player2 ? <td>{`${match?.player2.playerName} [${match?.player2.characterName}]`}</td> : <td>TBD</td>}
              {(match?.state === 'READYFORRENDER' || match?.state === 'INCOMPLETED' || match?.state === 'SENTFORRENDER') && (
                <>
                  <td>SCHEDULED</td>
                </>
              )}
              {match?.state === 'RENDERED' && (
                <>
                  <td>SCHEDULED</td>
                </>
              )}
              {match?.state === 'LIVE' && (
                <>
                  <td>LIVE</td>
                </>
              )}
              {match?.state === 'ENDED' && (
                <>
                  <td>ENDED</td>
                </>
              )}
              {match?.startDate ? <td>{new Date(match?.startDate).toLocaleString()}</td> : <td>N/A</td>}
              {match?.state === 'LIVE' ? (
                <td className="live_brawl">
                  <span className="live_match_tag">
                    <i className="fa fa-circle" aria-hidden="true"></i> Live
                  </span>
                </td>
              ) : (
                <td></td>
              )}
            </tr>

            {selectedMatch && (match.state === 'READYFORRENDER' || match.state === 'SENTFORRENDER' || match.state === 'RENDERED') && selectedMatch._id === match._id && (
              <ScheduledTournamentsRow unselectMatch={unselectMatch} match={match} />
            )}

            {selectedMatch && selectedMatch.state === 'LIVE' && selectedMatch._id === match._id && <LiveBrawlExpandedRow unselectMatch={unselectMatch} match={match} />}

            {selectedMatch && selectedMatch.state === 'ENDED' && selectedMatch._id === match._id && <FinishedBrawlExpandedRow unselectMatch={unselectMatch} match={match} />}
          </>
        );
      })}
    </tbody>
  );
};

export default TableBodyTournamentMatches;
