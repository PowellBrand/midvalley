import React, { Component } from 'react';
import './home.css';
// import img1 from './img1.png';
// import img2 from './img2.png';

class Home extends Component {

    
    
    

    render() {
        return (
            <div className="mainBody">

                {/* slideshow */}
                {/* <div className="slideshow-container">
                    <div class="mySlides fade">
                        <div class="numbertext">1 / 3</div>
                        <img src={img1} className="homeImg" />
                        <div class="text">Caption Text</div>
                    </div>

                    <div class="mySlides fade">
                        <div class="numbertext">2 / 3</div>
                        <img src={img2} className="homeImg" />
                        <div class="text">Caption Two</div>
                    </div>

                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>

                </div>
                <br />
                <div className="imgDot">
                    <span class="dot" onclick="currentSlide(1)"></span>
                    <span class="dot" onclick="currentSlide(2)"></span>
                    <span class="dot" onclick="currentSlide(3)"></span>
                </div> */}

                {/* end slideshow */}

                <div className="p-div">
                    <h1 className="hDiv">WHAT WE DO</h1>
                    <br/>
                    <p>As adopted by the Board of Trustees, the purpose of the District is to provide public sanitary sewer collection and conveyance services to the residents situated within the legal boundaries of the District, and to exercise all powers conferred upon the District by the laws of the State of Utah.<br/><br/>

    The Trustees promulgate policies, rules, and regulations to provide sanitary sewer collecting in a safe, efficient, and fiscally responsible manner.<br/><br/>

    We take pride in the fact that we have not had a sewer system backup in the past 6 years. Using a state-of-the-art closed circuit television (CCTV) system, we televise all of the lines in our system every 12 to 14 months. All of our lines are cleaned every 12 months or more, depending on line condition and other external circumstances.<br/><br/>

    All of the wastewater (sewer)  from Midvalley Improvement District flows to the South Valley Water Reclamation Facility.
</p>
                </div>
            </div>
        )
    }
}
export default Home