import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetUserProfile } from '../../actions/auth-actions';
const BloodCharacters = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const userProfile = useSelector(state => state.auth.profile);

  useEffect(() => {
    dispatch(GetUserProfile());
  }, []);

  return (
    <div className="profile_content_bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
            <div className="profile_content_profile pl-2">
              <div className="profile_flex">
                <div className="profile_flex_inner">
                  <img src="/assets/img/profile.png" alt="" />
                </div>
                <div className="profile_flex_inner resp_text">
                  <h3>{userProfile?.username}</h3>
                  <p>
                    {userProfile?.metaAddress}{' '}
                    <span onClick={() => window.navigator.clipboard.writeText(userProfile?.metaAddress)}>
                      <i className="fa fa-clone" aria-hidden="true"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12">
            <div className="profile_flex prof_right pt-3">
              <a href="#">
                <span>
                  <i className="fa fa-cog" aria-hidden="true"></i> Settings
                </span>
              </a>
            </div>
          </div>
          <div className="col-md-8">
            <div className="profile_numbers resp_profile_numbers flex-md-nowrap flex-wrap">
              {/* <h4>
                250 <span>Characters</span>
              </h4> */}
              {/* <h4>
                75 <span>Bread</span>
              </h4> */}
              <h4>
                {userProfile?.totalWin} W - {userProfile?.totalLoss} L <span>Brawls</span>
              </h4>
              <h4>
                {(userProfile?.totalWin || 0 / userProfile?.totalWin || 0 + userProfile?.totalLoss || 0) * 100}% <span>Win Rate</span>
              </h4>
            </div>
          </div>
          <div className="col-md-4 right_part_percent">
            {/* <div className="profile_numbers resp_profile_numbers flex-md-nowrap flex-wrap">
              <h4 className="mr-0">
                57.14% <span>Win Rate</span>
              </h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodCharacters;
