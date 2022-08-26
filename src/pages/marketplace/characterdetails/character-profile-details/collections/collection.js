import { Link } from "react-router-dom";


const Collection = () => {
    return (
        <div className="character_profile_info">
            <div className="row">
                <div className="col-md-12 p-0">
                    <div className="char_details_attributes">
                        <div className="row">
                            <div className="container px-sm-0 px-5">
                                <div className="col-md-12 p-0 details_char pl-2 pt-5">
                                    <h6>Collections</h6>
                                </div>
                            </div>
                            <div className="container px-sm-0 px-5">
                                <div className="col-md-12 pl-2">
                                    <div className="drops_main">
                                        <div className="tournament_drops forchar_prof">
                                            <div className="for_selectbox"><input type="text" placeholder="Search" className="form-control" /></div>
                                        </div>
                                        <div className="tournament_drops">
                                            <div className="for_selectbox">
                                                <select>
                                                    <option>Race</option>
                                                    <option>Rules 1</option>
                                                    <option>Rules 2</option>
                                                    <option>Rules 3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="tournament_drops">
                                            <div className="for_selectbox">
                                                <select>
                                                    <option>Gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="tournament_drops">
                                            <div className="for_selectbox">
                                                <select>
                                                    <option>Sort By</option>
                                                    <option>Ascending </option>
                                                    <option>descending </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container px-sm-0 px-5">
                                <div className="char_parents_card mb-0">

                                    <div className="col-md-12 p-0 details_char pt-4">
                                        <div className="container">
                                            <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">For Sale</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Favourites</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="char_line" />
                            <div className="container px-sm-0 px-5">
                                <div className="tab-content mt-4 px-2" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className="row char_detail_profile_card">
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                        {/* <div className="empty_state_content">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="empty_area">
                                                        <img src="/assets/img/emtpy_uper.png"  alt=""/>
                                                        <h3>You have not purchased any character, you can find out at OpenSea</h3>
                                                        <a className="btn btn_bg_hk mt-1 mr-3">GO TO OPENSEA</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <div className="row char_detail_profile_card">
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                        <div className="row char_detail_profile_card">
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                <Link to="/CharacterDetails2">
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
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

    )
}
export default Collection