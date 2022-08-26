const BloodTempleTabs = props => {
  const { onTabChange } = props;

  return (
    <div className="container px-sm-0 px-5">
      <div className="char_parents_card mb-0">
        <div className="col-md-12 p-0 details_char pt-4">
          <div className="container">
            <ul className="nav nav-pills" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="pills-home-tab"
                  data-toggle="pill"
                  href="#pills-home"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                  onClick={() => {
                    onTabChange('ALL');
                  }}
                >
                  All
                </a>
              </li>

              {/* <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-profile-tab"
                  data-toggle="pill"
                  href="#pills-profile"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  onClick={() => {
                    onTabChange('FOR-SALE');
                  }}
                >
                  For Sale
                </a>
              </li> */}

              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-contact-tab"
                  data-toggle="pill"
                  href="#pills-contact"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  onClick={() => {
                    onTabChange('FAVORITES');
                  }}
                >
                  Favourites
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-inventory-tab"
                  data-toggle="pill"
                  href="#pills-inventory"
                  role="tab"
                  aria-controls="pills-inventory"
                  aria-selected="false"
                  onClick={() => {
                    onTabChange('INVENTORY');
                  }}
                >
                  Inventory
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-win-tab"
                  data-toggle="pill"
                  href="#pills-win"
                  role="tab"
                  aria-controls="pills-win"
                  aria-selected="false"
                  onClick={() => {
                    onTabChange('WIN-LOSS-RECORDS');
                  }}
                >
                  Win Loss Records
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-trophies-tab"
                  data-toggle="pill"
                  href="#pills-trophies"
                  role="tab"
                  aria-controls="pills-trophies"
                  aria-selected="false"
                  an
                  onClick={() => {
                    onTabChange('TROPHIES');
                  }}
                >
                  Trophies
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="pills-winnings-tab"
                  data-toggle="pill"
                  href="#pills-winnings"
                  role="tab"
                  aria-controls="pills-winnings"
                  aria-selected="false"
                  onClick={() => {
                    onTabChange('WINNINGS');
                  }}
                >
                  Winnings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BloodTempleTabs;
