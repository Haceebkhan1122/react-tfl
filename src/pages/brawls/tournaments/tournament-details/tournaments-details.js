import '../tournaments.css';
import $ from 'jquery';
import { useEffect, useState, useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetTournment } from '../../../../actions/tournament-actions';
import SelectAbilites from '../brawl-components/brawl-select-fighter/select-abailites/select-abilites';
import ConfirmAbilites from '../brawl-components/brawl-select-fighter/confirm-abailites/confirm-abilites';
import ConfirmTransations from '../brawl-components/brawl-select-fighter/confirm-transaction/confirm-transation';
import { FetchNft, FetchTemplates } from '../../../../actions/product-actions';
import { CheckTournamentLength } from '../../../../actions/tournament-actions';
import { WarriorSignup } from '../brawl-components/brawl-select-fighter/warrior-signup/warrior-signup';
import { BuyWarrior } from '../brawl-components/brawl-select-fighter/buy-warrior/buy-warrior';

const TournamentDetails = ({ tournament, close }) => {
  const [race, setRace] = useState('');
  const [keyword, setKeyword] = useState('');
  const [SelectedFigther, SetSelectedFigther] = useState(null);
  const [selectedRune, setSelectedRune] = useState(null);
  const [chooseFighter, setChooseFighter] = useState(false);
  const [selectChooseAbilites, setSelectChooseAbilitess] = useState(false);
  const [selectConfirmAbilites, setSelectConfirmAbilites] = useState(false);
  const [selectConfirmTransaction, setSelectConfirmTransaction] = useState(false);
  const [buyWarrior, setBuyWarrior] = useState(false);
  const [warriorLogin, setWarriorLogin] = useState(false);
  const [filteredNft, setFilteredNft] = useState([]);

  const loginSelector = useSelector(state => state.auth);
  const templates = useSelector(state => state.products.templates);
  const nfts = useSelector(state => state.products.nfts);
  const tflContract = useSelector(state => state.tflContract.contract);

  const dispatch = useDispatch();

  function selectFighter() {
    setChooseFighter(true);
    console.log(chooseFighter, 'chooseFighter');
  }

  function selectBoost() {
    setSelectChooseAbilitess(false);
    setSelectConfirmAbilites(true);
  }

  function selectTransaction() {
    setSelectConfirmAbilites(false);
    setSelectConfirmTransaction(true);
    dispatch(CheckTournamentLength(tournament._id));
  }

  function onClose() {
    setChooseFighter(false);
    setSelectChooseAbilitess(false);
    setSelectConfirmAbilites(false);
    setSelectConfirmTransaction(false);
    setBuyWarrior(false);
    setWarriorLogin(false);
  }

  function backToOldChooseFighter() {
    console.log('called');
    setChooseFighter(true);
    setSelectChooseAbilitess(false);
    console.log(setSelectChooseAbilitess);
  }

  function goForPage() {
    setSelectConfirmTransaction(false);
    $('#closeModal').trigger('click');
    dispatch(GetTournment(tournament._id));
  }

  useEffect(() => {
    setFilteredNft(nfts.filter(nft => nft.race.includes(race)).filter(nft => nft.name.toLowerCase().includes(keyword.toLowerCase())));
  }, [keyword, race]);

  useEffect(() => {
    const element = document.getElementById('scrollIntoView');
    element.scrollIntoView(true);
  }, []);

  function selectAbilites(uuid) {
    const nft = nfts.find(nft => nft.uuid === uuid);
    SetSelectedFigther(nft);
    setChooseFighter(false);
    setSelectChooseAbilitess(true);
  }

  const copyTournamentID = () => {
    navigator.clipboard.writeText(tournament._id);
  };

  useEffect(() => {
    if (tflContract) {
      dispatch(FetchNft(tflContract));
    }
  }, [tflContract]);

  useEffect(() => {
    setFilteredNft(nfts);
  }, [nfts]);

  return (
    <>
      {tournament && (
        <>
          {loginSelector && !loginSelector.user && <div className="alert">login to get registered in brawl</div>}
          <tr id="scrollIntoView">
            <td colSpan="6">
              <div className="hk_colapsing">
                <div className="row">
                  <div className="col-6 mb-2">
                    <div className="d-flex align-items-center">
                      <h3>{tournament.name}</h3>
                      <h5>
                        {tournament.location}{' '}
                        <span onClick={copyTournamentID} className="copy_icon">
                          <img src="/assets/img/copy.png" alt="" />
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="col-6 text-right">
                    <span className="cross_hide">
                      <img src="/assets/img/cut.png" alt="" onClick={e => close()} />
                    </span>
                    <span className="text_color">
                      <img src="/assets/img/ethurem.png" alt="" />
                      {tournament.entryFee}
                    </span>
                  </div>
                  <div className="col-6 table_rules">
                    <div className="d-flex align-items-center">
                      <h4>Tournament Rules</h4>
                      <h6></h6>
                      {tournament.state === 'OPEN' && (
                        <p className="status open-status">
                          STATUS <span>{tournament.state}</span>
                        </p>
                      )}
                      {tournament.state === 'CLOSE' && (
                        <p className="status close-status">
                          STATUS <span>{tournament.state}</span>
                        </p>
                      )}
                      {tournament.state === 'STARTED' && (
                        <p className="status started-status">
                          STATUS <span>{tournament.state}</span>
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-6 text-right registerd">
                    <p>
                      Registered
                      <span>
                        {tournament?.players?.length}/{tournament.roundsCount}
                      </span>
                    </p>
                  </div>
                </div>
                <hr className="special_line" />
                <div className="w-100 scroll_table_pop">
                  <table className="table for_tr_bg">
                    <tr>
                      <th>Characters</th>
                      <th>race</th>
                      <th>win rate</th>
                      <th>brawl</th>
                      <th>Owner</th>
                    </tr>

                    {tournament?.players?.length ? (
                      tournament?.players?.map(player => (
                        <tr id={player.characterName}>
                          <td>
                            <span className="profile">
                              <img src={player.characterAvatar} />
                            </span>
                            <span className="user_name">{player.characterName}</span>
                          </td>
                          <td>{player.race} </td>
                          <td>{player.winRate}%</td>
                          <td>
                            {player.brawlWin} W - {player.brawlLoose} L
                          </td>
                          <td>
                            <span className="profile">
                              <img src="/assets/img/pr4.jpg" />
                            </span>
                            <span className="user_name">{player.playerName ? player.playerName : 'N/A'}</span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td>No Players Found</td>
                      </tr>
                    )}
                  </table>
                </div>
                {tournament.state === 'OPEN' && (
                  <div className="row">
                    <div className="col-md-12 text-center hk_enter">
                      {loginSelector && loginSelector.user && (
                        <>
                          <h1 className="resp_enter_tournament_font">Enter the tournament with your fighter</h1>
                          <a
                            className="btn btn_bg_hk"
                            data-toggle="modal"
                            data-target=".bd-example-modal-lg"
                            onClick={() => {
                              selectFighter();
                            }}
                          >
                            Enter
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </td>
          </tr>

          <div
            className="modal fade hk_modal_for_select bd-example-modal-lg resets"
            id="exampleModal"
            tabindex="-1"
            data-backdrop="static"
            data-keyboard="false"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg resp_modal_w_lg" role="document">
              {chooseFighter && (
                <div className="modal-content select_fighter">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Select your fighter
                    </h5>
                    <button type="button" className="close" onClick={onClose} data-dismiss="modal" aria-label="Close">
                      <span className="cross_hides">
                        <img src="/assets/img/cut.png" alt="" />
                      </span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="modal_content">
                      <div className="tournament_drops mb-4 flex-wrap mb_res_cust ">
                        <div className="for_selectbox hk_too_width mb_resp_575">
                          <input value={keyword} onChange={e => setKeyword(e.target.value)} type="text" placeholder="Search" className="form-control" />
                        </div>
                        <div className="for_selectbox">
                          <select value={race} onChange={e => setRace(e.target.value)}>
                            <option value={''}>Race</option>
                            <option value={'Human'}>Humans</option>
                            <option value={'Scales'}>Scales</option>
                            <option value={'Squids'}>Squids</option>
                            <option value={'Undead'}>Undead</option>
                            <option value={'Dead'}>Dead</option>
                            <option value={'White Hair'}>White Hair</option>
                          </select>
                        </div>
                      </div>
                      <div className="table_main exampleModal_resp">
                        <div className="card_selection scroll_list_310">
                          {filteredNft.map(nft => (
                            <div key={nft.uuid} className="custom_bg">
                              <div className="row">
                                <div className="col-md-5 col-sm-5 col-5">
                                  <div className="card_boxes">
                                    <div className="profiless">
                                      <img src={nft.thumbnail} />
                                    </div>
                                    <div className="profiless">
                                      <h4>{nft.name}</h4>
                                      <p>
                                        {/* <span>
                                          #73399 <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span> */}
                                        <span>
                                          {nft.race} <i className="fa fa-circle" aria-hidden="true"></i>
                                        </span>
                                        <span>{nft.gender}</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-4">
                                  <div className="card_boxes">
                                    <div className="profiless">
                                      <h3>
                                        {nft.win}W - {nft.loose}L
                                      </h3>
                                      <p>
                                        <span>Brawls</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-3">
                                  <div className="card_boxes">
                                    <a className="btn btn_bg_hk select_boots_page" onClick={() => selectAbilites(nft.uuid)}>
                                      Select
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectChooseAbilites && (
                <SelectAbilites selectBoost={selectBoost} SelectedFigther={SelectedFigther} onClose={onClose} backToOldChooseFighter={backToOldChooseFighter} onSelectRune={setSelectedRune} />
              )}

              {selectConfirmAbilites && (
                <ConfirmAbilites SelectedFigther={SelectedFigther} tournament={tournament} selectTransaction={selectTransaction} onClose={onClose} selectedRune={selectedRune} />
              )}

              {selectConfirmTransaction && <ConfirmTransations SelectedFigther={SelectedFigther} tournament={tournament} onClose={onClose} goForPage={goForPage} selectedRune={selectedRune} />}

              {buyWarrior && <BuyWarrior onClose={onClose} />}

              {warriorLogin && <WarriorSignup onClose={onClose} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default TournamentDetails;
