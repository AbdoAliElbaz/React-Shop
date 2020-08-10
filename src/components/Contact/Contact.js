import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab} from '@fortawesome/free-brands-svg-icons';

library.add(
    fab

);



export default class Contact extends Component {
    render() {
        const first = {
            backgroundColor: "#3a61c9"
        }
        const sec = {
            backgroundColor: "#41a1f6"
        }
        const third = {
            backgroundColor: "#fb4343"
        }
        const forth = {
            backgroundColor: "#8f6247"
        }

        return (
            <div className="contact">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-6 contact_col">
                            <div className="contact-contents">
                                <h1>Contact Us</h1>
                                <p>There are many ways to contact us. You may drop us a line, give us a call or send an email,
                                choose
                            what suits you the most.</p>
                                <div>
                                    <p>(800) 686-6688</p>
                                    <p>info.deercreative@gmail.com</p>
                                </div>
                              
                                <div>
                                    <p>Open hours: 8.00-18.00 Mon-Fri</p>
                                    <p>Sunday: Closed</p>
                                </div>
                            </div>

                            {/* < Follow Us  */}

                            <div className="follow_us_contents">
                                <h1>Follow us : </h1>
                                <ul className="social d-flex flex-row list-unstyled">
                                    <li>
                                        <a href="" style={first}>
                                            <FontAwesomeIcon icon={['fab', 'facebook-f']} aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={sec}>
                                            <FontAwesomeIcon icon={['fab', 'twitter']} aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={third}>
                                            <FontAwesomeIcon icon={['fab', 'google-plus-g']} aria-hidden="true" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" style={forth}>
                                            <FontAwesomeIcon icon={['fab', 'instagram']} aria-hidden="true" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-6 get_in_touch_col">
                            <div className="get-in-touch-contents">
                                <h1>Get In Touch With Us!</h1>
                                <p>Fill out the form below to recieve a free and confidential.</p>
                                <form action="post">
                                    <div>
                                        <input id="input_name" className="form_input input_name input_ph" type="text" name="name"
                                            placeholder="Name" required="required" data-error="Name is required." />
                                        <input id="input_email" className="form_input input_email input_ph" type="email" name="email"
                                            placeholder="Email" required="required" data-error="Valid email is required." />
                                        <input id="input_website" className="form_input input_website input_ph" type="url" name="name"
                                            placeholder="Website" required="required" data-error="Name is required." />
                                        <textarea id="input_message" className="input_ph input_message" name="message"
                                            placeholder="Message" rows="3" required
                                            data-error="Please, write us a message."></textarea>
                                    </div>
                                    <div>
                                        <button id="review_submit" type="submit" className="red_button message_submit_btn trans_300"
                                            value="Submit">send message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

};
