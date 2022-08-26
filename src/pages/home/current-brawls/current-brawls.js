import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCurrentBrawls } from '../../../actions/tournament-matches-actions';
import TableHeadTournamentMatches from '../../brawls/brawl-result-components/brawl-table-head/table-head-tournament-matches';
import TableBodyTournamentMatches from '../../brawls/tournaments/brawl-components/brawl-main-table/table-body/table-body-toutnament-matches';
const CurrentBrawls = () => {
  const [sort, setSort] = useState(-1);
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.tournamentMatches.isLoading);

  useEffect(() => {
    dispatch(GetCurrentBrawls());
  }, []);

  useEffect(() => {
    if (sort === 1) {
      console.log('1');
      dispatch({ type: 'CURRENT-BRAWLS-ASC' });
    } else {
      dispatch({ type: 'CURRENT-BRAWLS-DESC' });
    }
  }, [sort]);

  return (
    <div className="top_nft home_nft">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title_section res_font_watch">
              <h1>Current Brawls</h1>
            </div>
          </div>
          <div className="col-md-12 d-flex justify-content-center">
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
                      setSort(Number(e.target.value));
                    }}
                    value={sort}
                  >
                    <option disabled>Sort By</option>
                    <option value={1}>Ascending </option>
                    <option value={-1}>Descending </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="col-md-12 px-0">
              <div className="table_main scroll_table_tournament">
                <div className="fix_table_h_listing">
                  <div className="scroll_inner_tournament">
                    <table className="table">
                      <>
                        <TableHeadTournamentMatches />
                        <TableBodyTournamentMatches forCurrentBrawls={true} />
                      </>
                    </table>

                    <div className={`three col table_data_loader ${!isLoading && 'd-none'}`}>
                      <div className="loader2" id="loader-6">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                  {/* <Link className="btn btn_bg_hk position-relative" to="/brawl">
                    See More
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentBrawls;
