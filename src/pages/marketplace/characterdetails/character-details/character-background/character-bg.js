import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CharacterBackground = () => {
  // const { charactedDetailId } = useParams();

  const template = useSelector((state) => state.marketPlace.template);
  console.log("Template = > ", template);
  // console.log("Template BCK = > ",templateBck)
  // let temp = Object.assign({},template[0])
  // console.log("temp object - > ",temp )

  // const template = useSelector(state => {
  //     let found = undefined;
  //     state.templates.map(temp => { if (temp.id === charactedDetailId) found = temp; });
  //     return found;
  // });

  return (
    <div className="chara_bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 character_profile">
            <div className="char_image res_char_img">
              {template && (
                <img
                  src={template.props.mutable.image}
                  alt=""
                  onError={(e) => {
                    e.target.src = template.image; // some replacement image
                  }}
                />
              )}
            </div>
            <div className="share_wishlist_main">
              <a href="#">
                <img src="/assets/img/Shape@2x.png" alt="" />
                {/* <i className="fa fa-heart-o" aria-hidden="true"></i> */}
              </a>
              <a href="#">
                <img src="/assets/img/Vector@2x.png" alt="" />
                {/* <i className="fa fa-share-alt"></i> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharacterBackground;
