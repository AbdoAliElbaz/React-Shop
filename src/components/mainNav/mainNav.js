import React, { Component } from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(
    fas


);

class MainNav extends Component {

    state = {
        isClicked: false,

    }




    render() {

        const isShown = this.state.isClicked;

        return (
            <div className="navbar  navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="/">Navbar</a>

                    <div className=" flex-lg-grow-0 ">
                        <ul  className={ isShown? "d-block  main-nav float-left navbar-nav-show " : "d-sm-flex d-none navbar-nav main-nav float-left" }>
                            <li className="nav-item active"><NavLink to='/'>Home <span className="sr-only">(current)</span></NavLink></li>
                            <li className="nav-item"><NavLink to='/catpage'>Shop</NavLink></li>
                            <li className="nav-item"><NavLink to='/'>Sign In</NavLink></li>
                            <li className="nav-item"><NavLink to='/'>Register</NavLink></li>
                            <li className="nav-item"><NavLink to='/contact'>contact</NavLink></li>
                        </ul>
                        <ul className="nav-users m-0 ml-lg-4 list-unstyled float-right pt-sm-3">
                            <li className="float-left">
                                <a href="/">
                                    <FontAwesomeIcon icon={['fas', 'search']} />


                                </a>
                            </li>
                            <li className="float-left">
                                <a href="/">
                                    <FontAwesomeIcon icon={['fas', 'user']} />

                                </a>
                            </li>
                            <li className="float-left">
                                <a className="shopping-car" href="/">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    <span id="checkout-items" className="checkout-items" >{this.props.count}</span> </a>
                            </li>
                            <li className="float-left ">
                                <div className='hamburger-container'
                                    onClick={() => this.setState({ isClicked: !isShown })}
                                >

                                    <FontAwesomeIcon icon={['fas', 'bars']} />

                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        )

    }
}



function mapStateToProps(state) {
    return {
        count: state.count
    }

}

export default connect(mapStateToProps)(MainNav)