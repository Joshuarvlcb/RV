import React from 'react'
import Rv from '../assets/homerv.jpeg';
import logo from '../assets/rv-logo.png';
const LandingPage = () => {
    return (
        <div className = 'landing'>
            <div className="logo-con">
                <img src={logo} className = 'logo' alt="" />
            </div>

            <ul class = 'nav-active none'>
            <li class="nav__item">
              <a href="" class="nav__link">
                Porfolio
              </a>
            </li>
            <li class="nav__item">
              <a href="" class="nav__link">
                Contact Me
              </a>
            </li>
            <li class="nav__item">
              <a href="" class="nav__link">
                Testimonial
              </a>
            </li>
            <li class="nav__item">
              <a href="" class="nav__link">
                Skills
              </a>
            </li>
            
          </ul>

            <div className="gradient"></div>

            <img src='https://images.pexels.com/photos/4263840/pexels-photo-4263840.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt="" className="landing__image" />
            <div className="landing__box">
                <div className="landing__titles">
                <div className="landing__title">
                    the <span className = 'red'>largest & most trusted</span> rv repair company
                </div>
                <div className="landing__para">
                    234,456+ people have used repaird to repair there rv
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
