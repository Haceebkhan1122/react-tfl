
const CharacterProfile =()=>{
    return(
        <div className="profile_content_bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
                                <div className="profile_content_profile pl-2">
                                    <div className="profile_flex">
                                        <div className="profile_flex_inner">
                                            <img src="/assets/img/profile.png" alt="" />
                                        </div>
                                        <div className="profile_flex_inner resp_text">
                                            <h3>Goerge Hudson</h3>
                                            <p>0xe4d36ba823334a815f331bba0f42d4fac100d970 <span><i className="fa fa-clone" aria-hidden="true"></i></span></p>
                                        </div>
                                    </div>
                                    <div className="profile_numbers resp_profile_numbers flex-md-nowrap flex-wrap">
                                        <h4>250 <span>Characters</span></h4>
                                        <h4>75 <span>Bread</span></h4>
                                        <h4>100 W - 75 L <span>Brawls</span></h4>
                                        <h4>57.14% <span>Win Rate</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12">
                                <div className="profile_flex prof_right pt-3">
                                    <a href="#"><span><i className="fa fa-cog" aria-hidden="true"></i> Settings</span></a>
                              </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default CharacterProfile