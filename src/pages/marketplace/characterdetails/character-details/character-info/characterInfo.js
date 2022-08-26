import CharacterAttribute from "../character-attribute/character-attribute";

import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterInfo = () => {
  const template = useSelector((state) => state.marketPlace.template);
  console.log("Template BCK = > ", template);
  // let temp = Object.assign({},template[0])
  // console.log("temp object - > ",temp )
  // const { charactedDetailId } = useParams();
  // const template = useSelector(state => {
  //     let found = undefined;
  //     state.templates.map(temp => { if (temp.id === charactedDetailId) found = temp; });
  //     return found;
  // });

  return (
    <div className="container px-sm-0 px-5">
      <div className="character_info">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-md-12">
            <div className="char_info left_info">
              <h3>{template ? template.name : ""}</h3>
              <p>#{template ? template.id : ""}</p>
              <ul className="flex-wrap">
                <li>
                  <h4>
                    {template
                      ? template.props.mutable.baseRace.toUpperCase()
                      : ""}
                  </h4>
                  <p>Base Race</p>
                </li>
                <li>
                  <h4>
                    {template ? template.props.mutable.race.toUpperCase() : ""}
                  </h4>
                  <p>Race</p>
                </li>
                <li>
                  <h4>
                    {template
                      ? template.props.mutable.gender.toUpperCase()
                      : ""}
                  </h4>
                  <p>Gender</p>
                </li>
                <li>
                  <h4>
                    {template
                      ? template.totalSupply +
                        " of " +
                        template.cap +
                        " Quickening"
                      : ""}
                  </h4>
                  <p>Quickening</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7 col-md-12">
            <div className="char_info right_info">
              <div className="d-flex align-items-center for_right resp_profiler_name">
                <div className="char_pro_name">
                  <h5>Taunt</h5>
                  <p>Owner</p>
                </div>
                <div className="char_pro_name">
                  <img src="/assets/img/profile.png" alt="" />
                </div>
              </div>
              <div className="d-flex align-items-center for_right res_cha resp_wrap_575 justify-content-sm-right">
                <div className="biding_buy_area">
                  <button className="tc_btn">
                    <img src="/assets/img/ethurem.png" alt="" /> 2300 TC
                  </button>
                </div>
                <div className="biding_buy_area">
                  <div className="for_selectbox hk_hover_for_border">
                    <a
                      className="btn btn_bg_hk"
                      data-toggle="modal"
                      data-target="#exampleModal1"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
                <div className="biding_buy_area">
                  <a
                    className="btn btn_bg_hk selected"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  >
                    Place Bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="char_line" />
          <div className="col-md-12 px-3">
            <div className="details_char">
              <h6>Details</h6>
              <p>
                {template
                  ? template.props.mutable.description.toUpperCase()
                  : ""}
              </p>
            </div>
            <div className="detail_profile">
              <div className="char_pro_name">
                <img src="/assets/img/profile.png" alt="" />
              </div>
              <div className="char_pro_name">
                <h5>Micheal John</h5>
                <p>Creator</p>
              </div>
            </div>
            <CharacterAttribute />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterInfo;
