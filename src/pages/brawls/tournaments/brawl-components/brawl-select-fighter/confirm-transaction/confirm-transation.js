import { useDispatch, useSelector } from 'react-redux';
import web3 from '../../../../../../web3/web3';
import { useState } from 'react';
import $ from 'jquery';
import axios from 'axios';

const ConfirmTransations = ({ SelectedFigther, tournament, selectedRune, onClose, goForPage }) => {
  const dispatch = useDispatch();

  const [checkTrans, SetTrans] = useState(false);
  const [isTransInProcess, setIsTransInProcess] = useState(false);

  const price = useSelector(state => state.tournaments.encodedPrice);
  const contract = useSelector(state => state.tflContract.contract);

  const user = JSON.parse(localStorage.getItem('user'));

  const confirmTransaction = async () => {
    const accounts = await web3.eth.getAccounts();
    const character = { ...SelectedFigther };

    character.rune = selectedRune || null;

    const payload = {
      playerId: user.userID,
      playerName: user.username ? user.username : 'N/A',
      characterId: character._id,
      characterAvatar: character.image,
      characterName: character.name,
      race: character.race,
      winRate: character.winRate || 0,
      brawlWin: character.win || 0,
      brawlLoose: character.loose || 0,
      level: 1,
      position: tournament.players.length + 1,
      character: character,
      createdAt: new Date().toISOString(),
    };

    const character_temp = await axios.post(`/tournament/api/v1/add-temp-player`, payload);

    if (character_temp) {
      payload.transactionId = character_temp.data.insertedId;

      if (contract) {
        try {
          setIsTransInProcess(true);
          await contract.methods.brawlRegister(tournament._id, tournament.roundsCount, payload.transactionId).send({
            from: accounts[0],
            value: web3.utils.toWei(`${tournament.entryFee}`, 'ether'),
          });
          setIsTransInProcess(false);
          $('#transCancelBtn').trigger('click');
        } catch (error) {
          setIsTransInProcess(false);
          $('#transCancelBtn').trigger('click');
          $('.modal-backdrop').remove();
          alert('Transection failed, something went wrong');
        }
      }

      character.rune = selectedRune;

      SetTrans(true);
    }
  };

  const transaction = useSelector(state => {
    if (state.tournaments.transaction && checkTrans) {
      $('#closeModal').trigger('click');
      dispatch({ type: 'REMOVE_TRANSACTION_STATE' });
      goForPage();
    }

    return state.tournaments;
  });

  return (
    <div className="modal-content transaction_confirm">
      <button type="button" id="closeModal" className="close" data-dismiss="modal" aria-label="Close"></button>

      <div className="modal-header resp_trans_pt_modal">
        <h5 className="modal-title" id="exampleModalLabel">
          Transaction Confirmation
        </h5>
        <button
          type="button"
          className="close"
          onClick={() => {
            dispatch({ type: 'REMOVE_TRANSACTION_STATE' });
            onClose();
          }}
          data-dismiss="modal"
          aria-label="Close"
        >
          <span className="cross_hides">
            <img src="/assets/img/cut.png" alt="" />
          </span>
        </button>
      </div>

      {transaction && transaction.error && transaction.error.data && (
        <div className="alert">
          <span
            className="close closebtn close"
            aria-label="Close"
            data-dismiss="modal"
            onClick={() => {
              dispatch({ type: 'REMOVE_TRANSACTION_STATE' });
              onClose();
            }}
          >
            &times;
          </span>
          <strong>Danger!{transaction.error.data.msg}</strong>
        </div>
      )}

      <div className="modal-body">
        <div className="modal_content">
          <div className="table_main select_abilites">
            <div className="card_selection">
              <div className="row ml-1 mr-1">
                <div className="table_main">
                  <div className="card_selection">
                    <div className="col-md-12">
                      <div className="priceinfo mt-3">
                        <h3>Registration Price</h3>
                        <span>
                          <img src="/assets/img/ethurem.png" alt="" />
                          <span className="entryfee">{tournament.entryFee}</span>
                        </span>
                        <p>0.01245 ETH</p>
                      </div>
                      <div className="priceinfo mt-5">
                        <h3>ESTIMATED TOTAL</h3>
                        <span>
                          <img src="/assets/img/ethurem.png" alt="" />
                          <span className="entryfee">{tournament.entryFee}</span>
                        </span>
                        <p>0.01245 ETH</p>
                      </div>
                      <button className="addMore">Add More Taunt Coins</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="select_abilites modal-footer priceinfo res_w_100 px_footer_btn">
        <div className="for_selectbox hk_hover_for_border">
          <button id="transCancelBtn" type="button" onClick={onClose} data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">
            Cancel
          </button>
        </div>

        <button disabled={!price || isTransInProcess} type="button" className="btn btn_bg_hk hk_continue bg_button_height" onClick={confirmTransaction}>
          {!price || isTransInProcess ? 'Loading...' : 'Confirm'}
        </button>
      </div>
    </div>
  );
};
export default ConfirmTransations;
