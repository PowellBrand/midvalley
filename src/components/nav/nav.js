import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Nav extends Component {

    render() {
        return (
            <div>
                <Link to='/'><p className="navbtn">Home</p></Link>
                <Link to='/District-info'><p className="navbtn">District Info</p></Link>
                <Link to='/Board'><p className="navbtn">Board</p></Link>
                <Link to='/Contact'><p className="navbtn">Contact Us</p></Link>
                <Link to='/Contractors'><p className="navbtn">For Contractors</p></Link>
                <Link to='/Pay-my-bill'><p className="navbtn">Pay My Bill</p></Link>

            </div>
        )
    }
}
export default Nav