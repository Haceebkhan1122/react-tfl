import ConfirmTransaction from "../confirm-transaction/confirm-transaction"


const SelectFighter =()=>{
    return(
        <>
        <div className="modal fade hk_modal_for_select" id="exampleModalLong" tabindex="-1" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                    <div className="modal-content select_fighter select_char">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Select your character</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span className="cross_hides"><img src="/assets/img/cut.png" alt="" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal_content">
                                <div className="tournament_drops mb-4 flex-wrap">
                                    <div className="for_selectbox hk_too_width mb_resp_575">
                                        <input type="text" placeholder="Search" className="form-control" />
                                    </div>
                                    <div className="for_selectbox mb_resp_575">
                                        <select>
                                            <option>Race</option>
                                            <option>Race 1</option>
                                            <option>Race 2</option>
                                            <option>Race 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="table_main">
                                    <div className="card_selection scroll_auto_x res_w_table max_scroll_y547">
                                        <div className="custom_bg for_demo" data-dismiss="modal" aria-label="Close">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>
 
                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom_bg">
                                            <div className="row">
                                                <div className="col-8">
                                                    <div className="card_boxes">
                                                        <div className="profiless"><img src="/assets/img/profile.png" /></div>
                                                        <div className="profiless"><h4>Viking Sheild</h4><p><span>#733342 <i className="fa fa-circle" aria-hidden="true"></i>
                                                        </span><span>Human <i className="fa fa-circle" aria-hidden="true"></i>
                                                            </span><span>Male</span></p></div>
                                                    </div>
                                                </div>

                                                <div className="col-4">
                                                    <div className="card_boxes text-right">
                                                        <div className="profiless w-100 text-right"><h3 className="text-right">3 of 3 left</h3><p><span>Quickening</span></p></div>
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
                  <ConfirmTransaction/>
        </>
    )
}
export default SelectFighter