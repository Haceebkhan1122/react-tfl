
import { Link } from "react-router-dom";

const QuickeningMyCollection=()=>{
    return(
        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <Link to="/choose-fighter">
                                                            <div className="full_box slider">
                                                                <div className="card_hk">
                                                                    <div className="for_image">
                                                                        <img src="/assets/img/sword.png" alt="" />
                                                                        <div className="on_hover">
                                                                            <button className="btn btn-primary purchasing">19h 53m left</button>
                                                                            <div className="botton_hover">
                                                                                <button className="btn btn-primary place_bid">Breed</button>
                                                                                <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box_main">
                                                                        <div className="content_for first">
                                                                            <h3>Sword Master</h3>
                                                                            <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male <span>3 of 3 Remaining</span></p>
                                                                        </div>
                                                                        <hr className="hr_line" />
                                                                        <div className="content_for">
                                                                            <div className="prf">
                                                                                <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                                                <h5>Micheal John</h5>
                                                                            </div>
                                                                            <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 2000</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <Link to="/choose-fighter">
                                                            <div className="full_box slider">
                                                                <div className="card_hk">
                                                                    <div className="for_image">
                                                                        <img src="/assets/img/sword.png" alt="" />
                                                                        <div className="on_hover">
                                                                            <button className="btn btn-primary purchasing">19h 53m left</button>
                                                                            <div className="botton_hover">
                                                                                <button className="btn btn-primary place_bid">Breed</button>
                                                                                <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box_main">
                                                                        <div className="content_for first">
                                                                            <h3>Sword Master</h3>
                                                                            <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male <span>3 of 3 Remaining</span></p>
                                                                        </div>
                                                                        <hr className="hr_line" />
                                                                        <div className="content_for">
                                                                            <div className="prf">
                                                                                <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                                                <h5>Micheal John</h5>
                                                                            </div>
                                                                            <span className="price_transform"><img src="/assets/img/ethurem.png" alt="" /> 2000</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
    )
}
export default QuickeningMyCollection