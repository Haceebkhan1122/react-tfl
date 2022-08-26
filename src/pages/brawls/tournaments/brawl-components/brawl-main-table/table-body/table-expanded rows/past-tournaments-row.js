import { Link, useLocation } from "react-router-dom";

const PastTournamentsRow = ({ selectFighter, tournamentStatus }) => {
  return (
    <>
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
      <tr className="colapsingg">
        <td colSpan="6">
          <div className="hk_colapsing pb-3">
            <div className="row">
              <div className="col-6 mb-2">
                <div className="d-flex align-items-center">
                  <h3 className="pt-1">Last Chains</h3>
                  <h5 className="pt-2">California - USA</h5>
                </div>
              </div>
              <div className="col-6 text-right">
                <span className="cross_hide">
                  <img src="/assets/img/cut.png" alt="" />
                </span>
                <span className="text_color">
                  <img src="/assets/img/ethurem.png" alt="" />
                  3000
                </span>
              </div>
              <div className="col-6 table_rules">
                <div className="d-flex align-items-center">
                  <h4>Brawl Rules</h4>
                  <h6>No Hold Barred</h6>
                  <p className="status mr-4">
                    STATUS <span style={{ color: "red" }}>CLOSED </span>
                  </p>
                  <p className="status">
                    STARTED AT{" "}
                    <span style={{ color: "#ccc" }}>18 JAN 2022, 13: 17 </span>
                  </p>
                </div>
              </div>
              <div className="col-6 text-right registerd see_details_table button_for_result_see">
                <p>
                  <div className="for_selectbox hk_hover_for_border mb-0">
                    <button
                      type="button"
                      className="btn btn_bg_hk hk_continue with_borders see_details"
                    >
                      SEE RESULTS
                    </button>
                  </div>
                  <span> BRAWL FINISHED</span>
                </p>
              </div>
            </div>
            <hr className="special_line for_list_result" />
            <div className="tournament_player_data mt-4 result_showing_custom result_resp_tag">
              <div className="text-right registerd see_details_table button_for_result_see">
                <p>
                  <div className="for_selectbox hk_hover_for_border mb-0 full_bracket">
                    <Link to="../bracket">
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
              <div className="row">
                <div className="col-4">
                  <div className="for_centerization mb-3">
                    <div className="result_chain">
                      <h3>1</h3>
                    </div>
                    <div className="result_chain">
                      <span className="round_title text-center d-block">
                        ROUND 1
                      </span>
                      <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                        {" "}
                        <img
                          src="/assets/img/c1.png"
                          alt=""
                          className="result_button_profile"
                        />
                        Thrutlauz <span className="countx">1</span>
                      </a>

                      <div className="looser_main">
                        <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                          {" "}
                          <img
                            src="/assets/img/c2.png"
                            alt=""
                            className="result_button_profile"
                          />{" "}
                          Kusk <span className="countx">0</span>
                        </a>
                      </div>
                    </div>
                    <div className="result_chain">
                      <img
                        src="/assets/img/result_map1.png"
                        className="map1"
                        alt=""
                      />
                    </div>
                    <div className="toggling">
                      <div className="dropdown">
                        <button
                          className="btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i
                              className="fa fa-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Watch
                          </a>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-bar-chart"
                              aria-hidden="true"
                            ></i>{" "}
                            See Status
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="for_centerization for_drop1">
                    <div className="result_chain">
                      <h3>2</h3>
                    </div>
                    <div className="result_chain">
                      <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                        {" "}
                        <img
                          src="/assets/img/c5.png"
                          alt=""
                          className="result_button_profile"
                        />{" "}
                        Cols <span className="countx">1</span>
                      </a>

                      <div className="looser_main">
                        <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                          {" "}
                          <img
                            src="/assets/img/c3.png"
                            alt=""
                            className="result_button_profile"
                          />{" "}
                          Collazig <span className="countx">0</span>
                        </a>
                      </div>
                    </div>
                    <div className="toggling">
                      <div className="dropdown">
                        <button
                          className="btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i
                              className="fa fa-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Watch
                          </a>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-bar-chart"
                              aria-hidden="true"
                            ></i>{" "}
                            See Status
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="for_centerization for_drop2">
                    <div className="result_chain third_gamers">
                      <h3>3</h3>
                    </div>
                    <div className="result_chain mt-4 pt-3 ">
                      <h6>LOSERS MATCHES OF 1 AND 2</h6>
                      <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                        {" "}
                        <img
                          src="/assets/img/c2.png"
                          alt=""
                          className="result_button_profile"
                        />{" "}
                        Kusk <span className="countx">1</span>
                      </a>
                      <div className="looser_main">
                        <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                          {" "}
                          <img
                            src="/assets/img/c4.png"
                            alt=""
                            className="result_button_profile"
                          />{" "}
                          Gaelalaer <span className="countx">0</span>
                        </a>
                      </div>
                    </div>
                    <div className="result_chain">
                      <img
                        src="/assets/img/result_map2.png"
                        alt=""
                        className="map2"
                      />
                    </div>
                    <div className="toggling">
                      <div className="dropdown">
                        <button
                          className="btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i
                              className="fa fa-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Watch
                          </a>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-bar-chart"
                              aria-hidden="true"
                            ></i>{" "}
                            See Status
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 mt-5 pt-3 pl-5">
                  <div className="for_centerization mb-3 pl-3">
                    <div className="result_chain">
                      <h3>4</h3>
                    </div>
                    <div className="result_chain">
                      <span className="round_title text-center d-block">
                        ROUND 2
                      </span>
                      <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                        {" "}
                        <img
                          src="/assets/img/c1.png"
                          alt=""
                          className="result_button_profile"
                        />{" "}
                        Thrutlauz <span className="countx">1</span>
                      </a>
                      <div className="looser_main">
                        <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                          {" "}
                          <img
                            src="/assets/img/c4.png"
                            alt=""
                            className="result_button_profile"
                          />{" "}
                          Gaelalaer <span className="countx">2</span>
                        </a>
                      </div>
                    </div>
                    <div className="result_chain">
                      <img
                        src="/assets/img/result_map1.png"
                        alt=""
                        className="map3"
                      />
                    </div>
                    <div className="toggling">
                      <div className="dropdown">
                        <button
                          className="btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i
                              className="fa fa-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Watch
                          </a>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-bar-chart"
                              aria-hidden="true"
                            ></i>{" "}
                            See Status
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="for_centerization pl-3 for_drop3">
                    <div className="result_chain">
                      <h3>5</h3>
                    </div>
                    <div className="result_chain">
                      <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                        {" "}
                        <img
                          src="/assets/img/c4.png"
                          alt=""
                          className="result_button_profile"
                        />{" "}
                        Gaelalaer <span className="countx">1</span>
                      </a>
                      <div className="looser_main">
                        <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                          {" "}
                          <img
                            src="/assets/img/c4.png"
                            alt=""
                            className="result_button_profile"
                          />{" "}
                          Gaelalaer <span className="countx">2</span>
                        </a>
                      </div>
                    </div>
                    <div className="toggling">
                      <div className="dropdown">
                        <button
                          className="btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i
                              className="fa fa-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Watch
                          </a>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-bar-chart"
                              aria-hidden="true"
                            ></i>{" "}
                            See Status
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 hk_last_two_players">
                  <div className="for_centerization mb-3">
                    <div className="result_chain">
                      <h3>6</h3>
                    </div>
                    <div className="result_chain">
                      <span className="round_title text-center d-block">
                        ROUND 3{" "}
                      </span>
                      <a className="btn btn_bg_hk mt-2 d-flex justify-content-start">
                        {" "}
                        <img
                          src="/assets/img/c4.png"
                          alt=""
                          className="result_button_profile"
                        />{" "}
                        Gaelalaer <span className="countx">1</span>{" "}
                      </a>
                      <div className="looser_main">
                        <a className="btn btn_bg_hk mt-2 looser d-flex justify-content-start">
                          {" "}
                          <img
                            src="/assets/img/c4.png"
                            alt=""
                            className="result_button_profile"
                          />{" "}
                          Gaelalaer <span className="countx">2</span>
                        </a>
                      </div>
                    </div>
                    <div className="toggling">
                      <div className="dropdown">
                        <button
                          className="btn"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            {" "}
                            <i
                              className="fa fa-play"
                              aria-hidden="true"
                            ></i>{" "}
                            Watch
                          </a>
                          <a className="dropdown-item" href="#">
                            <i
                              className="fa fa-bar-chart"
                              aria-hidden="true"
                            ></i>{" "}
                            See Status
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};
export default PastTournamentsRow;
