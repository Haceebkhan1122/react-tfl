import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TemplateCard from './template-card';
import { FetchTemplates } from '../../actions/product-actions';

const ForSale = () => {
  const [gender, setGender] = useState('');
  const [race, setRace] = useState('');
  const [keyword, setKeyword] = useState('');
  const [sort, setSort] = useState(1);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const dispatch = useDispatch();

  const templates = useSelector(state => state.products.templates);

  useEffect(() => {
    dispatch(FetchTemplates(page, limit, keyword, race, gender));
  }, [sort, page, limit, keyword, race, gender]);

  return (
    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
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
            <div className="tournament_drops">
              <a href="#" className="btn btn_bg_hk mt-1 mr-3">
                SWITCH TO 3D
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row char_detail_profile_card">
        {templates.map(template => (
          <TemplateCard key={template.uuid} nft={template} />
        ))}
      </div>
    </div>
  );
};
export default ForSale;
