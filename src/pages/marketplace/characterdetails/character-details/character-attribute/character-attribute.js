import SkillBar from 'react-skillbars';

const CharacterAttribute=()=>{
    var skills = [
        { "type": "Haseeb", "level": 60 },
    ];
    return(
        <div className="char_details_attributes" id="place">
                                    <div className="row">
                                        <div className="col-md-12 p-0 details_char pl-3 pt-5">
                                            <h6>Attributes</h6>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m1.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Magic Resistance</h4>
                                                        <div className="attr_skills">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m4.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Movement Speed</h4>
                                                        <div className="attr_skills blue">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m7.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Attack Speed</h4>
                                                        <div className="attr_skills brown_light">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m2.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Turn Rate</h4>
                                                        <div className="attr_skills brown">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m5.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Vision Range</h4>
                                                        <div className="attr_skills yellow">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m8.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Attack Range</h4>
                                                        <div className="attr_skills">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m3.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Projectile Speed</h4>
                                                        <div className="attr_skills yellow">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m6.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Base Attack Time</h4>
                                                        <div className="attr_skills brown">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="char_attributes">
                                                <div className="d-flex align-items-center">
                                                    <div className="alpha">
                                                        <img src="/assets/img/m9.png" alt="" />
                                                    </div>
                                                    <div className="alpha width_full">
                                                        <h4 className="d-flex skills_char_number">Collision Size</h4>
                                                        <div className="attr_skills brown_light">
                                                            <SkillBar skills={skills} level={100} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="char_parents_card mb-5 px-lg-4">
                                            <div className="col-md-12 p-0 details_char pl-0 pt-5">
                                                <h6>Parents</h6>
                                            </div>
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
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
                                                </div>
                                                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                                                    <div className="full_box slider">
                                                        <div className="card_hk">
                                                            <div className="for_image">
                                                                <img src="/assets/img/girl.png" alt="" />
                                                            </div>
                                                            <div className="box_main">
                                                                <div className="content_for first">
                                                                    <h3>Viking Sheild</h3>
                                                                    <p>#733342 <i className="fa fa-circle" aria-hidden="true"></i> Human <i className="fa fa-circle" aria-hidden="true"></i> Male</p>
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
export default CharacterAttribute