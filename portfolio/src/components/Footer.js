import "./FooterStyles.css";
import { FaPhone, FaMailBulk, FaLinkedin, FaGithub, FaSlack } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />(224) 430-7147</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />kyle.james.babcock@gmail.com</h4>
                </div>
            </div>
            <div className="right">
                <h4>About Me!</h4>
                <p>Hi everyone and thank you for taking an interest in my work! My name is Kyle Babcock and I am a Full Stack Software Engineer. I have a passion for the Front End, check out my projects and Contact me if you have any inquiries! You can find my Github, LinkedIn, and Slack profiles below! </p>
                <div className="social">
                    <a href={"https://www.linkedin.com/in/kjbabcock/"}><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    <a href={"https://github.com/KJBabcock"}><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                    <a href={"https://www.linkedin.com/in/kjbabcock/"}><FaSlack size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
