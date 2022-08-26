import { Link } from "react-router-dom";
const Inventory = () => {
  return (
    <div
      className="tab-pane fade for_bg_box"
      id="pills-inventory"
      role="tabpanel"
      aria-labelledby="pills-inventory-tab"
    >
      <div className="row mb-5">
        <div className="col-md-12 pl-3">
          <div className="drops_main">
            <div className="tournament_drops">
              <div className="for_selectbox">
                <select>
                  <option>Item Type</option>
                  <option>Item 1</option>
                  <option>Item 2</option>
                  <option>Item 3</option>
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
                  <img src="/assets/img/h1.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Magic Shield</h3>
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
                  <img src="/assets/img/h2.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Sword</h3>
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
                  <img src="/assets/img/h3.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Optics</h3>
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
                  <img src="/assets/img/h4.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Spark</h3>
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
                  <img src="/assets/img/h1.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Magic Shield</h3>
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
                  <img src="/assets/img/h2.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Sword</h3>
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
                  <img src="/assets/img/h3.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Optics</h3>
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
                  <img src="/assets/img/h4.png" alt="" />
                </div>
                <div className="box_main">
                  <div className="content_for first">
                    <h3>Spark</h3>
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
export default Inventory;
