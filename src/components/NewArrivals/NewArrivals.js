import React, { Component } from 'react';
import Products from '../Products/Products';


export default class NewArrivals extends Component {
    render() {
        return (
            <div className="new-arrivals text-center d-block position-relative w-100">
                <div className="container">
                    <h2>New Arrivals</h2>
                    <div className="row arrival-btn">
                        <ul className="btn-list list-unstyled" id="btn-list">
                            <li className="toggle-btn">all</li>
                            <li>women's</li>
                            <li>accessories</li>
                            <li>men's</li>
                        </ul>
                    </div>
                    <Products className={`product-item`} gridHeight={`product-grid`} />
                </div>
               
            </div>
        )
    }
}