import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

        return(
            <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div
                            className="footer-nav-container  d-flex flex-lg-row  flex-column mt-lg-0 mt-5 justify-content-lg-start justify-content-center align-items-lg-center text-center">
                            <a href="/">blog</a>
                            <a href="/">FAQs</a>
                            <a href="/">Contact us</a>
                        </div>
                    </div>
                    <div className="col-lg-6 ">
                        <div
                            className="footer-nav-container d-flex justify-content-lg-end align-items-lg-center justify-content-center text-center">
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/">
                                        <i className="fab fa-facebook" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fab fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fab fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fab fa-skype" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fab fa-pinterest" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="footer-nav-container text-center">
                            <div className="cr text-center">
                                ©2018 All Rights Reserverd. This template is made with <i className="far fa-heart"></i>
                                by <a href="/">Abdo Ali</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
};
