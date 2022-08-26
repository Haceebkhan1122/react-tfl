import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FetchHotSales } from '../../../../actions/hot-sale';

const HotSale = () => {
  //console.log("State = > ",state)
  // const templates = useSelector(state => state.marketPlace.templates)
  // console.log("Templates => ",templates)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchHotSales(0, 20));
  }, []);

  const hotSales = useSelector(state => state.hotSale.hotSales);
  console.log('Hot Sales = > ', hotSales);

  return (
    <div className="row hot_sale">
      <div className="col-md-12 pt-5">
        <div className="title_section pt-4 text-left d-flex align-items-end justify-content-between pb-1 res_475_card_heading row">
          <h1 className="text-left pl-3 col-sm-10 col-12 text-sm-left text-center">Hot SALE</h1>
          <a href="#" className="view_all_flex pb_19_px col-sm-2 col-12 text-sm-right text-center">
            View All
          </a>
        </div>
      </div>
      {hotSales &&
        hotSales.map(ch => (
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
            <Link to={`/market-place/character-details/${ch.id}`}>
              <div className="full_box slider">
                <div className="card_hk">
                  <div className="for_image">
                    <img
                      src={ch.props.mutable.image}
                      alt=""
                      onError={e => {
                        e.target.src = ch.image; // some replacement image
                      }}
                    />
                  </div>
                  <div className="box_main">
                    <div className="content_for first">
                      <h3>{ch.name}</h3>
                      <p>
                        #{ch.gameId}
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        {ch.props.mutable.race}
                        <i className="fa fa-circle" aria-hidden="true"></i>
                        {ch.props.mutable.gender}
                      </p>
                    </div>
                    <hr className="hr_line" />
                    <div className="content_for">
                      <div className="prf">
                        <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                        <h5>Taunt</h5>
                      </div>
                      <span className="price_transform">
                        <img src="/assets/img/ethurem.png" alt="" /> 1800
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}

      {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/viking.png" alt="" />
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for first">
                                                <h3>Viking Sheild</h3>
                                                <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/viking.png" alt="" />
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for first">
                                                <h3>Viking Sheild</h3>
                                                <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                            <Link to="/CharacterDetails">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/viking.png" alt="" />
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for first">
                                                <h3>Viking Sheild</h3>
                                                <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>Micheal John</h5>
                                                </div>
                                                <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 1800</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div> */}
    </div>
  );
};
export default HotSale;
