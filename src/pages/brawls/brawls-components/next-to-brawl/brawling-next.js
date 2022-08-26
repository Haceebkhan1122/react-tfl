import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';

const BrawlingNext = ({ matches }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToNextBrawl = match => {
    dispatch({
      type: 'GET-MATCH',
      data: match,
    });

    navigate(`/brawl/play/${match.tournamenID}/${match._id}`);
  };

  return (
    <>
      <div className="row">
        <div className="pt-5">
          <div className="title_section pt-4 text-left">
            <h1 className="text-left pl-3">Next to brawl</h1>
          </div>
        </div>
      </div>
      <div className="row resp_next_game_list_w">
        {matches?.map(match => (
          <div key={match._id} onClick={e => goToNextBrawl(match)} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-lg-0 mb-4">
            <div className="next_game_list">
              <div className="mini_vs_main">
                <div className="next_gamer_single">
                  <img
                    src={match.player1 && match.player1.character ? match.player1.character.image : '/assets/img/questionMark.jpg'}
                    alt=""
                    className="userr_pic"
                  />
                  <h4>
                    {match.player1 && match.player1.character ? match.player1.characterName : 'TBD'} <span>#73399</span>
                  </h4>
                </div>
                <div className="next_gamer_single">
                  <img src="/assets/img/vs.png" alt="" className="verses" />
                </div>
                <div className="next_gamer_single">
                  <img
                    src={match.player2 && match.player2.character ? match.player2.character.image : '/assets/img/questionMark.jpg'}
                    alt=""
                    className="userr_pic"
                  />
                  <h4>
                    {match.player2 && match.player2.character ? match.player2.characterName : 'TBD'}
                    <span>#73345</span>
                  </h4>
                </div>
              </div>
              <div className="bottom_game_list">
                <div className="smart_next">
                  <h4>Last Chains</h4>
                </div>
                <div className="smart_next">
                  <h4>{moment(match.createdAt).fromNow()}</h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default BrawlingNext;
