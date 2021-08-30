import React from 'react'
import Rv from '../assets/homerv.jpeg';
import logo from '../assets/rv-logo.png';
const LandingPage = () => {
    return (
        <div className = 'landing'>
            <div className="logo">
                <img src={logo} className = 'logo' alt="" />
            </div>
            <div className="gradient"></div>
            <img src={Rv} alt="" className="landing__image" />
            <div className="landing__box">
                <div className="landing__titles">
                <div className="landing__title">
                    the <span className = 'red'>largest & most trusted</span> rv repair company
                </div>
                <div className="landing__para">
                    234,456+ people have used repaird to repar there rv
                </div>
                </div>
                
                <div className="landing__display">
                    <div className="landing__display__location">
                        <div className="item">
                        <div className="location">location</div>
                            Anywhere
                        </div>
                    </div>
                    <div className="landing__display__anytime">
                        <div className="item">
                        <div className="date">dates</div>
                            Anytime
                        </div>
                    </div>
                    <div className="landing__display__book">
                        <div className="item">
                            book
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
