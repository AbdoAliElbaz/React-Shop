import React, { Component, Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import NewArrivals from '../NewArrivals/NewArrivals';
import Deal from '../Deal/Deal';
import Benefit from '../benefits/Benefits';
import LatestBlog from '../LatesBlog/LatestBlog';
import "./index.css";


export default class Index extends Component {
    render() {
        return(
           <Fragment>
            <Slider/>
            <Categories/>
            <NewArrivals/>
            <Deal/>
            <Benefit/>
            <LatestBlog/>
            </Fragment>
        )
    }
}