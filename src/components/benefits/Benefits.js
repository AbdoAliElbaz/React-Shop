import React , {Component} from 'react';

export default class Benefit extends Component {
    render() {

        return(
            <div className="benefit">
            <div className="container">
                <div className="row benefit-row">
                    <div className="col-lg-3 col-12 benefit-col">
                        <div className="benefit-item d-flex flex-row align-items-center">
                            <div className="benefit-icon">
                                <i className="fas fa-truck"></i>
                            </div>
                            <div className="benefit-content">
                                <h6>free shipping</h6>
                                <p>Suffered Alteration in Some Form
    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 benefit-col">
                        <div className="benefit-item d-flex flex-row align-items-center ">
                            <div className="benefit-icon">
                                <i className="far fa-money-bill-alt"></i>
                            </div>
                            <div className="benefit-content ">
                                <h6>cach on delivery</h6>
                                <p>The Internet Tend To Repeat
    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 benefit-col">
                        <div className="benefit-item d-flex flex-row align-items-center">
                            <div className="benefit-icon">
                                <i className="fas fa-undo"></i>
                            </div>
                            <div className="benefit-content">
                                <h6>45 days return</h6>
                                <p>Making it Look Like Readable
    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 benefit-col">
                        <div className="benefit-item d-flex flex-row align-items-center">
                            <div className="benefit-icon">
                                <i className="far fa-clock"></i>
                            </div>
                            <div className="benefit-content">
                                <h6>oppening all week</h6>
                                <p>8AM - 09PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    
};
