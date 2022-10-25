import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>My name is Kyle Babcock and I am an Army Veteran who, after the pandemic, decided to switch career paths and learn Software Engineering! I was formerly trained in team building and innovation. Now I am ready to bring my skills together in order to work with amazing people and create works of art as a full stack developer! Feel free to contact me about any and all inquiries!</p>
            <Link to="/contact">
                <button className="btn">Contact</button> 
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://1qkeyv41u1op36vgbm47q0i6-wpengine.netdna-ssl.com/wp-content/uploads/2022/04/Popularity-of-Reactjs.png" className="img" alt="img" />
                </div>
                <div className="img-stack bottom">
                    <img src="https://www.upwork.com/catalog-images-resized/a40a92ca108cd60c3ea4fc4750735f0c/large" className="img" alt="img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent
