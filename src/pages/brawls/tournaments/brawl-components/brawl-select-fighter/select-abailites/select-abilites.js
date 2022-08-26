import React, { useEffect, useState } from 'react';

const SelectAbilites = props => {
  const runes = [
    { _id: '1', name: 'Mind', key: 'mind', img: '/assets/img/rs1.png' },
    { _id: '2', name: 'Sprit', key: 'sprit', img: '/assets/img/rs2.png' },
    { _id: '3', name: 'Energy', key: 'energy', img: '/assets/img/rs4.png' },
    { _id: '4', name: 'Body', key: 'body', img: '/assets/img/rs3.png' },
    { _id: '5', name: 'Death', key: 'death', img: '/assets/img/rs5.png' },
  ];

  const { selectBoost, SelectedFigther, onClose, backToOldChooseFighter, onSelectRune } = props;
  const [selectedRune, setSelectedRune] = useState('');

  useEffect(() => {
    onSelectRune(runes.find(rune => rune._id === selectedRune));
  }, [selectedRune]);

  return (
    <div className="modal-content select_abilites new_style_modal">
      <div className="overflow-hidden position-relative">
        <div className="top_shadow">
          <img src="/assets/img/top_shadow2x.png" alt="" />
        </div>
        <div className="modal-header position-relative">
          <h5 className="modal-title" id="exampleModalLabel">
            Select Rune
          </h5>
          <button type="button" className="close" onClick={onClose} data-dismiss="modal" aria-label="Close">
            <span className="cross_hides">
              <img src="/assets/img/cut.png" alt="" />
            </span>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal_content new_style_content">
            <div className="table_main">
              <div className="card_selection">
                <div className="top_part">
                  {/* dont delete this comment */}
                  {/* <img src={SelectedFigther.file.Location} alt="" className="c" /> */}
                  {/* dont delete this comment */}
                  <img src="/assets/img/diagram_start2x.png" alt="" className="top_star_img" />
                </div>
                <h2>{SelectedFigther.characterName}</h2>
                <p>#733342</p>
                <form>
                  <div className="row stock-images for_border_color">
                    <div className="col-md-12 col-sm-12 col-12 border_color_box">
                      <div className="boots hk_only_this fielddd">
                        <form className="row">
                          {runes.map(rune => {
                            return (
                              <div key={rune._id} className="stock-images col-md-6 color_border blue">
                                <div className="exact_copy">
                                  <input id={rune._id} type="checkbox" checked={rune._id === selectedRune} onChange={() => setSelectedRune(rune._id)} />
                                  <label for={rune._id}>
                                    <div className="image">
                                      <img src={rune.img} alt="" />
                                      {rune.name}
                                      {/* <div id="field1" className="field_design">
                                    <button type="button" id="sub" className="sub" onClick={decNum}>
                                      {' '}
                                      <i className="fa fa-minus" aria-hidden="true"></i>
                                    </button>
                                    <input type="number" id="1" min="1" max="3" value={num} onChange={handleChange} />
                                    <button type="button" id="add" className="add" onClick={incNum}>
                                      <i className="fa fa-plus" aria-hidden="true"></i>
                                    </button>
                                  </div> */}
                                    </div>
                                  </label>
                                </div>
                              </div>
                            );
                          })}
                        </form>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-sm-12 col-12 for_box_border1">
                          <div className="boots">
                              <form action="#">
                                  <div className="row stock-images">
                                      <div className="exact_copy"><input id="test1" name="same-group-name" type="checkbox" /><label for="test1">
                                          <div className="image"> <img src="/assets/img/boot2.png" alt="" /> Fire</div>
                                      </label>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-12 for_box_border2">
                          <div className="boots">
                              <form action="#">
                                  <div className="row stock-images">
                                      <div className="exact_copy"><input id="test2" name="same-group-name" type="checkbox" /><label for="test2">
                                          <div className="image"> <img src="/assets/img/boot3.png" alt="" /> Earth</div>
                                      </label>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                      <div className="col-md-6 col-sm-12 col-12 for_box_border3">
                          <div className="boots">
                              <form action="#">
                                  <div className="row stock-images">
                                      <div className="exact_copy"><input id="test3" name="same-group-name" type="checkbox" /><label for="test3">
                                          <div className="image"> <img src="/assets/img/boot4.png" alt="" /> Air</div>
                                      </label>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div> */}
                  </div>
                </form>
                <div className="select_abilites modal-footer resp_px_modal_footer px-0">
                  <button type="button" className="btn back_reverse pl-0 ml-0" onClick={backToOldChooseFighter}>
                    <img src="/assets/img/back.png" alt="" /> back
                  </button>
                  <button type="button" className="btn btn_bg_hk hk_continue mr_3_px" onClick={selectBoost}>
                    Continue
                  </button>
                </div>
                {/* <div className="row ml-0 mr-0 exact_copy_resp">
                                              <div className="col-md-6">
                                                  <div className="boots hk_only_this">
                                                      <form action="#">
                                                          <div className="row stock-images">
                                                              <div className="exact_copy"><input id="test0" name="same-group-name" type="radio" /><label for="test0">
                                                                  <div className="image"> <img src="/assets/img/boot1.png" alt="" /> Magic</div>
                                                              </label>
                                                              </div>
                                                          </div>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="col-md-6 p-0 for_box_border1">
                                                  <div className="boots">
                                                      <form action="#">
                                                          <div className="row stock-images">
                                                              <div className="exact_copy"><input id="test1" name="same-group-name" type="radio" /><label for="test1">
                                                                  <div className="image"> <img src="/assets/img/boot2.png" alt="" /> Fire</div>
                                                              </label>
                                                              </div>
                                                          </div>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="col-md-6 p-0 pr-3 for_box_border2">
                                                  <div className="boots">
                                                      <form action="#">
                                                          <div className="row stock-images">
                                                              <div className="exact_copy"><input id="test2" name="same-group-name" type="radio" /><label for="test2">
                                                                  <div className="image"> <img src="/assets/img/boot3.png" alt="" /> Earth</div>
                                                              </label>
                                                              </div>
                                                          </div>
                                                      </form>
                                                  </div>
                                              </div>
                                              <div className="col-md-6 p-0 for_box_border3">
                                                  <div className="boots">
                                                      <form action="#">
                                                          <div className="row stock-images">
                                                              <div className="exact_copy"><input id="test3" name="same-group-name" type="radio" /><label for="test3">
                                                                  <div className="image"> <img src="/assets/img/boot4.png" alt="" /> Air</div>
                                                              </label>
                                                              </div>
                                                          </div>
                                                      </form>
                                                  </div>
                                              </div>
                                          </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="select_abilites modal-footer resp_px_modal_footer">
          <button type="button" className="btn back_reverse pl-0 ml-0" onClick={backToOldChooseFighter}>
            <img src="/assets/img/back.png" alt="" /> back
          </button>
          <button disabled={!selectedRune} type="button" className="btn btn_bg_hk hk_continue mr_3_px" onClick={selectBoost}>
            Continue
          </button>
        </div> */}
      </div>
      <div className="bottom_shadow">
        <img src="/assets/img/top_shadow2x.png" alt="" />
      </div>
    </div>
  );
};
export default SelectAbilites;
