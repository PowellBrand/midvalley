import React, { Component } from 'react';
import quinn from './Quinn.png';
import sondra from './Sondra.png';
import './board.css';

class Board extends Component {


    render() {
        return (
            <div>
                <div className="p-div">
                    <h1 className="hDiv">BOARD OF TRUSTEES</h1><br /><br />
                    <p>
                        The District is governed by a Board of Trustees consisting of three members elected at large, the term of service and manner of election shall be that which is set forth by Utah law. They each serve four-year terms. All Trustee Board meetings are in accordance with the Utah Open and Public Meetings Act.
                    </p>
                </div>
                <div className="board-memeber-cont">
                    <div className="b-member">
                        <img className="b-img" src={quinn} alt="Quinn Sperry" />
                        <h2>QUINN SPERRY,</h2><h3>Chairman,</h3><h4>(801)255-5428,</h4><p>quinn@mvdst.com</p><br /><p>Quinn Sperry has lived in the Midvale area for more than 30 years.  Quinn received his bachelor’s degree and juris doctorate from the University of Utah.  He is a founding partner of the Midvale based law firm Morris Sperry focusing on real estate law with an emphasis on litigation and community associations law (condominiums, townhomes, planned unit developments, etc.).</p>
                    </div>

                    <div className="b-member">
                        <img className="b-img" src={sondra} alt="Sondra Smith" />
                        <h2>SONDRA SMITH,</h2>
                        <h4>(801)699-5249,</h4>
                        <p>sondras@mvdst.com</p><br />
                        <p>Sondra was recently appointed to the Midvalley Improvement District Board of Trustees to replace retiring Board Chairman, Brent Smart in November 2016. Sondra was raised in Murray but has lived all of her married life in Midvale. She worked for Midvalley Improvement District for 28 years and is very knowledgeable about the District and its operations. Previously, her husband, Draney, served on the Board of Trustees</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Board