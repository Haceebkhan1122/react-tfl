import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchTemplates } from '../../../../actions/product-actions';
import TemplateCard from '../../../bloodtemple/template-card';

const AvailableNFTListing = () => {
  const [tab, setTab] = useState('FOR-SALE');
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
    <div className="top_nft pt-5 character_details chara_profile_details blood_template_page">
      <div className="character_profile_info">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="char_details_attributes">
              <div className="row">
                <div className="container px-sm-0 px-5">
                  <div className="col-md-12 p-0 details_char pl-2 pt-5"></div>
                </div>
                <hr className="char_line mt-3" />
                <div className="container px-sm-0 px-5">
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
                      </div>
                    </div>
                  </div>
                  <div className="row char_detail_profile_card">
                    {templates.map(template => (
                      <TemplateCard key={template.uuid} nft={template} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableNFTListing;
