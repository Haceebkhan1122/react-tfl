import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FetchAllTournamentMatches } from "../../actions/tournament-matches-actions";
import "./brawls.css";
import TournamentBrackets from "./tournaments/tournament-brackets";

function FullBracket() {
  const { tid } = useParams();
  const [column, setColumn] = useState(true);
  const dispatch = useDispatch();

  const matches = useSelector((state) => {
    return state.tournamentMatches.matches;
  });

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
    // console.log(tournament.tournament._id);
    dispatch(FetchAllTournamentMatches(tid));
  }, []);

  return (
    <div className="top_nft pt-5 character_details chara_profile_details bracket_page">
      <div className="profile_content_bg">
        <div className="container">
          <div className="row">
            {matches && matches.length > 0 && (
              <TournamentBrackets
                tid={tid}
                rounds={matches}
                showFullBracketLink={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBracket;
