import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';

const UserDeatils = ({ connectWalletHandler, userBalance, clear }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const connectWithMetaMask = () => {
    connectWalletHandler(true);
  };

  return (
    <>
      <li className="nav-item wallet_crypto ">
        <img src="/assets/img/ethurem.png" className="ethy" alt="" />
        <span>{userBalance ? userBalance : 0}</span>
      </li>
      <li className="nav-item after_login dropdown">
        <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="/assets/img/profile.png" className="profile_icon" alt="" />
        </div>
        <Menu
          menuButton={
            <MenuButton>
              <img src="/assets/img/dropsdown.png" className="drop_arr" alt="" />
            </MenuButton>
          }
        >
          <MenuItem
            onClick={() => {
              navigate('/user-profile');
            }}
          >
            <Link className="dropdown-item" to="/user-profile">
              <img src="/assets/img/setting2x.png" />
              Setting
            </Link>
          </MenuItem>

          <MenuItem onClick={clear}>
            <Link className="dropdown-item" to="#" onClick={clear}>
              <img src="/assets/img/logout2x.png" />
              logout
            </Link>
          </MenuItem>

          <MenuItem onClick={connectWithMetaMask}>
            <Link className="dropdown-item" to="#" onClick={connectWithMetaMask}>
              Connect with Metamask
            </Link>
          </MenuItem>
        </Menu>
        {/* <div id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="/assets/img/profile.png" className="profile_icon" alt="" />
          <img src="/assets/img/dropsdown.png" className="drop_arr" alt="" />
        </div>

        <div className="dropdown-menu drop_down_img position-absolute" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            <img src="/assets/img/myprofile2x.png" />
            My Profile
          </a>

          <Link className="dropdown-item" to="/blank-page">
            <img src="/assets/img/setting2x.png" />
            Blood Template
          </Link>
          <Link className="dropdown-item" to="/blood-temple">
            <img src="/assets/img/setting2x.png" />
            Blood Template
          </Link>
          <Link className="dropdown-item" to="/user-profile">
            <img src="/assets/img/setting2x.png" />
            Setting
          </Link>
          <a className="dropdown-item" href="#" onClick={clear}>
            <img src="/assets/img/logout2x.png" />
            Logout
          </a>
          <span className="triangle_up"></span>
        </div> */}
      </li>
    </>
  );
};
export default UserDeatils;
