import React, {Component} from 'react'; 


export default class Categories extends Component {
    render() {
        return(
            <div className="categories">
            <div className="container">
                <div className="cate cate1 ">
                    <button className="btn text-uppercase orange-b white">women's</button>
                </div>
                <div className="cate cate2 ">
                    <button className="btn text-uppercase orange-b white">accesories's</button>
                </div>
                <div className="cate cate3 ">
                    <button className="btn text-uppercase orange-b white">men's</button>
                </div>
            </div>
        </div>
        )
    }
}