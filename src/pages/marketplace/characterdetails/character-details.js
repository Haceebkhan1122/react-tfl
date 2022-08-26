import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../characterdetails/character-details.css";
import $ from "jquery";
import { Link, useLocation } from "react-router-dom";

import CharacterBackground from "./character-details/character-background/character-bg";
import CharacterInfo from "./character-details/character-info/characterInfo";
import { useSelector, useDispatch } from "react-redux";

import { FetchTemplate } from "../../../actions/marketplace-actions";
import Loader from "../../../components/loader";
import PurchaseCompleted from "./character-details/buynow/purchase-completed";
import TransactionConfirmationDialog from "./character-details/buynow/transaction-confirmation";

function CharacterDetails() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { charactedDetailId } = useParams();
  const dispatch = useDispatch();
  let [transaction_dialog_state, setTransactionDialogState] =
    useState("transaction");

  useEffect(() => {
    dispatch(FetchTemplate(charactedDetailId));
    // if (!templates.length) dispatch(FetchTemplates(0, 20));
  }, []);

  // console.log('charactedDetailId : ', charactedDetailId);
  const template = useSelector((state) => state.marketPlace.template);
  let loading = useSelector((state) => state.marketPlace.loading);
  console.log("Template Character Details = > ", template);
  // let template = undefined;
  // const templates = useSelector(state => {
  //     let found = false;
  //     state.templates.map(temp => {
  //         if (temp.id === charactedDetailId) {
  //             template = temp;
  //             found = true;
  //         }
  //     });
  //     return state.templates
  // });

  // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
  useEffect(() => {
    $(function () {
      var hasBeenTrigged = false;
      $(window).scroll(function (e) {
        if ($(this).scrollTop() >= 1100 && !hasBeenTrigged) {
          $(".skillbar-percent").each(function () {
            var $this = $(this);
            $({ Counter: 0 }).animate(
              { Counter: $this.text() },
              {
                duration: 4000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                },
              }
            );
          });
          hasBeenTrigged = true;
        }
      });
    });

    $(document).ready(function () {
      $("tr.onclicking").click(function () {
        $("tr.colapsingg").show(600);
        $("tr.onclicking").hide("fast");
      });
      $("span.cross_hide").click(function () {
        $("tr.colapsingg").hide(300);
        $("tr.onclicking").show(200);
      });

      $(".modal-content.confirm_seletion").hide();
      $(".modal-content.transaction_confirm").show();
      $(".modal-content.place_a_bid").show();

      $("button.confirm").click(function () {
        $(this)
          .parents(".modal")
          .find(".modal-content.confirm_seletion")
          .show();
        $(this)
          .parents(".modal")
          .find(".modal-content.transaction_confirm")
          .hide();
      });

      $(
        '#exampleModal1 .modal-header .close,#exampleModal1 [data-dismiss="modal"]'
      ).on("click", function () {
        $(this)
          .parents(".modal")
          .find(".modal-content.confirm_seletion")
          .hide();
        $(this)
          .parents(".modal")
          .find(".modal-content.transaction_confirm")
          .show();
      });

      $("button.btn_bg_hk.go_marketplace").on("click", function () {
        $(".modal-open").css("overflow", "overlay");
        $(".modal-backdrop.fade.show").css("display", "none");
      });

      $(".submit").click(function () {
        var amount = document.getElementById("get_amount").value;

        if (amount.length > 2) {
          $(this).parents("body").removeClass("modal-open");
          $(this).parents("body").css("padding-right", "0");
          console.log("success bid amount");
          $(this).parents("form").find(".invalid-feedback").addClass("d-block");
          $(this)
            .parents("form")
            .find(".invalid-feedback")
            .text("")
            .css("color", "#45b26c");
          $(this)
            .parents("body")
            .find(".modal-backdrop.fade")
            .removeClass("show")
            .css("display", "none");
          // $(this).parents('form').find('input').val('');
          $(this).parents(".modal").find("form").trigger("reset");
          $(this)
            .parents("body")
            .find(".modal")
            .removeClass("show")
            .css("display", "none");
        } else {
          console.log("wrong bid amount");
          $(this).parents("form").find(".invalid-feedback").addClass("d-block");
          $(this)
            .parents("form")
            .find(".invalid-feedback")
            .text("Please Enter Your Correct Amount")
            .css("color", "red");
        }
      });

      function enforce_maxlength(event) {
        var t = event.target;
        if (t.hasAttribute("maxlength")) {
          t.value = t.value.slice(0, t.getAttribute("maxlength"));
        }
      }
      document.body.addEventListener("input", enforce_maxlength);
    });
  }, []);

  var skills = [{ type: "Haseeb", level: 60 }];

  // console.log(count);

  function closeModal() {
    setTransactionDialogState("transaction");
  }

  function changeDialogState() {
    setTransactionDialogState("purchase");
  }

  return !loading ? (
    <>
      <div className="top_nft pt-5 character_details">
        <CharacterBackground />
        <CharacterInfo />
      </div>

      <div
        className="modal fade hk_modal_for_select bd-example-modal-lg only_for_char_det"
        id="exampleModal1"
        tabindex="-1"
        data-backdrop="static"
        data-keyboard="false"
        role="dialog"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered  modal-lg"
          role="document"
        >
          {transaction_dialog_state === "transaction" ? (
            <TransactionConfirmationDialog
              close={closeModal}
              confirm={changeDialogState}
            />
          ) : (
            <PurchaseCompleted close={closeModal} />
          )}
        </div>
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content confirm_seletion place_a_bid">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Place a bid
              </h5>
            </div>
            <div className="modal-body">
              <div className="modal_content">
                <div className="table_main select_abilites bough_fight_main placing_bid">
                  <div className="card_selection">
                    <div className="top_part">
                      <img
                        src="/assets/img/place_bid.png"
                        className="bid_person"
                        alt=""
                      />
                    </div>
                    <form id="myForm">
                      <div className="row ml-1 mr-1">
                        <div className="col-md-12 ">
                          <div className="tournament_drops">
                            <div className="for_selectbox res_w_for_selectbox">
                              {/* <input type="number" placeholder="Enter bid Amount" oninput="numberOnly(this.id);" maxlength="4" id="bid_amount" className="form-control" /> */}
                              <input
                                type="number"
                                className="form-control"
                                id="get_amount"
                                placeholder="Enter bid Amount"
                                min="0"
                                max="99"
                                maxlength="4"
                              />
                            </div>
                            <div className="invalid-feedback text-left">
                              Enter bid Amount
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <div className="splash align-items-center">
                            <div className="splash_content">
                              <h4>GAS FEE</h4>
                            </div>
                            <div className="splash_content">
                              <p>
                                <img src="/assets/img/ethurem.png" alt="" />{" "}
                                20.00 <span>0.0126 ETH</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 mb-2">
                          <div className="splash">
                            <div className="splash_content">
                              <h4 className="pb_5_px">ESTIMATED TOTAL</h4>
                            </div>
                            <div className="splash_content">
                              <p>
                                <img src="/assets/img/ethurem.png" alt="" />{" "}
                                20.00 <span>0.0126 ETH</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="select_abilites modal-footer priceinfo res_px_modal_footer flex-nowrap">
                            <div className="for_selectbox hk_hover_for_border">
                              <Link to="/MarketPlace">
                                <button
                                  type="button"
                                  data-dismiss="modal"
                                  aria-label="Close"
                                  className="btn btn_bg_hk hk_continue with_borders"
                                >
                                  Cancel
                                </button>
                              </Link>
                            </div>
                            <button
                              type="button"
                              className="btn btn_bg_hk hk_continue go_marketplace submit position-relative h_46_btnjust_shape"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* <div className="select_abilites modal-footer priceinfo res_px_modal_footer">
                                                <div className="for_selectbox hk_hover_for_border">
                                                    <Link to="/MarketPlace">
                                                        <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                                                    </Link>
                                                </div>
                                                <button type="button" className="btn btn_bg_hk hk_continue go_marketplace submit">Submit</button>
                                            </div> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="select_abilites modal-footer priceinfo res_px_modal_footer flex-nowrap">
                            <div className="for_selectbox hk_hover_for_border">
                                <Link to="/MarketPlace">
                                    <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn_bg_hk hk_continue with_borders">Cancel</button>
                                </Link>
                            </div>
                            <button type="button" className="btn btn_bg_hk hk_continue go_marketplace">Submit</button>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default CharacterDetails;
