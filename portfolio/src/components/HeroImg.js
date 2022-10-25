import "./HeroImgStyles.css";
import { Link } from "react-router-dom";
import React from "react";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/computer-programmer-coding-on-laptop.jpg?itok=w9ZFG1Hz" alt="IntroImg"/>
        </div>
        <div className="content">
            <p>HI, I'M A DEVELOPER.</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
