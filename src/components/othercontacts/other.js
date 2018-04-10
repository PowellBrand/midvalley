import React, { Component } from 'react'
import './other.css';

class Other extends Component {

    render() {
        return (
            <div className="otherBody">
                <div className="otherDiv">
                    <h1>OTHER CONTACTS</h1>
                    <div className="otherCont">
                        <p>South Valley Water Reclamation Facility<br />
                            (801) 566-7711
                        </p>
                        <a href="http://www.svwater.com">www.svwater.com</a>
                    </div>
                    <div className="otherCont">
                        <p>Sandy Suburban Improvement District<br />
                            (801) 561-7662
                        </p>
                        <a href="http://www.sandysid.com">www.sandysid.com</a>
                    </div>
                    <div className="otherCont">
                        <p>South Valley Sewer District<br />
                            (801) 571-1166
                        </p>
                        <a href="http://www.southvalley.dst.ut.usm">www.southvalley.dst.ut.usm</a>
                    </div>
                    <div className="otherCont">
                        <p>Cottonwood Improvement District<br />
                            (801) 943-7671
                        </p>
                        <a href="http://www.cottonwoodimprovement.org">www.cottonwoodimprovement.org</a>
                    </div>
                    <div className="otherCont">
                        <p>Midvale City<br />
                            (801) 567-7200
                        </p>
                        <a href="http://www.midvalecity.org">www.midvalecity.org</a>
                    </div>
                    <div className="otherCont">
                        <p>Sandy City<br />
                            (801) 568-7100
                        </p>
                        <a href="http://sandy.utah.gov">sandy.utah.gov</a>
                    </div>
                    <div className="otherCont">
                        <p>Murray City (Sewer Department)<br />
                        (801) 270-2440
                        </p>
                        <a href="http://www.murray.utah.gov">www.murray.utah.gov</a>
                    </div>
                    <div className="otherCont">
                        <p>Uah Division of Water Quality<br />
                        (801) 536-4300
                        </p>
                        <a href="http://www.waterquality.utah.gov">www.waterquality.utah.gov</a>
                    </div>
                </div>

            </div>
        )
    }
}
export default Other