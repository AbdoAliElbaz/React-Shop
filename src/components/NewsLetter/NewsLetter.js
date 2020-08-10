import React, { Component } from 'react'


export default class NewsLetter extends Component {
    render() {
        return(
            <div className="news-letter">
            <div className="container">
                <div className="row row-newsletter">
                    <div className="col-lg-6 col-12">
                        <div
                            className="newsletter-text d-flex flex-column justify-content-center  align-items-lg-start align-items-center">
                            <h4>Newsletter</h4>
                            <p>Subscribe to our newsletter and get 20% off your first purchase
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div
                            className="newsletter-form d-flex flex-column justify-content-center align-items-lg-end  align-items-center">
                            <form action="post"  className="d-flex  align-items-center justify-content-center ">
                                <input type="text" id="newsletter-email" placeholder="your email" required="required"
                                    data-error="valid email is required." />
                                <button id="newsletter-submit" className="newsletter-submit-button"
                                    value="sumit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
};
