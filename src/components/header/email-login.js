import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import $, { data } from 'jquery';

import { EmailLogin } from '../../actions/auth-actions';
import validator from 'validator';
import Loader from '../loader';

let FIRST_RENDER = true;

const EmailLoginComponent = ({ openModal, close, setShowMetaForm, setShowForgotPassword }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const loginSelector = useSelector(state => {
    if (state.auth.user && openModal) {
      setEmail('');
      setPassword('');
      $('#closeModal').trigger('click');
    }
    return state.auth;
  });

  function showForget() {
    setShowForgotPassword(true);
    setEmail('');
    setPassword('');
    // $('#closeModal').trigger('click');
  }

  const onChangeEmail = e => {
    dispatch({ type: 'REMOVE-STATE' });
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = e => {
    dispatch({ type: 'REMOVE-STATE' });
    const password = e.target.value;
    setPassword(password);
  };

  function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }

  const emailValidater = email => {
    if (!email) {
      setEmailError('email required');
      return false;
    } else if (!validator.isEmail(email)) {
      setEmailError(`invalid email.`);
      return false;
    }
    return true;
  };

  const passwordValidator = password => {
    if (!password) {
      setPasswordError('password required');
      return false;
    }
    let checkSpace = hasWhiteSpace(password);
    if (checkSpace) {
      setPasswordError('white spaces not allowed');
      return false;
    }
    return true;
  };

  const loginHandler = e => {
    e.preventDefault();
    const emailValidate = emailValidater(email);
    if (emailValidate) {
      setEmailError('');
      const passwordValidate = passwordValidator(password);
      if (passwordValidate) {
        setPasswordError('');
        dispatch(EmailLogin(email, password));
      }
    }
  };

  return (
    <div className="for_whole_modal_login">
      <div className="modal-content quickening_loader login_first_form" data-target="#myModal" data-toggle="modal" data-backdrop="static" data-keyboard="false">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Connect With
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={close}>
            <span className="cross_hides">
              <img src="/assets/img/cut.png" alt="" />
            </span>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal_content">
            <div className="table_main select_abilites">
              <div className="card_selection">
                <div className="row ml-1 mr-1 loeaderss">
                  <img src="/assets/img/envelop2x.png" alt="" />
                  <h5 className="modal-title mt-3" id="exampleModalLabel">
                    Email
                  </h5>
                </div>
                <form className="form-row">
                  <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                    <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                      <input type="text" placeholder="Enter your email" className="form-control" value={email} onChange={onChangeEmail} />
                    </div>
                    {emailError && (
                      <div className="form-group .mt-0">
                        <div className="text-danger" role="alert">
                          {emailError}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                    <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0 for_forget_padding">
                      <input type="password" placeholder="Enter password" className="padding-wrap form-control" value={password} onChange={onChangePassword} />
                      <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 d-block hk_special">
                        <div className="w-100">
                          <button
                            type="button"
                            className="w-100 d-flex align-items-center justify-content-center bg-transparent border-0 connect_meta_btn_first"
                            onClick={() => {
                              showForget();
                            }}
                          >
                            <span className="success_text_meta_mask">Forgot</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {passwordError && (
                      <div className="form-group .mt-0">
                        <div className="text-danger" role="alert">
                          {passwordError}
                        </div>
                      </div>
                    )}
                  </div>
                  {loginSelector.error && loginSelector.error.data && (
                    <div className="form-group">
                      <div className="text-danger" role="alert">
                        {loginSelector.error.data.msg}
                        {/* invalid credenticals */}
                      </div>
                    </div>
                  )}
                  <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                    {/* <Link to="/CharacterProfileDetails" className="w-100"> */}
                    <button type="submit" id="loginBtn" data-backdrop="static" data-keyboard="false" className="btn w-100 btn_bg_hk hk_continue quickening_continue" onClick={loginHandler}>
                      LOGIN
                    </button>
                    <button type="button" id="closeModal" className="close" data-dismiss="modal" aria-label="Close"></button>
                    {/* </Link> */}
                  </div>

                  {/* <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                                    <div className="sign_up_border hk_hover_for_border w-100">
                                        <button type="button" id='signnup' className="" onClick={signUpModal}>SIGN UP</button>
                                    </div>
                                    </div> */}
                  <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 d-block">
                    <div className="w-100">
                      <button
                        type="button"
                        className="w-100 d-flex align-items-center justify-content-center bg-transparent border-0 connect_meta_btn_first"
                        onClick={e => {
                          //e.stopPropagation();
                          setShowMetaForm(true);
                        }}
                      >
                        <span className="arrow_green">
                          <img src="/assets/img/greenarrow2x.png" alt="" />
                        </span>
                        <span className="success_text_meta_mask">Connect with Metamask</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmailLoginComponent;
