import React, { useState, useEffect } from 'react'
import chat from '../assets/chat.png'
import eye from '../assets/eye.png'
import medal from '../assets/medal (1).png'
import level from '../assets/level.png'
import compass from '../assets/compass.png'
const Services = () => {
    return (
        <>
            <div className="container">
                <h2>ALL REPAIRD, ALL THE TIME</h2>
                <div className="underline"></div>
                <div className="logos">
                    <div className="logo">
                        <img src={chat} />
                        <div className="undrline"></div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi adipisci accusantium aliquam tenetur sint voluptatibus ipsum maiores voluptas doloremque. Quia quidem facilis eligendi autem cupiditate asperiores, modi possimus consectetur saepe?</p>
                    </div>
                    <div className="logo">
                        <img src={eye} />
                        <div className="undrline"></div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad dicta similique ullam voluptatibus rem, dignissimos libero ea, dolor mollitia odit tempore soluta. Explicabo a sint voluptatum inventore architecto corporis sequi!</p>
                    </div>
                    <div className="logo">
                        <img src={medal} />
                        <div className="undrline"></div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptate quo aperiam sunt libero, quas iusto quia laudantium ea ipsum dolores qui. Voluptas impedit at aut inventore vero ab? Rerum.</p>
                    </div>
                    <div className="logo">
                        <img src={level} />
                        <div className="undrline"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ipsam porro! Magnam assumenda repudiandae harum placeat optio, impedit vero perferendis vel illo esse delectus, dignissimos magni quos modi commodi! Nobis.</p>
                    </div>
                    <div className="logo">
                        <img src={compass} />
                        <div className="undrline"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quibusdam odio aspernatur non adipisci obcaecati dolor, qui, provident rerum distinctio dolore inventore vitae praesentium, corrupti soluta animi magnam perspiciatis libero?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
