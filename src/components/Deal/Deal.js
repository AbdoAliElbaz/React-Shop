import React ,{Component} from 'react'; 


export default class Deal extends Component {
    render(){
        const Font = {
            fontSize : "40 px" 
        }

        return(
            <div className="deal-of-the-week">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="deal-of-the-week-img ">
                            <img src="images/deal_ofthe_week.png" alt="deal-of-the-week" />
                        </div>
                    </div>
                    <div className="col-lg-6  deal-of-the-week-col ">
                        <div
                            className="deal-of-the-week-content d-flex flex-column  justify-content-center align-items-center float-right">
                            <div className="section-title d-inline-block  text-center">
                                <h2 style={Font}>Deal Of The Week </h2>
                            </div>
                            <ul className="timer list-unstyled ">
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="day" className="timer-num">
                                        0
                                    </div>
                                    <div className="timer-unit">Day</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="hours" className="timer-num ">
                                        0
                                    </div>
                                    <div className="timer-unit">Hours</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="mins" className="timer-num ">
                                        0
                                    </div>
                                    <div className="timer-unit">Mins</div>
                                </li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center">
                                    <div id="secs" className="timer-num">
                                        0
                                    </div>
                                    <div className="timer-unit">Sec</div>
                                </li>
                            </ul>
                            <div className="orange-button deal-of-the-week-button">
                                <a href="/">shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}