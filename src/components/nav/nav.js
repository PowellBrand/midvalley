import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
class Nav extends Component {

    render() {
        return (
            <div className="mainNav">
                <div className="navDiv"><Link to='/'><p className="navbtn">Home</p></Link></div>
                <div className="navDiv"><Link to='/District-info'><p className="navbtn">District Info</p></Link></div>
                <div className="navDiv"><Link to='/Board'><p className="navbtn">Board</p></Link></div>
                <div className="navDiv"><Link to='/Contact'><p className="navbtn">Contact Us</p></Link></div>
                <div className="navDiv"><Link to='/Contractors'><p className="navbtn">For Contractors</p></Link></div>
                <div className="navDiv"><Link to='/Pay-my-bill'><p className="navbtn">Pay My Bill</p></Link></div>
                
            </div>
        )
    }
}
export default Nav