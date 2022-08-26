import React, { useEffect, useState } from 'react';
import './bloodTemple.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TemplateAttribute from './template-attribute';
import { FetchTemplateByID } from '../../actions/product-actions';

function BloodCharacterDetails() {
  const location = useLocation();
  const { id } = useParams();

  const [moveSetRow1, setMoveSetRow1] = useState([]);
  const [moveSetRow2, setMoveSetRow2] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location]);

  const selectedTemplate = useSelector(state => state.products.selectedTemplate);

  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (selectedTemplate) {
      setMoveSetRow1(selectedTemplate.moveSet.slice(0, Math.floor(selectedTemplate.moveSet.length / 2) - 1));
      setMoveSetRow2(selectedTemplate.moveSet.slice(Math.floor(selectedTemplate.moveSet.length / 2), selectedTemplate.moveSet.length - 1));
    }
  }, [selectedTemplate]);

  useEffect(() => {
    dispatch(FetchTemplateByID(id));
  }, []);

  return (
    <>
      <div className="top_nft pt-5 character_details character_details2">
        <div className="chara_bg">
          <div className="container">
            <div className="row">
              <div className="character_profile">
                <div className="char_image">
                  <img src={selectedTemplate?.image} alt="" />
                </div>
                <div className="share_wishlist_main">
                  <a href="#">
                    <img src="/assets/img/Shape@2x.png" alt="" />
                  </a>
                  <a href="#">
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
                  <h3>{selectedTemplate?.name}</h3>
                  <p>#733342</p>
                  <ul className="flex-wrap">
                    <li>
                      <h4>{selectedTemplate?.baseRace}</h4>
                      <p>Base Race</p>
                    </li>
                    <li>
                      <h4>{selectedTemplate?.race}</h4>
                      <p>Race</p>
                    </li>
                    <li>
                      <h4>{selectedTemplate?.gender}</h4>
                      <p>Gender</p>
                    </li>
                    {/* <li>
                      <h4>3 of 3 left</h4>
                      <p>Quickening</p>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="char_info right_info">
                  <div className="d-flex align-items-center for_right">
                    <div className="char_pro_name">
                      <h5>{user?.username}</h5>
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
                      <a className="btn btn_bg_hk selected" data-toggle="modal" data-target="#exampleModalLong">
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
                  <p>{selectedTemplate?.description}</p>
                </div>
                <div className="detail_profile">
                  <div className="char_pro_name">
                    <img src="/assets/img/profile.png" alt="" />
                  </div>
                  <div className="char_pro_name">
                    <h5>{user?.username}</h5>
                    <p>Creator</p>
                  </div>
                </div>
                <div className="char_details_attributes">
                  <div className="row">
                    <div className="col-md-12 details_char pl-3 pt-5">
                      <h6>Attributes</h6>
                    </div>

                    <div className="col-md-6">
                      {moveSetRow1?.map(moveSet => (
                        <TemplateAttribute key={moveSet.shortCode} moveSet={moveSet} />
                      ))}
                    </div>

                    <div className="col-md-6">
                      {moveSetRow2?.map(moveSet => (
                        <TemplateAttribute key={moveSet.shortCode} moveSet={moveSet} />
                      ))}
                    </div>

                    {/* <div className="char_parents_card mb-5 px-md-3 px-sm-0 px-3">
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
                                    #733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male
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
                                    #733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content confirm_seletion place_a_bid">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Place an Market
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
                      <img src="/assets/img/place_bid.png" className="bid_person" alt="" />
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
                          <div className="invalid-feedback text-left d-block">Invalid Set Price</div>
                        </div>
                        <div className="tournament_drops">
                          <div className="for_selectbox">
                            <input type="number" placeholder="Set Price" className="form-control" />
                          </div>
                          <div className="invalid-feedback text-left d-block">Invalid Set Price</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="select_abilites modal-footer priceinfo">
              <div className="for_selectbox hk_hover_for_border">
                <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">
                  Cancel
                </button>
              </div>
              <Link to="/CharacterProfileDetails">
                <button type="button" className="btn btn_bg_hk hk_continue go_marketplace">
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

export default BloodCharacterDetails;
