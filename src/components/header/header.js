import React, { useEffect, useState, useRef } from 'react';
import '../header/header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import $, { data } from 'jquery';
import { ethers } from 'ethers';
import { MetaLogin, Logout, UserVerify, MetaConnect } from '../../actions/auth-actions';
import SignUp from './sign-up';
import Login from './login';
import NavBar from './navbar/navbar';
import { ChangePassword, UnsetChangePasswordState } from '../../actions/auth-actions';
import NewMetaMaskLogin from './new-meta-mask-login';

function Header() {
  const dispatch = useDispatch();
  const history = useNavigate();

  const loginFromLocal = localStorage.getItem('userAddress') ? localStorage.getItem('userAddress') : undefined;
  const [login, setLogin] = useState(loginFromLocal);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [metaMaskModal, setMetaMaskModal] = useState(false);
  const [forgetTopBar, setForgetTopBar] = useState(false);
  const [accVerify, setAccVerify] = useState(false);
  const [userStatus, SetUserStatus] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(undefined);

  const loggedInUser = useSelector(state => state.auth.user);
  const emailVerify = useSelector(state => state.registerUser.emailVerify);

  const hideItem = () => {
    setAccVerify(false);
  };

  const connectWalletHandler = async (connect = false) => {
    if (!window.ethereum) {
      return setErrorMessage('Please install MetaMask browser extension to interact');
    }

    if (!window.ethereum._state.isUnlocked) {
      return setErrorMessage('Please login again in metamask extension');
    }

    try {
      const result = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (loggedInUser?.metaAddress && loggedInUser?.metaAddress !== result[0]) {
        return setErrorMessage('Connected Metamask wallet is not associate with the logged in user');
      }

      accountChangedHandler(result[0]);
      setLocalStorge(result[0]);
      getAccountBalance(result[0]);

      if (connect) {
        dispatch(MetaConnect(result[0]));
      } else {
        dispatch(MetaLogin(result[0]));
      }
    } catch (error) {
      setErrorMessage(error.msg);
    }
  };

  useEffect(() => {
    login && getAccountBalance(login);
  });

  useEffect(() => {
    $('.navbar-collapse.collapse.show ul.navbar-nav li.nav-item a').on('click', function () {
      $('.navbar-collapse.collapse.show').removeClass('show');
    });

    $(document).ready(function () {
      $('.header').addClass('for_modal_all');
      $('.fa-bars').on('click', function () {
        // $('html').attr('class','hidden_scroll');
        if ($('.navbar-collapse').is(':visible')) {
          $('html').removeClass('hidden_scroll');
        } else {
          $('html').addClass('hidden_scroll');
        }
      });

      $('.sign_up_form,.meta_mask_form').hide();
      // $('.signup_btn_first').on('click', function () {
      //     $('.login_first_form').hide();
      //     $('.sign_up_form').show();
      // });
      // $('.connect_meta_btn_first').on('click', function () {
      //     $('.login_first_form').hide();
      //     $('.meta_mask_form').show();
      // });

      $('#exampleModal').on('hidden.bs.modal', function (e) {
        // do something...
        console.log('Modal Hidden');
      });
    });
  });

  // // update account, will cause component re-render
  const accountChangedHandler = newAccount => {
    setDefaultAccount(newAccount);
    localStorage.getItem('userAddress') && getAccountBalance(newAccount.toString());
    login && localStorage.removeItem('userAddress');
    newAccount && setLocalStorge(newAccount);
  };

  // remove error popup
  const removePopUp = () => {
    setErrorMessage(null);
    setOpenModal(false);
  };

  const changePassword = useSelector(state => {
    if (state.registerUser.changepassword && !forgotPassword) {
      setForgotPassword('Password Updated Successfully!');
    }
    return state.registerUser;
  });

  const removeForgotPassword = () => {
    setForgotPassword(undefined);
    dispatch({
      type: 'CHANGE-PASSWORD',
      data: undefined,
    });
  };

  const getAccountBalance = account => {
    localStorage.getItem('userAddress') &&
      window.ethereum &&
      window.ethereum
        .request({ method: 'eth_getBalance', params: [account, 'latest'] })
        .then(balance => {
          setUserBalance(ethers.utils.formatEther(balance));
        })
        .catch(error => {});
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  const setLocalStorge = value => {
    localStorage.setItem('userAddress', value);
  };
  // // listen for account changes
  window.ethereum && window.ethereum.on('accountsChanged', accountChangedHandler);

  window.ethereum && window.ethereum.on('chainChanged', chainChangedHandler);

  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //     $(window).on('load',function () {
  //         setLoader(false);
  //     })
  // }, []);

  useEffect(() => {
    dispatch(UserVerify());
  }, []);

  useEffect(() => {
    SetUserStatus(false);
    dispatch(UserVerify());
  }, [userStatus]);

  useEffect(() => {
    $(document).ready(function () {
      $('.header').addClass('for_modal_all');

      $('.fa-bars').on('click', function () {
        // $('html').attr('class','hidden_scroll');

        if ($('.navbar-collapse').is(':visible')) {
          $('html').removeClass('hidden_scroll');
        } else {
          $('html').addClass('hidden_scroll');
        }
      });
    });
  });

  //email login
  const clear = () => {
    dispatch(Logout());
    dispatch({ type: 'UNSELECT-TOURNAMENT' });
    setLogin(false);
    history('/');
  };

  const loginSelector = useSelector(state => {
    if (state.auth.user && openModal) {
      console.log('Setting Open Modal False');
      setOpenModal(false);
      $('.modal-backdrop').remove();
    }
    if (state.auth.user && errorMessage) {
      setErrorMessage('');
    }
    return state.auth;
  });

  const openModalForLogin = e => {
    setOpenModal(true);
  };

  const handleDialogClose = e => {
    console.log('Handle Closed Fired');
    setOpenModal(false);
    dispatch({ type: 'REMOVE-STATE' });
  };

  const openSignUpModal = e => {
    setSignUpModal(true);
  };

  const handleSignUpDialogClose = e => {
    setSignUpModal(false);
    dispatch({ type: 'REMOVE-STATE-SIGNUP' });
  };

  return (
    <div className="header">
      {accVerify && (
        <div className="forgot_pass_top_bar">
          <div className="container">
            <div className="row">
              <div className="forgot_content">
                <p>Your Account is not verified. Please verify it.</p>
                <div className="cross_bar">
                  <img src="/assets/img/bar-cross.png" alt="" onClick={hideItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {forgetTopBar && (
        <div className="forgot_pass_top_bar">
          <div className="container">
            <div className="row">
              <div className="forgot_content">
                <p>A Reset Password link has been sent. Please check your Email.</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {signUpModal && <SignUp handleSignUpDialogClose={handleSignUpDialogClose} connectWalletHandler={connectWalletHandler} />}
      {openModal && <Login openModal={openModal} close={handleDialogClose} connectWalletHandler={connectWalletHandler} />}
      <NavBar
        connectWalletHandler={connectWalletHandler}
        loginSelector={loginSelector}
        userBalance={userBalance}
        clear={clear}
        openModalForLogin={openModalForLogin}
        openSignUpModal={openSignUpModal}
        SetUserStatus={SetUserStatus}
      />
      {errorMessage && (
        <div className="alert">
          <span className="closebtn" onClick={removePopUp}>
            &times;
          </span>
          <strong>Danger!</strong> {errorMessage}.
        </div>
      )}
      {forgotPassword && (
        <div className="alert alert-success">
          <span className="closebtn" onClick={removeForgotPassword}>
            &times;
          </span>
          {forgotPassword}
        </div>
      )}

      {emailVerify && (
        <div className="alert alert-success">
          <span
            className="closebtn"
            onClick={() => {
              dispatch({ type: 'EMAIL-VERIFY', data: false });
            }}
          >
            &times;
          </span>
          Email verified Successfully!
        </div>
      )}
    </div>
  );
}
// export default Header
export default Header;
