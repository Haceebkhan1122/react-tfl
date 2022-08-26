import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ForgottenPassword } from "../../actions/auth-actions";
import validator from "validator";

const ForgotPassword = ({
  closeLogin,
  setShowForgotPassword,
  setShowMetaForm,
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const emailValidater = (email) => {
    if (!email) {
      setEmailError("email required");
      return false;
    } else if (!validator.isEmail(email)) {
      setEmailError(`invalid email.`);
      return false;
    }
    return true;
  };

  const submitEmail = (e) => {
    e.stopPropagation();
    e.preventDefault();

    const emailValidate = emailValidater(email);

    if (emailValidate) {
      setEmailError("");
      dispatch(ForgottenPassword(email));
    }

    return false;
    // e.stopImmediatePropagation();
    // setShowForgotPassword(true)
  };

  const forgotPasswordSelector = useSelector((state) => state.forgotPassword);
  // console.log(forgotPasswordSelector);

  useEffect(() => () => dispatch({ type: "REMOVE-STATE-FORGOTPASSWORD" }), []);

  return (
    <div className="modal-content quickening_loader ">
      <div className="modal-header">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={() => {
            setShowForgotPassword(false);
            closeLogin();
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
              <div className="row ml-1 mr-1 loeaderss">
                <h5 className="modal-title mt-3 mb-3" id="exampleModalLabel">
                  Forgotten Password
                </h5>
                <p>
                  Please enter your email address to search for your account.
                </p>
              </div>
            </div>
            {/* <form className="form-row">
              <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                  <input type="text" placeholder="Enter your email" className="form-control" onChange={onChangeEmail} />
                </div>
                {emailError && (
                  <div className="form-group" className=".mt-0">
                    <div className="text-danger" role="alert">
                      {emailError}
                    </div>
                  </div>
                )}
              </div>
              <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                <button className="btn w-100 btn_bg_hk hk_continue quickening_continue" onClick={submitEmail} >SUBMIT</button>
              </div>
            </form> */}
            <form className="form-row">
              <div className="tournament_drops mb-4 flex-wrap mb_res_cust col-md-12">
                <div className="for_selectbox hk_too_width mb_resp_575 w-100 mr-0">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="form-control"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>
                {emailError && (
                  <div className="form-group .mt-0">
                    <div className="text-danger" role="alert">
                      {emailError}
                    </div>
                  </div>
                )}
              </div>
              <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12 mb-3 d-block">
                <button
                  type="button"
                  className="btn w-100 btn_bg_hk hk_continue quickening_continue"
                  onClick={submitEmail}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login mb-3 w-100">
          <button type="button" data-backdrop="static" data-keyboard="false" className="w-100 btn btn_bg_hk hk_continue quickening_continue" onClick={submitEmail}>SUBMIT</button>
      </div> */}
      {forgotPasswordSelector.error && (
        <div className="form-group">
          <div className="text-danger" role="alert">
            {forgotPasswordSelector.error}
          </div>
        </div>
      )}

      {forgotPasswordSelector.forgotPassword && (
        <div className="form-group">
          <div className="text-success" role="alert">
            {forgotPasswordSelector.forgotPassword}
          </div>
        </div>
      )}

      <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12">
        <div className="w-100">
          <button
            className="w-100 d-flex align-items-center justify-content-center bg-transparent border-0"
            onClick={(e) => {
              setShowForgotPassword(false);
              setShowMetaForm(false);
            }}
          >
            <span className="arrow_green">
              <img src="/assets/img/greenarrow2x.png" alt="" />
            </span>
            <span className="success_text_meta_mask">Back to login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
