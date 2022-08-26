import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../../actions/auth-actions';
import validator from 'validator';
import Loader from '../loader';
import NewMetaMaskLogin from './new-meta-mask-login';

const SignUp = ({ handleSignUpDialogClose, connectWalletHandler }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [username, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [userNameError, SetUserNameError] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');
  const [matchPasswordError, setMatchPasswordError] = useState('');
  const [btnCLicked, setBtnClicked] = useState(false);
  const [showMetaForm, setShowMetaForm] = useState(true);

  const registerSelector = useSelector(state => {
    if (state.registerUser.register && !btnCLicked) {
      setBtnClicked(true);
    }
    if (state.registerUser.error && !btnCLicked) {
      // setBtnClicked(true)
    }
    return state.registerUser;
  });

  // console.log(loginSelector);

  const onChangeEmail = e => {
    const email = e.target.value;
    setEmail(email);
  };

  const openModalForLogin = e => {
    setOpenModal(true);
  };

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeConfirmPassword = e => {
    const password = e.target.value;
    setconfirmPassword(password);
  };

  const onChangeuserName = e => {
    const username = e.target.value;
    setUserName(username);
  };

  function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
  function checkPasswordComplexity(pwd) {
    var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,16}$/;
    var valid = regularExpression.test(pwd);
    return valid;
  }
  function checkUserName(name) {
    var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{4,20}$/;
    var valid = regularExpression.test(name);
    return valid;
  }
  const usernameValidter = username => {
    if (!username) {
      SetUserNameError('username required');
      return false;
    }
    let checkSpace = hasWhiteSpace(username);
    if (checkSpace) {
      SetUserNameError('white spaces not allowed');
      return false;
    }
    // let checkName = checkUserName(username)
    // if (!checkName) {
    //     SetUserNameError("username character must be 4 to 20 and alpha numeric with no spaces")
    //     return false
    // }
    return true;
  };

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
    let checkPassword = checkPasswordComplexity(password);
    if (!checkPassword) {
      setPasswordError('Password length should be between 8 min to 16 max characters long with alpha numeric');
      return false;
    }
    return true;
  };
  const confirmPasswordValidator = confirmPassword => {
    confirmPassword = confirmPassword.replace(/\s+/g, '');
    if (!confirmPassword) {
      setconfirmPasswordError('confirm password required');
      return false;
    }
    let checkSpace = hasWhiteSpace(password);
    if (checkSpace) {
      setconfirmPasswordError('white spaces not allowed');
      return false;
    }
    let checkPassword = checkPasswordComplexity(password);
    if (!checkPassword) {
      setconfirmPasswordError('Password length should be between 8 min to 16 max characters long with alpha numeric');
      return false;
    }
    return true;
  };

  const matchPasswordValidator = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      setMatchPasswordError('password and confirm password should be same');
      return false;
    }
    return true;
  };

  const registerHandler = e => {
    e.stopPropagation();
    // e.stopImmediatePropagation();
    e.preventDefault();
    let checkUser = usernameValidter(username);
    //console.log(checkUser);
    if (checkUser) {
      SetUserNameError('');
      const emailValidate = emailValidater(email);
      if (emailValidate) {
        setEmailError('');
        const passwordValidate = passwordValidator(password);
        if (passwordValidate) {
          setPasswordError('');
          const confirmPasswordValidate = confirmPasswordValidator(confirmPassword);
          if (confirmPasswordValidate) {
            setconfirmPasswordError('');
            const matchPasswordValide = matchPasswordValidator(password, confirmPassword);
            if (matchPasswordValide) {
              setMatchPasswordError('');
              dispatch(Register(username, email, password));
              setPassword('');
              setconfirmPassword('');
              // setSignUpApi(result.data.msg)
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    return () => {};
  }, [showMetaForm]);

  return (
    <div
      className="modal fade hk_modal_for_select bd-example-modal-lg3"
      id="exampleModal"
      data-keyboard="false"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
      data-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        {!showMetaForm && (
          <div className="modal-content quickening_loader fk-width">
            <div className="modal-header">

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
                <div className="table_main select_abilites fk-wrap">
                  <div className="card_selection">
                    <div className="row ml-1 mr-1 loeaderss fk-h">
                    <img src="/assets/img/email.png" alt="" />
                      <h5 className="modal-title mt-3" id="exampleModalLabel">
                        Sign up with Email
                      </h5>
                    </div>

                    {registerSelector && registerSelector.register && registerSelector.register.msg && (
                      <div className="form-group">
                        <div className="text-success" role="alert">
                          {registerSelector.register.msg}
                        </div>
                      </div>
                    )}

                    {registerSelector && registerSelector.error && registerSelector.error.data && (
                      <div className="form-group">
                        <div className="text-danger" role="alert">
                          {registerSelector.error.data.msg}
                        </div>
                      </div>
                    )}

                    {!btnCLicked && (
                      <form className="form-row">
                        <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                          <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                            <input type="text" placeholder="Enter your username" className="form-control" value={username} onChange={onChangeuserName} />
                          </div>

                          {userNameError && (
                            <div className="form-group .mt-0">
                              <div className="text-danger" role="alert">
                                {userNameError}
                              </div>
                            </div>
                          )}
                        </div>

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
                          <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                            <input type="password" placeholder="Enter password" className="form-control" value={password} onChange={onChangePassword} />
                          </div>

                          {passwordError && (
                            <div className="form-group .mt-0">
                              <div className="text-danger" role="alert">
                                {passwordError}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                          <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                            <input type="password" placeholder="Confirm password" className="form-control" value={confirmPassword} onChange={onChangeConfirmPassword} />
                          </div>

                          {confirmPasswordError && (
                            <div className="form-group .mt-0">
                              <div className="text-danger" role="alert">
                                {confirmPasswordError}
                              </div>
                            </div>
                          )}

                          {matchPasswordError && (
                            <div className="form-group .mt-0">
                              <div className="text-danger text-left" role="alert">
                                {matchPasswordError}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                          <button type="button" className="btn w-100 btn_bg_hk hk_continue quickening_continue" onClick={registerHandler}>
                            SIGN UP
                          </button>
                        </div>

                        <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 d-block">
                          <div className="w-100">
                            <button
                              onClick={() => setShowMetaForm(true)}
                              type="button"
                              className="w-100 d-flex align-items-center justify-content-center bg-transparent border-0 connect_meta_btn_first"
                            >
                              <span className="arrow_green">
                                <img src="/assets/img/greenarrow2x.png" alt="" />
                              </span>
                              <span className="success_text_meta_mask">Connect with Metamask</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showMetaForm && <NewMetaMaskLogin closeLogin={handleSignUpDialogClose} setShowMetaForm={setShowMetaForm} setShowForgotPassword={() => {}} connectWalletHandler={connectWalletHandler} />}

        {/* <div className="modal-content quickening_loader otp_verification">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">OTP Verification</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={(e) => { handleSignUpDialogClose() }}>
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
                                                <input type="text" placeholder="Enter your name" className="form-control"/>
                                            </div>
                                        </div>
                                        <p>Please enter the verification code that we have sent you via email</p>
                                        <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                                            <button type="button" className="btn w-100 btn_bg_hk hk_continue quickening_continue" onClick={registerHandler} >SIGN UP</button>
                                        </div>
                                        <div className="resend_code">
                                            <h5>RESEND CODE</h5>
                                            <span>In 00:38</span>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </div> */}
      </div>
    </div>
  );
};
export default SignUp;
