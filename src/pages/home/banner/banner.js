const BannerHome = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row current_index">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-lg-left text-md-left text-center">
              <div className="left_part rsp_size_img">
                {/* <img src="/assets/img/center_logo.png" alt="" /> */}

                <div className="res_font_watch pt-5">
                  <h1 className="text-lg-left text-md-left text-center ml-0">Play. Watch.</h1>
                  <span className="Play-Watch-Earn">Earn</span>
                  <p className="Battle-World-is-a my-5">Taunt Battleworld is the world’s first engane-to-earn NFT fighting game simulator developed by industry veterans from Amazon, EA, and Unity</p>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 Highest-bid">
                    <h4>25,000</h4>
                    <span>ACOLYTE WARRIORS</span>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 Highest-bid">
                    <h4>25,00</h4>
                    <span>GENESIS SKULL PASSES</span>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 Highest-bid">
                    <h4>$100,000</h4>
                    <span>PRIZE POOL IN TOURNAMENT</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-md-flex justify-content-md-center">
              <img src="/assets/img/card-banner.png" className="bounce" alt="" />
              <div className="right_part mt-xl-0 mt-lg-0 mt-md-4 resp_h_center">
                {/* <img src="/assets/img/banner_2.png" className="big_2" alt="" data-aos={"fade-left"} data-aos-easing={"linear"} data-aos-duration={"1500"} /> */}
                {/* <img src="/assets/img/banner_1.png" className="big bounce" alt="" /> */}
                {/* <img src="/assets/img/banner_3.png" className="big_3" alt="" data-aos={"fade-right"} data-aos-easing={"linear"} data-aos-duration={"1800"} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-md-flex justify-content-md-center">
          //   <div className="right_part mt-xl-0 mt-lg-0 mt-md-4 resp_h_center">
          //     <img src="/assets/img/banner_2.png" className="big_2" alt="" data-aos={'fade-left'} data-aos-easing={'linear'} data-aos-duration={'1500'} />
          //     <img src="/assets/img/banner_1.png" className="big bounce" alt="" />
          //     <img src="/assets/img/banner_3.png" className="big_3" alt="" data-aos={'fade-right'} data-aos-easing={'linear'} data-aos-duration={'1800'} />
          //   </div>
          // </div> */}

      <canvas id="canvas"></canvas>


    </>
  );
};
export default BannerHome;
