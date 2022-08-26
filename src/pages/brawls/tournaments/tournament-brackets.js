import {
  Bracket,
  RoundProps,
  Seed,
  SeedItem,
  SeedTeam,
  RenderSeedProps,
} from "react-brackets";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./tournaments.css";

const CustomSeed = ({ seed, breakpoint, roundIndex, seedIndex }) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not

  // mobileBreakpoint is required to be passed down to a seed
  console.log("SEED ", seed);
  const navigate = useNavigate();

  const watchMatchVideo = (tournamentID, matchID) => {
    navigate(`/brawl/play/${tournamentID}/${matchID}`);
  };

  return (
    <Seed>
      <SeedItem>
        <div>
          <div className="for_centerization pl-3 react_bracket">
            <div className="result_chain">
              <h3>{seed.id}</h3>
            </div>
            <div className="result_chain">
              <SeedTeam>
                <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                  {" "}
                  <img
                    src="/assets/img/c1.png"
                    alt=""
                    className="result_button_profile"
                  />
                  {seed.teams[0]?.name || "TBD "}{" "}
                  <span className="countx">1</span>
                </a>
              </SeedTeam>
              {/* <a className="btn btn_bg_hk mt-2 d-flex justify-content-start"> <img src={matches[4] ? matches[4].player2.characterAvatar : ''} alt="" className="result_button_profile" />
                                    {matches[4] ? matches[4].player2.characterName : 'TBD'}
                                    <span className="numbering">4th</span>
                                </a> */}
              <div className="looser_main">
                <SeedTeam>
                  {/* Waiting Participant Button */}
                  {/* <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start waiting_participaters"> <img src="/assets/img/question.png" alt="question-mark" className="ques_mark" /></a> */}
                  <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                    {" "}
                    <img
                      src="/assets/img/c2.png"
                      alt=""
                      className="result_button_profile"
                    />{" "}
                    {seed.teams[1]?.name || "TBD "}{" "}
                    <span className="countx">0</span>
                  </a>
                </SeedTeam>
                {/* <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start"> <img src={matches[4] ? matches[4].player2.characterAvatar : ''} alt="" className="result_button_profile" />
                                    {matches[4] ? matches[4].player2.characterName : 'TBD'}
                                    <span className="numbering">4th</span>
                                </a> */}
              </div>
            </div>
          </div>
          <div className="toggling react_brackett">
            <div className="dropdown">
              <button
                className="btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  onClick={() =>
                    watchMatchVideo(seed.tournamentID, seed.matchID)
                  }
                  className="dropdown-item"
                  href="#"
                >
                  <i class="fa fa-play" aria-hidden="true"></i> Watch
                </a>
                <a className="dropdown-item" href="#">
                  <i class="fa fa-bar-chart" aria-hidden="true"></i> See Status
                </a>
              </div>
            </div>
          </div>
        </div>
      </SeedItem>
    </Seed>
  );
};

const TournamentBrackets = ({ tid, showFullBracketLink, rounds = [] }) => {
  const matches = [
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

  const groupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
      const key = obj[property];
      if (!acc[key]) {
        acc[key] = [];
      }
      // Add object to list for given key's value
      acc[key].push(obj);
      return acc;
    }, {});
  };

  let temp = groupBy(rounds, "level");
  let formatedRounds = [];

  console.log("temp : ", temp);

  Object.keys(temp).map((key) => {
    formatedRounds.push({
      title: "ROUND " + (parseInt(key) + 1),
      seeds: temp[key].map((match) => {
        console.log(`match:${match}`);
        return {
          id: match.index + 1,
          date: new Date(match.startDate).toDateString(),
          teams: [
            { name: match.player1.characterName },
            { name: match.player2.characterName },
          ],
          tournamentID: match.tournamenID,
          matchID: match._id,
        };
      }),
    });
  });

  return (
    <>
      {/* <div className="for_centerization pl-3">
            <div className="result_chain">
                <h3>{matches[4] ? matches[4].index + 1 : 'N/A'}</h3>
            </div>
            <div className="result_chain">
                <a className="btn btn_bg_hk mt-2 d-flex justify-content-start"> <img src={matches[4] ? matches[4].player2.characterAvatar : ''} alt="" className="result_button_profile" />
                    {matches[4] ? matches[4].player1.characterName : 'TBD'}
                </a>
                <div className="looser_main">
                    <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start"> <img src={matches[4] ? matches[4].player2.characterAvatar : ''} alt="" className="result_button_profile" />
                        {matches[4] ? matches[4].player2.characterName : 'TBD'}
                        <span className="numbering">4th</span>
                    </a>
                </div>
            </div>
        </div> */}

      {showFullBracketLink && (
        <div className="text-right registerd see_details_table button_for_result_see">
          <p>
            <div className="for_selectbox hk_hover_for_border mb-0 full_bracket">
              <Link to={`/brawl/bracket/${tid}`}>
                <button
                  type="button"
                  className="btn btn_bg_hk hk_continue with_borders see_details"
                >
                  Full Bracket
                </button>
              </Link>
            </div>
          </p>
        </div>
      )}
      <Bracket rounds={formatedRounds} renderSeedComponent={CustomSeed} />
    </>
  );
};

export default TournamentBrackets;
