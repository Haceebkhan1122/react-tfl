import { Link } from "react-router-dom";
const Trophies = () => {
  return (
    <div
      className="tab-pane fade for_bg_box"
      id="pills-trophies"
      role="tabpanel"
      aria-labelledby="pills-trophies-tab"
    >
      <div className="row mb-5">
        <div className="3">
          <div className="drops_main">
            <div className="tournament_drops">
              <div className="for_selectbox">
                <select>
                  <option>Trophy</option>
                  <option>Trophy 1</option>
                  <option>Trophy 2</option>
                  <option>Trophy 3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row char_detail_profile_card">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts1.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Experience Trophy</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts2.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>A Perfect Tan</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts3.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>The Completionist</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts4.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Golden Fighter</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts1.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Experience Trophy</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts2.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>A Perfect Tan</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts3.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>The Completionist</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
          <Link to="#">
            <div className="full_box slider">
              <div className="card_hk">
                <div className="for_image">
                  <img src="/assets/img/ts4.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Golden Fighter</h3>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Trophies;
