import React, { useEffect } from "react";
import "../characterdetails/character-details.css";
import SkillBar from "react-skillbars";
import $ from "jquery";
import { Link } from "react-router-dom";

function CharacterDetails2() {
  useEffect(() => {
    $(function () {
      var hasBeenTrigged = false;
      $(window).scroll(function () {
        if ($(this).scrollTop() >= 1100 && !hasBeenTrigged) {
          // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
          $(".skillbar-percent").each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate(
              { Counter: $this.text() },
              {
                duration: 4000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                },
              }
            );
          });
          hasBeenTrigged = true;
        }
      });
    });

    $("tr.onclicking").click(function () {
      $("tr.colapsingg").show(600);
      $("tr.onclicking").hide("fast");
    });
    $("span.cross_hide").click(function () {
      $("tr.colapsingg").hide(300);
      $("tr.onclicking").show(200);
    });

    $(".modal-content.confirm_seletion").show();

    $("button.btn_bg_hk.go_marketplace").click(function () {
      $(".modal-open").css("overflow", "overlay");
      $(".modal-backdrop.fade.show").css("display", "none");
    });
  }, []);

  const skills = [{ type: "", level: 40 }];

  return (
    <>
      <div className="top_nft pt-5 character_details character_details2">
        <div className="chara_bg">
          <div className="container">
            <div className="row">
              <div className="character_profile">
                <div className="char_image">
                  <img src="/assets/img/char_girl.png" alt="" />
                </div>
                <div className="share_wishlist_main">
                  <a href="#">
                    {" "}
                    <img src="/assets/img/Shape@2x.png" alt="" />
                  </a>
                  <a href="#">
                    {" "}
                    <img src="/assets/img/Vector@2x.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="character_info">
            <div className="row">
              <div className="col-md-6">
                <div className="char_info left_info">
                  <h3>Elven Legionnaire</h3>
                  <p>#733342</p>
                  <ul className="flex-wrap">
                    <li>
                      <h4>Human</h4>
                      <p>Base Race</p>
                    </li>
                    <li>
                      <h4>Humeek</h4>
                      <p>Race</p>
                    </li>
                    <li>
                      <h4>Female</h4>
                      <p>Gender</p>
                    </li>
                    <li>
                      <h4>3 of 3 left</h4>
                      <p>Quickening</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="char_info right_info">
                  <div className="d-flex align-items-center for_right">
                    <div className="char_pro_name">
                      <h5>Micheal John</h5>
                      <p>Owner</p>
                    </div>
                    <div className="char_pro_name">
                      <img src="/assets/img/profile.png" alt="" />
                    </div>
                  </div>
                  <div className="d-flex align-items-center for_right flex-wrap j_sp_around_resp">
                    <div className="biding_buy_area">
                      <div className="for_selectbox hk_hover_for_border">
                        <a className="btn btn_bg_hk">Quickening</a>
                      </div>
                    </div>
                    <div className="biding_buy_area">
                      <a
                        className="btn btn_bg_hk selected"
                        data-toggle="modal"
                        data-target="#exampleModalLong"
                      >
                        Place on market
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="char_line" />
              <div className="col-md-12">
                <div className="details_char">
                  <h6>Details</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore
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
                <div className="char_details_attributes">
                  <div className="row">
                    <div className="col-md-12 details_char pl-3 pt-5">
                      <h6>Attributes</h6>
                    </div>
                    <div className="col-md-6">
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m1.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Magic Resistance
                            </h4>
                            <div className="attr_skills">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m4.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Movement Speed
                            </h4>
                            <div className="attr_skills blue">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m7.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Attack Speed
                            </h4>
                            <div className="attr_skills brown_light">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m2.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Turn Rate
                            </h4>
                            <div className="attr_skills brown">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m5.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Vision Range
                            </h4>
                            <div className="attr_skills yellow">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m8.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Attack Range
                            </h4>
                            <div className="attr_skills">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m3.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Projectile Speed
                            </h4>
                            <div className="attr_skills yellow">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m6.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Base Attack Time
                            </h4>
                            <div className="attr_skills brown">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="char_attributes">
                        <div className="d-flex">
                          <div className="alpha">
                            <img src="/assets/img/m9.png" alt="" />
                          </div>
                          <div className="alpha width_full">
                            <h4 className="d-flex skills_char_number">
                              Collision Size
                            </h4>
                            <div className="attr_skills brown_light">
                              <SkillBar skills={skills} level={100} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="char_parents_card mb-5 px-md-3 px-sm-0 px-3">
                      <div className="col-md-12 details_char pl-3 pt-5">
                        <h6>Parents</h6>
                      </div>
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                          <div className="full_box slider">
                            <div className="card_hk">
                              <div className="for_image resp_char_detail">
                                <img src="/assets/img/viking.png" alt="" />
                              </div>
                              <div className="box_main">
                                <div className="content_for first">
                                  <h3>Viking Sheild</h3>
                                  <p>
                                    #733342{" "}
                                    <i
                                      className="fa fa-circle"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Human{" "}
                                    <i
                                      className="fa fa-circle"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Male
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                          <div className="full_box slider">
                            <div className="card_hk">
                              <div className="for_image resp_char_detail">
                                <img src="/assets/img/girl.png" alt="" />
                              </div>
                              <div className="box_main">
                                <div className="content_for first">
                                  <h3>Viking Sheild</h3>
                                  <p>
                                    #733342{" "}
                                    <i
                                      className="fa fa-circle"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Human{" "}
                                    <i
                                      className="fa fa-circle"
                                      aria-hidden="true"
                                    ></i>{" "}
                                    Male
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade hk_modal_for_select"
        id="exampleModalLong"
        tabindex="-1"
        data-backdrop="static"
        data-keyboard="false"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content confirm_seletion place_a_bid">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Place an Market
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
                <div className="table_main select_abilites bough_fight_main placing_bid">
                  <div className="card_selection">
                    <div className="top_part">
                      <img
                        src="/assets/img/place_bid.png"
                        className="bid_person"
                        alt=""
                      />
                    </div>
                    <div className="row ml-1 mr-1">
                      <div className="col-md-12 char2_page">
                        <div className="tournament_drops">
                          <div className="for_selectbox">
                            <select>
                              <option>For Quickening</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                            </select>
                          </div>
                          <div className="invalid-feedback text-left d-block">
                            Invalid Set Price
                          </div>
                        </div>
                        <div className="tournament_drops">
                          <div className="for_selectbox">
                            <input
                              type="number"
                              placeholder="Set Price"
                              className="form-control"
                            />
                          </div>
                          <div className="invalid-feedback text-left d-block">
                            Invalid Set Price
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="select_abilites modal-footer priceinfo">
              <div className="for_selectbox hk_hover_for_border">
                <button
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn btn_bg_hk hk_continue with_borders"
                >
                  Cancel
                </button>
              </div>
              <Link to="/CharacterProfileDetails">
                <button
                  type="button"
                  className="btn btn_bg_hk hk_continue go_marketplace"
                >
                  {/* <span className="btn_loader_overlay">
                                    <span className="btn_loader"></span>
                                </span> */}
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CharacterDetails2;
