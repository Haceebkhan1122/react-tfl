import React, { useState } from "react";
import MetaMask from "./meta-mask-login";
import EmailLoginComponent from "./email-login";
import ForgotPassword from "./ForgotPassword";
import NewMetaMaskLogin from "./new-meta-mask-login";
const Login = ({ openModal, close, connectWalletHandler }) => {
  const [showMetaForm, setShowMetaForm] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div
      className="modal fade hk_modal_for_select bd-example-modal-lg2"
      data-backdrop="static"
      data-keyboard="false"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        data-keyboard="false"
        role="dialog"
      >
        {!showMetaForm && !showForgotPassword && (
          <EmailLoginComponent
            openModal={openModal}
            close={close}
            setShowMetaForm={setShowMetaForm}
            setShowForgotPassword={setShowForgotPassword}
          />
        )}

        {/* {showMetaForm && <MetaMask closeLogin={close} setShowMetaForm={setShowMetaForm} setShowForgotPassword={setShowForgotPassword} connectWalletHandler={connectWalletHandler} />} */}

        {showMetaForm && (
          <NewMetaMaskLogin
            closeLogin={close}
            setShowMetaForm={setShowMetaForm}
            setShowForgotPassword={setShowForgotPassword}
            connectWalletHandler={connectWalletHandler}
          />
        )}

        {showForgotPassword && (
          <ForgotPassword
            closeLogin={close}
            setShowForgotPassword={setShowForgotPassword}
            setShowMetaForm={setShowMetaForm}
          />
        )}

        {/* <div className="modal-content quickening_loader sign_up_form">

                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sign up with</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span className="cross_hides">
                                <img src="/assets/img/cut.png" alt="" />
                            </span>
                        </button>
                    </div>

                </div> */}
      </div>
    </div>
  );
};
export default Login;
