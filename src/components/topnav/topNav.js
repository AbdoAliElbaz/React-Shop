import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';




export default class TopNav extends Component {
    render() {
        return (
            <div className="topnav w-100">
                <div className="container">
                    <Row>
                        <Col>
                            <div className="top-nav-left text-uppercase">free shipping on all u.s orders over $50</div>
                        </Col>
                        <Col className="d-flex">
                            <ul className="list-unstyled ml-auto">


                                <li className="float-left currency">
                                    <a href="/"> USD
                                <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="list-unstyled currency-selection">
                                        <li> <a href="/" >cad  </a> </li>
                                        <li><a href="/">aud</a></li>
                                        <li><a href="/">eur</a></li>
                                        <li><a href="/">gbp</a></li>
                                    </ul>
                                </li>
                                <li className="float-left language">
                                    <a href="/">English
                                <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="list-unstyled language-selection">
                                        <li><a href="/">French</a> </li>
                                        <li> <a href="/"> Italian</a></li>
                                        <li><a href="/">German</a> </li>
                                        <li> <a href="/">German</a></li>

                                    </ul>
                                </li>
                                <li className="float-left account">
                                    <a href="/">My Account<i className="fas fa-angle-down"></i>
                                    </a>
                                </li>
                            </ul>

                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

}