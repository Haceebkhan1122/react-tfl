import { useState } from "react";
import ConfirmAbilites from "./confirm-abailites/confirm-abilites";
import ConfirmTransations from "./confirm-transaction/confirm-transation";

import React from "react";

const SelectFigher = () => {
  //  const [chooseFighter, setChooseFighter] = useState(true)

  // console.log("selectChooseAbilites", selectChooseAbilites)

  return (
    <>
      {/* <div className="modal-content select_fighter">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                        Select your fighter
                    </h5>
                    <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span className="cross_hides">
                            <img src="/assets/img/cut.png" alt="" />
                        </span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="modal_content">
                        <div className="tournament_drops mb-4 flex-wrap mb_res_cust ">
                            <div className="for_selectbox hk_too_width mb_resp_575">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="form-control"
                                />
                            </div>
                            <div className="for_selectbox">
                                <select>
                                    <option>Race</option>
                                    <option>Humans</option>
                                    <option>Scales</option>
                                    <option>Squids</option>
                                    <option>Undead</option>
                                    <option>White Hair</option>
                                </select>
                            </div>
                        </div>
                        <div className="table_main exampleModal_resp">
                            <div className="card_selection scroll_list_310">
                                <div className="custom_bg">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5 col-5">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <img src="/assets/img/c5.png" />
                                                </div>
                                                <div className="profiless">
                                                    <h4>Cols</h4>
                                                    <p>
                                                        <span>
                                                            #73399{" "}
                                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span>
                                                        <span> Undead </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-4">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <h3> 35 W - 78 L</h3>
                                                    <p>
                                                        <span>Brawls</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-3">
                                            <div className="card_boxes">
                                                <a className="btn btn_bg_hk select_boots_page">
                                                    Select
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom_bg">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5 col-5">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <img src="/assets/img/c2.png" />
                                                </div>
                                                <div className="profiless">
                                                    <h4>Kusk</h4>
                                                    <p>
                                                        <span>
                                                            #733555{" "}
                                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span>
                                                        <span>Scales</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-4">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <h3> 50 W - 67 L</h3>
                                                    <p>
                                                        <span>Brawls</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-3">
                                            <div className="card_boxes">
                                                <a className="btn btn_bg_hk select_boots_page">
                                                    Select
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom_bg">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5 col-5">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <img src="/assets/img/c3.png" />
                                                </div>
                                                <div className="profiless">
                                                    <h4>Collazig</h4>
                                                    <p>
                                                        <span>
                                                            #733399{" "}
                                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span>
                                                        <span>Squids</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-4">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <h3> 30 W - 77 L</h3>
                                                    <p>
                                                        <span>Brawls</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-3">
                                            <div className="card_boxes">
                                                <a className="btn btn_bg_hk select_boots_page">
                                                    Select
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="custom_bg">
                                    <div className="row">
                                        <div className="col-md-5 col-sm-5 col-5">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <img src="/assets/img/c1.png" />
                                                </div>
                                                <div className="profiless">
                                                    <h4>Thrutlauz</h4>
                                                    <p>
                                                        <span>
                                                            #73345{" "}
                                                            <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span>
                                                        <span> Scales</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-4">
                                            <div className="card_boxes">
                                                <div className="profiless">
                                                    <h3> 100 W - 75 L</h3>
                                                    <p>
                                                        <span>Brawls</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-3">
                                            <div className="card_boxes">
                                                <a className="btn btn_bg_hk select_boots_page">
                                                    Select
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      {/* {selectChooseAbilites && <SelectAbilites /> } */}
      {/* <ConfirmAbilites />
             <ConfirmTransations /> */}
    </>
  );
};
export default SelectFigher;
