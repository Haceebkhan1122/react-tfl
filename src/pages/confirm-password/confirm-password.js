import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { ChangePassword, UnsetChangePasswordState } from '../../actions/auth-actions';

const ConfirmPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');
  const [matchPasswordError, setMatchPasswordError] = useState('');
  const email = location.pathname.split('/').pop([0]);
  const Navigate = useNavigate();
  const changePassword = useSelector(state => {
    if (state.registerUser.changepassword) {
      Navigate('/');
    }
    return state.registerUser;
  });
  console.log(changePassword);

  const onChangePassword = e => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = e => {
    const password = e.target.value;
    setconfirmPassword(password);
  };

  function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
  function checkPasswordComplexity(pwd) {
    var regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,16}$/;
    var valid = regularExpression.test(pwd);
    return valid;
  }

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
      setMatchPasswordError('password and confirmPassword should be same');
      return false;
    }
    return true;
  };

  const registerHandler = e => {
    e.stopPropagation();
    // e.stopImmediatePropagation();
    e.preventDefault();
    const passwordValidate = passwordValidator(password);
    if (passwordValidate) {
      setPasswordError('');
      const confirmPasswordValidate = confirmPasswordValidator(confirmPassword);
      if (confirmPasswordValidate) {
        setconfirmPasswordError('');
        const matchPasswordValide = matchPasswordValidator(password, confirmPassword);
        if (matchPasswordValide) {
          setMatchPasswordError('');
          dispatch(ChangePassword(password, email));
          setPassword('');
          setconfirmPassword('');
          // setSignUpApi(result.data.msg)
        }
      }
    }
  };

  return (
    <>
      <div className="top_nft pt-5 market_place card_market_first pb-5">
        <div className="container">
          <div className="row card_first_row">
            <div className="col-md-3 mx-auto pt-5">
              <form className="form-row">
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
                    <div className="text-danger" role="alert">
                      {matchPasswordError}
                    </div>
                  </div>
                )}

                {changePassword && changePassword.changepassword === false && (
                  <div className="form-group">
                    <div className="text-danger" role="alert">
                      {'unable to change password'}
                      {/* invalid credenticals */}
                    </div>
                  </div>
                )}

                <div className="mt-4 select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                  <button type="button" className="btn w-100 btn_bg_hk hk_continue quickening_continue" onClick={registerHandler}>
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmPassword;
