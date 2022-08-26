
import Slider from "react-slick";


const Avatars = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> <img src="/assets/img/slider_arrow_left.png" alt="" /> </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> <img src="/assets/img/slider_arrow_left.png" alt="" /></div>
            </div>
        ),
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            },

        },
        {
            breakpoint: 601,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },

        }]
    };

    return (
        <div className="hot_bids">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title_section res_font_watch">
                            <h1 className="mb-0">Buy Now</h1>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div>
                        <a>
                            <div className="full_box slider">
                                <div className="card_hk card-change">
                                    <div className="for_image">
                                        <img src="/assets/img/white-hair.png" alt="" />
                                    </div>
                                    <div className="box_main">
                                        <button>
                                            <div class="media">
                                                <img class="mr-2" src="/assets/img/devil.png" />
                                                <div class="media-body">
                                                    <h5 class="mt-0">White Hair Dark Lord</h5>
                                                    <h6 class="my-0">By Taunt Battleworld</h6>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="content_for">
                                            <button className="btn btn-primary for_home"> <span>Top Bid</span> <img src="/assets/img/ethurem.png" alt="" />  1800</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a>
                            <div className="full_box slider">
                                <div className="card_hk card-change">
                                    <div className="for_image">
                                        <img src="/assets/img/undeath.png" alt="" />
                                    </div>
                                    <div className="box_main">
                                        <button>
                                            <div class="media">
                                                <img class="mr-2" src="/assets/img/devil.png" />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Undeath Zombie Queen</h5>
                                                    <h6 class="my-0">By Taunt Battleworld</h6>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="content_for">
                                            <button className="btn btn-primary for_home"> <span>Top Bid</span> <img src="/assets/img/ethurem.png" alt="" />  1800</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a>
                            <div className="full_box slider">
                                <div className="card_hk card-change">
                                    <div className="for_image image-wrap">
                                        <img src="/assets/img/apia.png" alt="" />
                                    </div>
                                    <div className="box_main">
                                        <button>
                                            <div class="media">
                                                <img class="mr-2" src="/assets/img/devil.png" />
                                                <div class="media-body">
                                                    <h5 class="mt-0">Apia I White Hair</h5>
                                                    <h6 class="my-0">By Taunt Battleworld</h6>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="content_for">
                                            <button className="btn btn-primary for_home"> <span>Top Bid</span> <img src="/assets/img/ethurem.png" alt="" />  1800</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                {/* <div className="slider home_lider">
                <div className="content_inner_slider">
                    <Slider {...settings}>
                        <div>
                            <a href="#">
                                <div className="full_box slider">

                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/char1.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">PURCHASING !</button>
                                                <div className="botton_hover">
                                                    <button className="btn btn-primary place_bid">Place a bid <span className="drop_arrow"><img src="/assets/img/white_dropdown.png" alt="" /></span></button>
                                                    <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for">
                                                <h3>Thrutlauz</h3>
                                            </div>
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/user2.png" alt="" className="mini_circle" />
                                                    <h5>0X54Fc676</h5>
                                                </div>
                                                <button className="btn btn-primary for_home"> <img src="/assets/img/ethurem.png" alt="" />  1800</button>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <h5><span className="drop_arrow"><img src="/assets/img/green_dropdown.png" alt="" /></span> Highest bid <b>0.001 $TAUNT</b></h5>
                                                <span className="for_align"><h6>New Bid</h6>< img src="/assets/img/fire.png" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/char2.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">PURCHASING !</button>
                                                <div className="botton_hover">
                                                    <button className="btn btn-primary place_bid">Place a bid <span className="drop_arrow"><img src="/assets/img/white_dropdown.png" alt="" /></span></button>
                                                    <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for">
                                                <h3>Cols</h3>
                                            </div>
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/user_icon.png" alt="" className="mini_circle" />
                                                    <h5>0X54Zc689</h5>
                                                </div>
                                                <button className="btn btn-primary for_home"> <img src="/assets/img/ethurem.png" alt="" /> 2000</button>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <h5><span className="drop_arrow"><img src="/assets/img/green_dropdown.png" alt="" /></span> Highest bid <b>0.001 $TAUNT</b></h5>
                                                <span className="for_align"><h6>New Bid</h6>< img src="/assets/img/fire.png" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/char3.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">PURCHASING !</button>
                                                <div className="botton_hover">
                                                    <button className="btn btn-primary place_bid">Place a bid <span className="drop_arrow"><img src="/assets/img/white_dropdown.png" alt="" /></span></button>
                                                    <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for">
                                                <h3>Collazig</h3>
                                            </div>
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/profile.png" alt="" className="mini_circle" />
                                                    <h5>0X54Ax680</h5>
                                                </div>
                                                <button className="btn btn-primary for_home"> <img src="/assets/img/ethurem.png" alt="" />  2500</button>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <h5><span className="drop_arrow"><img src="/assets/img/green_dropdown.png" alt="" /></span> Highest bid <b>0.001 $TAUNT</b></h5>
                                                <span className="for_align"><h6>New Bid</h6>< img src="/assets/img/fire.png" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/char4.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">PURCHASING !</button>
                                                <div className="botton_hover">
                                                    <button className="btn btn-primary place_bid">Place a bid <span className="drop_arrow"><img src="/assets/img/white_dropdown.png" alt="" /></span></button>
                                                    <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for">
                                                <h3>Gaelalaer</h3>
                                            </div>
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/user2.png" alt="" className="mini_circle" />
                                                    <h5>0X59Yc670</h5>
                                                </div>
                                                <button className="btn btn-primary for_home"> <img src="/assets/img/ethurem.png" alt="" />  2300</button>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <h5><span className="drop_arrow"><img src="/assets/img/green_dropdown.png" alt="" /></span> Highest bid <b>0.001 $TAUNT</b></h5>
                                                <span className="for_align"><h6>New Bid</h6>< img src="/assets/img/fire.png" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <div className="full_box slider">
                                    <div className="card_hk">
                                        <div className="for_image">
                                            <img src="/assets/img/char2.png" alt="" />
                                            <div className="on_hover">
                                                <button className="btn btn-primary purchasing">PURCHASING !</button>
                                                <div className="botton_hover">
                                                    <button className="btn btn-primary place_bid">Place a bid <span className="drop_arrow"><img src="/assets/img/white_dropdown.png" alt="" /></span></button>
                                                    <button className="btn btn-primary heart_wishlist"><i className="fa fa-heart-o" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box_main">
                                            <div className="content_for">
                                                <h3>Cols</h3>
                                            </div>
                                            <div className="content_for">
                                                <div className="prf">
                                                    <img src="/assets/img/user_icon.png" alt="" className="mini_circle" />
                                                    <h5>0X54Zc689</h5>
                                                </div>
                                                <button className="btn btn-primary for_home"> <img src="/assets/img/ethurem.png" alt="" /> 2000</button>
                                            </div>
                                            <hr className="hr_line" />
                                            <div className="content_for">
                                                <h5><span className="drop_arrow"><img src="/assets/img/green_dropdown.png" alt="" /></span> Highest bid <b>0.001 $TAUNT</b></h5>
                                                <span className="for_align"><h6>New Bid</h6>< img src="/assets/img/fire.png" alt="" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Slider>

                </div>
            </div> */}
            </div>
        </div>

    )
}
export default Avatars