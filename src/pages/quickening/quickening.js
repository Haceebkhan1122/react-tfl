import React, { useEffect, useState } from 'react'
import './quickening.css';
import { Link, useLocation } from "react-router-dom";
import QuickeningRealm from './quickening-realm/quickening-realm';
import QuickeningMyCollection from './quickening-mycollection/qunickening-my-collection';

function Quickening() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [quickeningRealm,setQuickeningRealm]=useState([])
    const [myCollection, setMyCollection]=useState([])
    useEffect(()=>{
        let quickeningRealm = [1,2,3,4]
        let myCollection = [1,2]
        setQuickeningRealm(quickeningRealm)
        setMyCollection(myCollection)
    },[])

    

    return (
        <>
            <div className="top_nft pt-5 character_details chara_profile_details">
                 <div className="character_profile_info">
                    <div className="row">
                        <div className="col-md-12 pt-5 mt-5">
                            <div className="char_details_attributes">
                                <div className="row">
                                    <div className="container">
                                        <div className="col-md-12">
                                            <div className="drops_main">
                                                <div className="tournament_drops forchar_prof">
                                                    <div className="for_selectbox"><input type="text" placeholder="Search" className="form-control" /></div>
                                                </div>
                                                <div className="tournament_drops">
                                                    <div className="for_selectbox">
                                                        <select>
                                                            <option>Race</option>
                                                            <option>Rules 1</option>
                                                            <option>Rules 2</option>
                                                            <option>Rules 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="tournament_drops">
                                                    <div className="for_selectbox">
                                                        <select>
                                                            <option>Gender</option>
                                                            <option>Male</option>
                                                            <option>Female</option>
                                                            <option>Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="tournament_drops">
                                                    <div className="for_selectbox">
                                                        <select>
                                                            <option>Sort By</option>
                                                            <option>Ascending </option>
                                                            <option>descending </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="char_parents_card mb-0">

                                            <div className="col-md-12 p-0 details_char pt-4">
                                                <div className="container">
                                                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Quickening Realm</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">My Collection</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="char_line" />
                                    <div className="container px-sm-0 px-5">
                                        <div className="tab-content mt-4 pl-2" id="pills-tabContent">
                                            
                                            <QuickeningRealm/>
                                            <QuickeningMyCollection/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
           
            </>
    )
}

export default Quickening
