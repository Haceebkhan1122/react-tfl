import { useEffect, useState } from 'react';
import UserDeatils from './userDetails';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UserVerify } from '../../../actions/auth-actions';
const NavBar = ({ connectWalletHandler, loginSelector, userBalance, clear, openModalForLogin, openSignUpModal, SetUserStatus }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-light px-md-0"
        onChange={() => {
          SetUserStatus(true);
        }}
      >
        <Link to="/" className="navbar-brand">
          <img src="../../assets/img/main_logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent #navbarsExample09"
          aria-controls="navbarSupportedContent navbarsExample09"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="position-absolute right_0">
            <i className="fa fa-bars text-white"></i>
          </span>
        </button>

        {/* <span className="position-absolute navbar-toggler right_0 p-0" aria-expanded="false" aria-label="Toggle navigation" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"><i className="fa fa-bars text-white"></i></span> */}
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
          <ul className="navbar-nav mr-0 d-flex align-items-center">
            <li className="nav-item active">
              <Link to="/brawl" className="nav-link">
                Brawl <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item tool_tip">
              <a className="nav-link" href="#">
                Watch &amp; Earn
              </a>
              <span className="hiddens">
                {/* <span className='info_icon'><img src="/assets/img/info.png" alt="" /></span> */}
                <span className="tooltiptext_for_header">Coming Soon</span>
              </span>
            </li>

            {loginSelector.user && (
              <li className="nav-item tool_tip">
                {/* <Link to="/quickening" className="nav-link">
                  Quickening
                </Link> */}
                <a className="nav-link tooltip_custom" href="#">
                  Quickening
                </a>
                <span className="hiddens">
                  <span className="tooltiptext_for_header">Coming Soon</span>
                </span>
              </li>
            )}

            <li className="nav-item tool_tip">
              <Link to="/market-place" className="nav-link">
                Marketplace
              </Link>
              {/* <a className="nav-link tooltip_custom" href="#">
                Marketplace
              </a> */}
              {/* <span className="hiddens">
                <span className="tooltiptext_for_header">Coming Soon</span>
              </span> */}
            </li>

            {/* <li className="nav-item tool_tip">
                            <Link to="/" className="nav-link">Taunt Coin</Link>
                            <a className="nav-link" href="#" >Taunt Coin</a> 
                             <span className="hiddens">
                                    <span className="tooltiptext_for_header">Coming Soon</span>
                                </span>
                        </li> */}
            {loginSelector.user && (
              <>
                <li className="nav-item tool_tip">
                  <Link to="/" className="nav-link">
                    Taunt Coin
                  </Link>
                  {/* <a className="nav-link" href="#" >Taunt Coin</a>  */}
                  <span className="hiddens">
                    <span className="tooltiptext_for_header">Coming Soon</span>
                  </span>
                </li>
              </>
            )}

            {/* <li className="nav-item tool_tip">
              <Link to="/" className="nav-link">Learn</Link>
              <a target="_blank" className="nav-link" href="https://taunt-battleworld.gitbook.io/taunt-battleworld/">
                Learn
              </a>
              <span className="hiddens">
                <span className='info_icon'><img src="/assets/img/info.png" alt="" /></span>
                <span className="tooltiptext_for_header">Coming Soon</span>
              </span>
            </li> */}

            <li className="nav-item">
              <Link to="./faq" className="nav-link">
                FAQ
              </Link>
              {/* <a
                href="https://taunt-battleworld.gitbook.io/taunt-battleworld"
                className="nav-link"
              >
                FAQ
              </a> */}
            </li>

            {!loginSelector.user && (
              <>
                <li className="nav-item">
                  <a className="btn btn_bg_hk mt-1 mr-3" data-toggle="modal" data-target=".bd-example-modal-lg2" onClick={e => openModalForLogin(e)}>
                    Login
                  </a>
                  <a className="btn btn_bg_hk mt-1" data-toggle="modal" data-target=".bd-example-modal-lg3" onClick={e => openSignUpModal(e)}>
                    Sign Up
                  </a>
                </li>
              </>
            )}

            {loginSelector.user && (
              <li className="nav-item">
                <Link className="nav-link" to="/blood-temple">
                  Blood Temple
                </Link>
              </li>
            )}
            {loginSelector.user && <UserDeatils connectWalletHandler={connectWalletHandler} userBalance={userBalance} clear={clear} />}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
