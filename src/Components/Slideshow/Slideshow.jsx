
import React, { useState, useEffect } from 'react';
import './Slideshow.css';
import Contact from '../Contact/Contact';
import logo from "../../images/logo.jfif"


function Slideshow({ images, duration }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, duration);

        return () => clearInterval(interval);
    }, [images.length, duration]);

    return (
        <div className="slideshow" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
            <div className="overlay">
                <nav>
                    <img src={logo} alt="" />
                </nav>
                <h1 style={{color: "white"}}><marquee behavior="" direction="">Mountain Top
                    Experience Registration Online...This is a simple
                    registration forms participants have to
                    fill.</marquee></h1><br />
                    <div className="Hero container" id="Hero">
            <div className="hero-text">
                <h1>End Time Watchers House <br /> International</h1>
                <p>
                    We are called to watch, to pray, to raise men of 
                    stature in the spirit. Men who will stand with God, and 
                    for God in their generation. Watchmen who will watch, 
                    so much so, that the influence of the move of God will 
                    implicate their generation, and also the generation to come. <br />
                    SO JOIN US

                </p>
            </div>

        </div>
                  
            </div>
        </div>
    );
};

export default Slideshow;
