import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

class Contact extends Component {


    render() {
        return (
            <div className="contactBody">
                <div className="contactDiv">
                    <div className="contCard">
                        <h2 className="contacth2">Our offices are located at: </h2>
                        <p>160 E. 7800 South<br />Midvale, Utah 84047</p>
                        <h2>Phone:</h2>
                        <a href="tel:801-255-7321 ">(801) 255-7321 </a>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">General Manager</h2>
                        <p>Brad Powell, P.E.<br />Office: (385) 351-2751<br />Cell: (801) 971-6038</p>
                        <a href="mailto:bradp@mvdst.com">bradp@mvdst.com </a>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">Office Manager</h2>
                        <p>Cathy Kingsbury<br />(385) 351-2747</p>
                        <a href="mailto:cathyk@mvdst.com">cathyk@mvdst.com</a>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">Financial Officer</h2>
                        <p>Brent Christensen<br />(385) 351-2746</p>
                        <a href="mailto:brentc@mvdst.com">brentc@mvdst.com</a>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">Attorney</h2>
                        <p>brentc@mvdst.com</p>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">Field Supervisor</h2>
                        <p>Marc Jones.<br />Office: (385) 351-2748<br />Cell: (801) 209-6086</p>
                        <a href="mailto:marcj@mvdst.com">marcj@mvdst.com</a>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">Operators</h2>
                        <p>Collin Child (801) 209-6090<br />
                        Fred Phillips (801) 209-6087<br/>
                        Jared Syme (801) 209-6088<br/>
                        Zeth Docter (801) 209-6089
                        </p>
                    </div>
                    <div className="contCard">
                        <h2 className="contacth2">Our Mailing address is:</h2>
                        <p>P.O. Box 145<br />Midvale, UT 84047-0145</p>
                        <h2 className="contacth2">Fax:</h2>
                        <p>(801) 562-2513</p>
                    </div>
                    <Link to='/Other-Contacts'><p>Other Contacts</p></Link>
                </div>
            </div>
        )
    }
}
export default Contact