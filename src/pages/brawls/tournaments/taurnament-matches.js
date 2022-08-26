import Switch from "react-switch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TableHeadTournamentMatches from "../brawl-result-components/brawl-table-head/table-head-tournament-matches";
import TableBodyTournamentMatches from "./brawl-components/brawl-main-table/table-body/table-body-toutnament-matches";
import { FetchTournamentMatches } from "../../../actions/tournament-matches-actions";
import { GetTournment } from "../../../actions/tournament-actions";

import "./tournaments.css";

const TournamentMatches = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.tournamentMatches.matches);
  const { id } = useParams();

  const handleChange = (checked) => {
    setChecked(checked);
  };

  useEffect(() => {
    dispatch(FetchTournamentMatches(id, 1, 10));
  }, [id]);

  return (
    <div className="main_wrapper">
      <div className="top_nft pt-5">
        <div className="container resp_container_w">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="title_section pt-4">
                <h1>Brawls Matches</h1>
              </div>
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
                      <select>
                        <option>Sort By</option>
                        <option>Ascending </option>
                        <option>Descending </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end">
                <label className="hk_switch hk_with_tab">
                  <Switch
                    onChange={handleChange}
                    checked={checked}
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
            </div>
            <div className="tab-content col-xl-12" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="open-tournaments"
                role="tabpanel"
                aria-labelledby="open-tab"
              >
                <div className="col-md-12 pb-5 px-0">
                  <div className="table_main scroll_table_tournament">
                    <div className="scroll_inner_tournament fix_table_h_listing">
                      <table className="table">
                        <TableHeadTournamentMatches />
                        <TableBodyTournamentMatches matches={matches} />
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentMatches;
