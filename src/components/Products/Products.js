import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { increment, decrement } from '../../actions/checkout';


class Products extends Component {


    state = {
        products : [], 
        
    }
    componentDidMount() {
        axios.get('js/new.json').then(res => this.setState({ products: res.data.products }))
    }


    renderProducts = (product ) => {
        return (
            
            <div key={product.id} className={` ${this.props.className} men   float-left`} >
                <div className="product-discount product product-filter">
                    <div className="product-image">
                        <img src={product.img} alt="product_1" />
                    </div>
                    <div className="favorite .favorite-left position-absolute"></div>
                    <div
                        className="product-bubble product-bubble-orange product-bubble-right d-flex align-items-center justify-content-center position-absolute">
                        -$20
                </div>
                    <div className="product-info">
                        <h6 className="product-name">
                            <a href="single.html">{product.name}</a></h6>
                        <div className="product-price"> ${product.price} <span></span> </div>
                    </div>
                </div>
                <div className="orange-button add-to-cart-button" onClick={this.props.increase}><a className="add-to-cart">add to cart</a></div>
            </div>
        )

    }

  

    render() {

        const { products } = this.state;


        return (
            <div className={` ${this.props.gridHeight} `}>
                {products.map((product) => {
                    return this.renderProducts(product)
                }

                )}
            </div>
            
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        increase: () => dispatch(increment()),
        decrease: () => dispatch(decrement())
    }

}


export default connect(null, mapDispatchToProps)(Products)
