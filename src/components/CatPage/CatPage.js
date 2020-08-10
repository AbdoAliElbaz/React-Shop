import React, { Component, Fragment } from 'react';
import Benefit from '../benefits/Benefits';
import Products from '../Products/Products';
import "./CatPage.css";



export default class CatPage extends Component {

    render() {
        const InpStyle = {
            border: "0",
            color: "#f6931f",
            fontWeight: "bold"

        }

        return (

            <Fragment>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-2">

                            <div className="sidebar">
                                <div className="sidebar-section">
                                    <div className="sidebar-title">
                                        <h5>Product Category</h5>
                                    </div>
                                    <ul className="sidebar-categories">
                                        <li><a href='/'>Men</a></li>
                                        <li className="active"><a href='/'><span><i className="fa fa-angle-double-right"
                                            aria-hidden="true"></i></span>Women</a></li>
                                        <li><a href='/'>Accessories</a></li>
                                        <li><a href='/'>New Arrivals</a></li>
                                        <li><a href='/'>Collection</a></li>
                                        <li><a href='/'>Shop</a></li>
                                    </ul>
                                </div>

                                {/* Price Range Filtering  */}
                                <div className="sidebar-section">
                                    <div className="sidebar-title">
                                        <h5>Filter by Price</h5>
                                    </div>
                                    <p>
                                        <input type="text" id="amount" style={InpStyle} />
                                    </p>
                                    <div id="slider-range"></div>
                                    <div className="filter-button"><span>filter</span></div>
                                </div>

                                {/* Sizes  */}
                                <div className="sidebar-section">
                                    <div className="sidebar-title">
                                        <h5>Sizes</h5>
                                    </div>
                                    <ul className="checkboxes">
                                        <li><i className="far fa-square"></i><span>S</span></li>
                                        <li className="active"><i className="far fa-square" aria-hidden="true"></i><span>M</span></li>
                                        <li><i className="far fa-square"></i><span>L</span></li>
                                        <li><i className="far fa-square"></i><span>XL</span></li>
                                        <li><i className="far fa-square"></i><span>XXL</span></li>
                                    </ul>
                                </div>

                                {/* Color  */}
                                <div className="sidebar-section">
                                    <div className="sidebar-title">
                                        <h5>Color</h5>
                                    </div>
                                    <ul className="checkboxes">
                                        <li><i className="far fa-square"></i><span>Black</span></li>
                                        <li className="active"><i className="far fa-square" aria-hidden="true"></i><span>Pink</span></li>
                                        <li><i className="far fa-square"></i><span>White</span></li>
                                        <li><i className="far fa-square"></i><span>Blue</span></li>
                                 
                                    
                                    </ul>
                                    <div className="show-more">
                                        <span><span>+</span>Show More</span>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* Main Content  */}
                        <div className="col-12 col-md-10">
                            <div className="container">
                                <div className="main-content">

                                    {/* Products */}

                                    <div className="products-iso">
                                        <div className="row">
                                            <div className="col">

                                                {/* Product Sorting  */}
                                                <div className="product-sorting-container product-sorting-container-top">
                                                    <ul className="product-sorting">
                                                        <li>
                                                            <span className="type-sorting-text">Default Sorting</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <ul className="sorting-type">
                                                                <li className="type-sorting-btn">
                                                                    <span>Default Sorting</span></li>
                                                                <li className="type-sorting-btn">
                                                                    <span>Price</span></li>
                                                                <li className="type-sorting-btn">
                                                                    <span>Product Name</span></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <span>Show</span>
                                                            <span className="num-sorting-text">6</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <ul className="sorting-num">
                                                                <li className="num-sorting-btn"><span>6</span></li>
                                                                <li className="num-sorting-btn"><span>12</span></li>
                                                                <li className="num-sorting-btn"><span>24</span></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <div className="pages d-flex flex-row align-items-center">
                                                        <div className="page-current">
                                                            <span>1</span>
                                                            <ul className="page-selection">
                                                                <li><a href='/'>1</a></li>
                                                                <li><a href='/'>2</a></li>
                                                                <li><a href='/'>3</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="page-total"><span>of</span> 3</div>
                                                        <div id="next-page" className="page-next"><a href='/'>
                                                            <i className="fas fa-long-arrow-alt-right"></i></a></div>
                                                    </div>

                                                </div>


                                                <Products className={`product-item-cat`} gridHeight={`product-grid-cat`} />
                                                <div className="product-sorting-container product-sorting-container-bottom clearfix">
                                                    <ul className="product-sorting">
                                                        <li>
                                                            <span>Show:</span>
                                                            <span className="num-sorting-text">04</span>
                                                            <i className="fa fa-angle-down"></i>
                                                            <ul className="sorting-num">
                                                                <li className="num-sorting-btn"><span>01</span></li>
                                                                <li className="num-sorting-btn"><span>02</span></li>
                                                                <li className="num-sorting-btn"><span>03</span></li>
                                                                <li className="num-sorting-btn"><span>04</span></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                    <span className="showing-results">Showing 1–3 of 12 results</span>
                                                    <div className="pages d-flex flex-row align-items-center">
                                                        <div className="page-current">
                                                            <span>1</span>
                                                            <ul className="page-selection">
                                                                <li><a href='/'>1</a></li>
                                                                <li><a href='/'>2</a></li>
                                                                <li><a href='/'>3</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="page-total"><span>of</span> 3</div>
                                                        <div id="next-page-1" className="page-next"><a href='/'>
                                                            <i className="fas fa-long-arrow-alt-right"></i>

                                                        </a></div>
                                                    </div>

                                                </div>



                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>

                        </div>
                    </div>
                </div>



                <Benefit />
            </Fragment>

        )
    }

};
