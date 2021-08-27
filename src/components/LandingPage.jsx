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
                <div className="landing__title">
                    the largest and most trusted rv repair company
                </div>
                <div className="landing__para">
                    234,456+ people have used repaird to repar there rv
                </div>
                <div className="landing__display">
                    <div className="landing__display__location">
                        Anywhere
                    </div>
                    <div className="landing__display__anytime">
                        Anytime
                    </div>
                    <div className="landing__display__book">
                        book
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
