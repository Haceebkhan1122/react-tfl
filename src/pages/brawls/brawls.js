import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import $, { get } from "jquery";

import BrawlingNow from "./brawls-components/brawling-now/brawling-now";
import BrawlingNext from "./brawls-components/next-to-brawl/brawling-next";
import { FetchNextMatches } from "../../actions/tournament-matches-actions";
import { FetchMatch, GetTournment } from "../../actions/tournament-actions.js";
import "./brawls.js";

function Brawls() {
  const location = useLocation();
  const { tid, matchID } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetTournment(tid));
    dispatch(FetchMatch(matchID));
  }, [tid, matchID]);

  const GetMatch = () => {
    dispatch(FetchMatch(matchID));
  };

  const tournament = useSelector((state) => {
    return state.tournaments.tournament;
  });

  const match = useSelector((state) => state.tournaments.selectedMatch);

  const nextMatches = useSelector((state) => {
    return state.tournaments.nextMatches;
  });

  useEffect(() => {
    if (typeof match?.index !== undefined && typeof match?.index !== null) {
      dispatch(FetchNextMatches(match?.index));
    }
  }, [match]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="top_nft brawls_page pt-5 pb-5">
        <div className="container px-md-0 px-sm-5 px-5 pt-5">
          {tournament && (
            <BrawlingNow
              tournament={tournament}
              match={match}
              getLiveMatch={GetMatch}
            />
          )}
          <BrawlingNext matches={nextMatches} />
        </div>
      </div>
    </>
  );
}

export default Brawls;
