import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplateCard from './template-card';
import { FetchNft } from '../../actions/product-actions';

const AllTabs = () => {
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [filteredNft, setFilteredNft] = useState([]);

  const user = useSelector(state => state.auth.user);
  const templates = useSelector(state => state.products.userTemplates);
  const contract = useSelector(state => state.tflContract.contract);

  const nfts = useSelector(state => state.products.nfts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchNft(contract));
  }, [contract]);

  useEffect(() => {
    setFilteredNft(() =>
      nfts
        .filter(nft => nft.race.toLowerCase().includes(race.toLowerCase()))
        .filter(nft => nft.name.toLowerCase().includes(keyword.toLowerCase()))
        .filter(nft => nft.gender.toLowerCase().includes(gender.toLowerCase()))
    );
  }, [keyword, race, gender, nfts]);

  return (
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
      <div className="row mb-5">
        <div className="col-md-12 pl-3">
          <div className="drops_main">
            <div className="tournament_drops forchar_prof">
              <div className="for_selectbox">
                <input type="text" placeholder="Search" className="form-control" onChange={e => setKeyword(e.target.value)} value={keyword} />
              </div>
            </div>
            <div className="tournament_drops">
              <div className="for_selectbox">
                <select
                  onChange={e => {
                    setRace(e.target.value);
                  }}
                  value={race}
                >
                  <option value={''}>Race</option>
                  <option value={'human'}>Human</option>
                  <option value={'undead'}>Undead</option>
                  <option value={'white hair'}>White hair</option>
                  <option value={'scales'}>Scales</option>
                  <option value={'squids'}>Squids</option>
                </select>
              </div>
            </div>
            <div className="tournament_drops">
              <div className="for_selectbox">
                <select
                  onChange={e => {
                    setGender(e.target.value);
                  }}
                  value={gender}
                >
                  <option value={''}>Gender</option>
                  <option value={'male'}>Male</option>
                  <option value={'female'}>Female</option>
                </select>
              </div>
            </div>
            {/* <div className="tournament_drops">
              <div className="for_selectbox">
                <select
                  onChange={e => {
                    setSort(Number(e.target.value));
                  }}
                  value={sort}
                >
                  <option value={''}>Sort By</option>
                  <option value={1}>Ascending </option>
                  <option value={-1}>Descending </option>
                </select>
              </div>
            </div> */}
            <div className="tournament_drops">
              <a href="#" className="btn btn_bg_hk mt-1 mr-3">
                SWITCH TO 3D
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row char_detail_profile_card">
        {filteredNft.map(nft => (
          <TemplateCard key={nft.uuid} nft={nft} />
        ))}
      </div>
      {!nfts.length && <h3 className="text-white">No Data Available...</h3>}
      {/* <div className="empty_state_content">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="empty_area">
                                                        <img src="/assets/img/emtpy_uper.png"  alt=""/>
                                                        <h3>You have not purchased any character, you can find out at OpenSea</h3>
                                                        <a className="btn btn_bg_hk mt-1 mr-3">GO TO OPENSEA</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
    </div>
  );
};
export default AllTabs;
