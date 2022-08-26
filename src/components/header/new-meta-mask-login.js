const NewMetaMaskLogin = ({ closeLogin, setShowMetaForm, setShowForgotPassword, connectWalletHandler }) => {
  return (
    <div className="modal-content quickening_loader">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Connect With
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={e => {
            e.stopPropagation();
            setShowMetaForm(false);
            closeLogin();
          }}
        >
          <span className="cross_hides">
            <img src="/assets/img/cut.png" alt="" />
          </span>
        </button>
      </div>
      <div className="modal-body">
        <div className="modal_content">
          <div className="table_main select_abilites">
            <div className="card_selection">
              <div className="row ml-1 mr-1 loeaderss">
                <img src="/assets/img/meta_mask.png" alt="" />
                <h5 className="modal-title mt-3" id="exampleModalLabel">
                  Metamask
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login mb-3">
        <div className="custom_border hk_hover_for_border">
          {/* <Link to="/Quickening"> */}
          <button
            type="button"
            className="btn btn_bg_hk hk_continue with_borders"
            onClick={e => {
              e.stopPropagation();
              setShowMetaForm(false);
              setShowForgotPassword(false);
            }}
          >
            Cancel
          </button>
          {/* </Link> */}
        </div>
        {/* <Link to="/CharacterProfileDetails"> */}
        <button
          type="button"
          data-backdrop="static"
          data-keyboard="false"
          className="btn btn_bg_hk hk_continue quickening_continue"
          data-dismiss="modal"
          aria-label="Close"
          onClick={e => {
            e.stopPropagation();
            connectWalletHandler();
          }}
        >
          Connect
        </button>
        {/* </Link> */}
      </div>
      <div className="select_abilites modal-footer priceinfo meta_mask flex-nowrap resp_btn_adjust_login col-md-12">
        <div className="w-100">
          {/* <button className="w-100 d-flex align-items-center justify-content-center bg-transparent border-0">
                <span className="arrow_green">
                    <img src="/assets/img/greenarrowright2x.png" alt="" />
                </span>
                <span className="success_text_meta_mask">
                    Connect with email
                </span>
            </button> */}
        </div>
      </div>
    </div>
  );
};
export default NewMetaMaskLogin;
