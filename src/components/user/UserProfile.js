import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProfile } from '../../actions/auth-actions';
import Switch from 'react-switch';
import './userProfile.css';
import ImageUpload from 'image-upload-react';

function UserProfile({ handleSignUpDialogClose }) {
  const user = useSelector(state => state.auth.user);
  const error = useSelector(state => state.auth.error);

  const [checked, setChecked] = useState(false);
  const [imageSrc, setImageSrc] = useState();
  const [emailVerify, setEmailVerify] = useState(false);
  const [email, setEmail] = useState(user?.email || '');
  const [username, setUsername] = useState(user?.username || '');

  const dispatch = useDispatch();

  const onUpdateProfile = async () => {
    dispatch(UpdateProfile(username, email));
  };

  const handleChange = checked => {
    setChecked(checked);
  };

  const handleImageSelect = e => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="main_wrapper">
      <div className="top_nft pt-5">
        <div className="container resp_container_w">
          <div className="row">
            <div className="col-md-12 pt-5">
              <div className="title_section pt-4">
                <h1 className="text-left pl-2">Setting</h1>
              </div>
            </div>
            <div className="col-md-12">
              <div className="setting_area">
                <h3>Settings</h3>
                <div className="profile_picture">
                  <ImageUpload handleImageSelect={handleImageSelect} imageSrc={imageSrc} setImageSrc={setImageSrc} />
                </div>

                <form className="form-row">
                  <div className="row w-100">
                    <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-6">
                      <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                        <input value={username} onChange={e => setUsername(e.target.value)} type="text" placeholder="Enter Username" className="form-control" />
                      </div>
                    </div>
                    <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-6">
                      <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                        <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Enter Email" className="form-control" />
                      </div>
                      {error && <div className="text-danger">{error}</div>}
                    </div>
                    <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-6">
                      <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                        <input type="text" placeholder="Your Discord" className="form-control" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <div className="setting_area noti_area">
                <h3>Notifications</h3>
                <label className="hk_switch">
                  <Switch
                    onChange={handleChange}
                    checked={checked}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    width={40}
                    height={12}
                    onColor="#3f347b"
                    offColor="#ccc"
                    boxShadow={false}
                    activeBoxShadow={false}
                  />
                </label>
              </div>

              <div className="save_btn_control">
                <button onClick={onUpdateProfile} disabled={!(email && username)} className="btn btn_bg_hk mt-1 mr-3">
                  SAVE
                </button>
              </div>

              {emailVerify && (
                <div className="save_btn_control verify">
                  <a className="btn btn_bg_hk mt-1 mr-3" data-toggle="modal" data-target=".bd-example-modal-lg2">
                    Verify Email
                  </a>
                </div>
              )}
            </div>
          </div>
          <div
            className="modal fade hk_modal_for_select bd-example-modal-lg2"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
              <div className="modal-content quickening_loader otp_verification">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    OTP Verification
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={e => {
                      handleSignUpDialogClose();
                    }}
                  >
                    <span className="cross_hides">
                      <img src="/assets/img/cut.png" alt="" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal_content">
                    <div className="table_main select_abilites">
                      <div className="card_selection">
                        <form className="form-row">
                          <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                            <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                              <input type="number" className="form-control" />
                            </div>
                            <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                              <input type="number" className="form-control" />
                            </div>
                            <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                              <input type="number" className="form-control" />
                            </div>
                            <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                              <input type="number" className="form-control" />
                            </div>
                          </div>
                          <p>Please enter the verification code that we have sent you via email</p>
                          <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                            <button type="button" className="btn w-100 btn_bg_hk hk_continue quickening_continue">
                              SUBMIT
                            </button>
                          </div>
                          <div className="resend_code">
                            <span className="success_text_meta_mask">RESEND CODE</span>
                            <span>In 00:38</span>
                          </div>
                        </form>
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
  );
}

export default UserProfile;
