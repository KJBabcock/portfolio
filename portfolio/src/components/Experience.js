import "./ExperienceStyles.css";
import { FaJsSquare, FaReact, FaPython, FaCss3, FaHtml5 } from "react-icons/fa";
import React from 'react'

const Experience = () => {
  return (
    <div className="exp">
        <div className="title">
            <h1>Proficient Software Languages</h1>
        </div>
        <div className="language-wrapper">
            <div className="language-img">
                <li><FaReact size={50} style={{ color: "#fff", marginRight: "1rem" }} /><p>React.js</p></li>
                <li><FaPython size={50} style={{ color: "#fff", marginRight: "1rem" }} /><p>Python</p></li>
                <li><FaJsSquare size={50} style={{ color: "#fff", marginRight: "1rem" }} /><p>Javascript</p></li>
                <li><FaCss3 size={50} style={{ color: "#fff", marginRight: "1rem" }} /><p>CSS</p></li>
                <li><FaHtml5 size={50} style={{ color: "#fff", marginRight: "1rem" }} /><p>HTML</p></li>
            </div>
        </div>
        <div className="backend-info">
            <h2>Databases & Back End Proficiencies</h2>
            <p>MongoDB</p><p>Fire Base</p><p>Django</p><p>SQL</p><p>Node</p>
        </div>
        <div className="title">
            <h1>Experience</h1>
        </div>
        <div className="exp-card1">
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/nk9avwwif9v1da6wh0am" alt="developer"/>
            <h2>Software Engineering Fellow</h2>
            <p>I started the General Assembly SEI Full Stack course in July, 2022, and have been working full time as a Software Engineer ever since! General Assembly gave me a great base of languages to start with, helped me narrow down my favorite aspects of the industry, and ingnited my passion for software creation and development!</p>
        </div>
        <p className="space">...</p>
        <div className="exp-card1">
            <img src="https://myareanetwork-photos.s3.amazonaws.com/bizlist_photos/f/228151_1511271394.png?0" alt="developer"/>
            <h2>Bar Staff</h2>
            <p>I have been working at Kyoto in Crystal Lake Illinois since July 2021! My main tasks are, customer service and retention, I tend the bar and make sure my customers needs are met, and I refer to our large menu to give reccomendations! I generally try to ensure everyone's needs are met and that they are having a great time! I love interacting with my customers and working with my bar team in order to give excellent service!</p>
        </div>
        <p className="space">...</p>
        <div className="exp-card1">
            <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHs7WhQTJ7GTQ/company-logo_200_200/0/1519856313202?e=2147483647&v=beta&t=6BwBhm5lHtyxmWyxy3ctbEMUEYyRAOLXho7R573ETuA" alt="developer"/>
            <h2>Motor Transport Operator</h2>
            <p>I joined the Army in 2017 and was a soldier until 2021. The Army was extremely beneficial for my professional development. The Army taught me how to truely work on a team, how to communicate effectively, and discipline as well as punctuality. I enjoyed my time in the Army, and I am proud to be a Veteran. Now I am ready to bring the skills that they taught me to the private sector!</p>
        </div>
    </div>
  )
}

export default Experience
