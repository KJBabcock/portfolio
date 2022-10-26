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
            <p>Hello, I'M KYLE BABCOCK, REACT ENGINEER.</p>
            <h1>Welcome To My Portfolio!</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <a href="https://docs.google.com/document/d/15cKvvnNsrfexAz8InSuR_Aq_x0PcsH0z2U5JtHnpILQ" className="btn btn-light">Resume</a>
            </div>
        </div>
    </div>
  )
}

export default HeroImg
