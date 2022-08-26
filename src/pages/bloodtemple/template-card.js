import { Link } from 'react-router-dom';

const TemplateCard = props => {
  const { nft } = props;

  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
      <Link to={`/blood-character-detail/${nft.uuid}`}>
        <div className="full_box slider">
          <div className="card_hk">
            <div className="for_image">
              <img src={nft.thumbnail} alt="" />
            </div>
            <div className="box_main">
              <div className="content_for first">
                <h3>{nft.name}</h3>
                <p>
                  #733342 <i className="fa fa-circle" aria-hidden="true"></i> {nft.race} <i className="fa fa-circle" aria-hidden="true"></i> {nft.gender}
                </p>
              </div>
              <div className="content_for first">
                <div className="tournament_drops">
                  <a className="btn btn_bg_hk mt-1 mr-0">View</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TemplateCard;
