import React, {useEffect} from 'react';
import './footer.css';
import $ from 'jquery';


function Footer() {

    useEffect(() => {
            // $('#exampleModal').modal({backdrop: 'static', keyboard: false});

            $('.submit_footer').click(function(){
                var email = document.getElementById('get').value
                var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

                if(email.match(pattern)){
                    console.log('success');
                    $(this).parents('form').find('.invalid-feedback').addClass('d-block');
                    $(this).parents('form').find('.invalid-feedback').text('Your Email Address is Valid').css('color', '#45b26c');
                }
                else{
                    console.log('wrong');
                    $(this).parents('form').find('.invalid-feedback').addClass('d-block');
                    $(this).parents('form').find('.invalid-feedback').text('Please Enter Valid Email Address');
                }
            });
                // $('.relative_for_loader').mouseenter(function(){
                //     var check = $('.btn_loader_overlay');
                //     if($(check).css('display','flex')){
                //         $('.relative_for_loader').css('background-color','red;');
                //     }
                //     else if($('.btn_loader_overlay').css('display','none')){
                //         $('.relative_for_loader').css('background-color','green');
                //     }
                // });
                // $('.relative_for_loader').mouseleave(function(){
                //     if($('.btn_loader').css('display','flex')){
                //         $('.relative_for_loader').css('background-color','#3f347b');
                //         $('.relative_for_loader').css('background-color','rgb(63, 52, 123);');
                //     }
                //     else if($('.btn_loader').css('display','none')){
                //         $('.relative_for_loader').css('background-color','green');
                //     }
                // });
    },[])

    return (
        // <div className="footer">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-md-4 col-sm-6 text-md-left text-sm-left text-center">
        //                 <div className="footer_content">
        //                     <img src="/assets/img/main_logo.png"/>
        //                 </div>
        //             </div>
        //              <div className="col-md-2 col-sm-3 text-md-left text-sm-left text-center mt-3">
        //                 <div className="footer_content">
        //                     <h5 className="pb-md-4 pb-0">Discover</h5>
        //                     <ul>
        //                         <li><a href="#">About</a></li>
        //                         <li> <a href="#">Connect Wallet</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //              <div className="col-md-2 col-sm-3 text-md-left text-sm-left text-center mt-3">
        //                 <div className="footer_content">
        //                    <h5 className="pb-md-4 pb-0">Info</h5>
        //                     <ul>
        //                         <li><a href="#">FAQ</a></li>
        //                         <li><a href="#">Create Item</a></li>
        //                     </ul>
        //                 </div>
        //             </div>
        //              <div className="col-md-4 text-md-left text-sm-left text-center mt-3 col-8 mx-auto">
        //                 <div className="footer_content">
        //                     <h5 className="subscribing">Subscribe to our newsletter to get more news updates.</h5>
        //                     <form>
        //                         <div className="input-group">
        //                             <input type="email" className="form-control pr-5" id="get" placeholder="Enter your email" />
        //                             <div className="input-group-append">
        //                                 <button className="btn btn-secondary z-index-1 submit_footer" type="button">
        //                                     <img src="/assets/img/search_icon.png" />
        //                                 </button>
        //                             </div>
        //                         </div>
        //                         <div className="invalid-feedback">
        //                             Please provide a valid Email.
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //             {/* <hr className="line" /> */}
        //             <div className="col-md-12">
        //                 <p className="copy_right">All Rights Reserved 2021 TAUNT BATTLE WORLD</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 text-md-left text-sm-left text-center">
                        <div className="footer_content text-center mb-4">
                            <img src="/assets/img/main_logo.png" alt=""/>
                        </div>
                    </div>
                    {/* <hr className="line" /> */}
                    <div className="col-md-12">
                        <p className="copy_right">©2021-2022 Turnt Gaming, all rights reserved. Taunt Battleworld and all associated logos and designs are trademarks or registered trademarks of Turnt Gaming.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
