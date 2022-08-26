import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { FetchDroppinSoons } from "../../../../actions/dropping-soon";
// let charactersArray = []



const DropingSoon = () => {

    const dispatch = useDispatch()
    // //console.log("State = > ",state)
    useEffect(() => {
        dispatch(FetchDroppinSoons(0, 20))
    }, [])

    let droppingSoons = useSelector(state => state.droppingSoon.droppingSoons)

    return (

        <div className="row card_first_row">
            {/* <div className="empty_state_content">
                    <div className="col-md-12">
                        <div className="empty_area">
                            <img src="/assets/img/emtpy_uper.png" alt="" />
                            <h3>You have not purchased any character, you can find out at OpenSea</h3>
                            <a className="btn btn_bg_hk mt-1 mr-3">GO TO OPENSEA</a>
                        </div>
                    </div>
            </div> */}
            <div className="col-md-12 pt-5">
                <div className="title_section pt-4 text-left res_475_card_heading">
                    <h1 className="text-left pl-3">Air dropping Soon</h1>
                </div>
            </div>
            {
                droppingSoons && droppingSoons.map((ch) => (
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                        <Link to={`/market-place/character-details/${ch.id}`}>
                            <div className="dropping_item">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src={ch.props.mutable.image} alt="" onError={(e) => {
                                                e.target.src = ch.image // some replacement image
                                            }} />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">Legendary</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }

            {/* <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                <Link to="/CharacterDetails/2">
                    <div className="dropping_item">
                        <div className="full_box slider">
                            <div className="card_hk">
                                <div className="for_image">
                                    <img src="/assets/img/hammer_market.png" alt="" />
                                    <div className="on_hover">
                                        <button className="btn btn-primary purchasing">Legendary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                <Link to="/CharacterDetails/3">
                    <div className="dropping_item">
                        <div className="full_box slider">
                            <div className="card_hk">
                                <div className="for_image">
                                    <img src="/assets/img/knife_market.png" alt="" />
                                    <div className="on_hover">
                                        <button className="btn btn-primary purchasing">Legendary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 resp_flex_card">
                <Link to="/CharacterDetails/4">
                    <div className="dropping_item">
                        <div className="full_box slider">
                            <div className="card_hk">
                                <div className="for_image">
                                    <img src="/assets/img/elven.png" alt="" />
                                    <div className="on_hover">
                                        <button className="btn btn-primary purchasing">Legendary</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div> */}
        </div>

    )
}
export default DropingSoon