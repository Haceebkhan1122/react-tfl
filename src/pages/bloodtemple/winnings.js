import { Link } from "react-router-dom";
const Winnings = () => {
  return (
    <div
      className="tab-pane fade"
      id="pills-winnings"
      role="tabpanel"
      aria-labelledby="pills-winnings-tab"
    >
      <div className="row mb-5">
        <div className="col-md-8 pl-2">
          <div className="drops_main">
            <div className="tournament_drops">
              <div className="for_selectbox">
                <select>
                  <option>This Month</option>
                  <option>Previous Month</option>
                  <option>6 Month Ago</option>
                  <option>1 Year Ago</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="trohpy_icon">
            <div className="trohpy_flex">
              <img
                src="/assets/img/trophy.png"
                alt="trophy"
                className="trophi"
              />
            </div>
            <div className="trohpy_flex">
              <h4>TOTAL WON</h4>
              <span className="text_color">
                <img src="/assets/img/ethurem.png" alt="" />
                1500
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 pb-5 px-0">
        <div className="table_main scroll_table_tournament">
          <div className="scroll_inner_tournament fix_table_h_listing hk_scroll_none">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Position</th>
                  <th scope="col" colspan="2">
                    Fighter
                  </th>
                  <th scope="col" colspan="2">
                    Tournament
                  </th>
                  <th scope="col" colspan="2">
                    Prize Won
                  </th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
                <tr className="onclicking">
                  <td>1st</td>
                  <td>
                    <span className="profile" colspan="2">
                      <img src="/assets/img/table_char2.png" />
                    </span>
                    <span className="user_name">Vking Sheild</span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    The Real Bout
                  </td>
                  <td className="live_brawl" colspan="2">
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      1500
                    </span>
                  </td>
                  <td className="live_brawl" colspan="2">
                    01 Mar 2022, 18:02
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Winnings;
