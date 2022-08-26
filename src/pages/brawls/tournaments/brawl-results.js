import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import './tournaments.css';
import $ from 'jquery';
import { useLocation, useParams } from "react-router-dom";
import BrawlResult from '../brawl-result-components/brawl-result/brawl-result';
import BrawlStandings from '../brawl-result-components/brawl-standings/brawl-standings';
import TableHead from '../brawl-result-components/brawl-table-head/tableHead';

import { GetClosedTournment } from '../../../actions/tournament-actions';


function BrawlResults() {
    const [selectedTournament, setSelectedTournament] = useState(undefined);
    const dispatch = useDispatch()

    const location = useLocation();
    const { tournamentId } = useParams();

    const tournaments = useSelector((state) => {
        console.log('state.tournaments.closedTournaments : ', state.tournaments.closedTournaments)
        if (state.tournaments.closedTournaments && state.tournaments.closedTournaments.data && state.tournaments.closedTournaments.data.length) return state.tournaments.closedTournaments.data[0]
        else return []
    })


    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(GetClosedTournment())
    }, [location]);

    useEffect(() => {
        $("tr.onclicking").click(function () {
            $("tr.colapsingg").show(600);
            $("tr.onclicking").hide('fast');
        });
        $("span.cross_hide").click(function () {
            $("tr.colapsingg").hide(300);
            $("tr.onclicking").show(200);
        });



    }, [])

    useEffect(() => {
        console.log('Selected Tournament ', selectedTournament);

    }, [selectedTournament]);

    const SelectTournament = (tournament) => {
        if (tournament) {
            setSelectedTournament(tournament);
            // selectedTournament = tournament
        }
    };

    return (
        <>
            <div className="top_nft pt-5">
                <div className="container resp_container_w">
                    <div className="row">
                        <div className="col-md-12 pt-5">
                            <div className="title_section pt-4">
                                <h1>Brawl Results</h1>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="drops_main">

                                <div className="tournament_drops">
                                    <div className="for_selectbox">
                                        <select>
                                            <option>Brawl Rules</option>
                                            <option>No Holds Barred</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="tournament_drops">
                                    <div className="for_selectbox">
                                        <select>
                                            <option>Sort By</option>
                                            <option>Ascending </option>
                                            <option>Descending </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="table_main scroll_table_tournament">
                                <div className="scroll_inner_tournament fix_table_h_tournament">
                                    <table className="table">
                                        <TableHead />
                                        <tbody>
                                            <BrawlResult tournaments={tournaments} SelectTournament={SelectTournament} />
                                            {selectedTournament && <BrawlStandings selectedTournament={selectedTournament} />}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default BrawlResults
