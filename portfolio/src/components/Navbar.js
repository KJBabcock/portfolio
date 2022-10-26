import "./NavbarStyles.css"
import { Link } from "react-router-dom"
import React, {useState} from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";


const Navbar = () => {
    
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" :
    "header"}>
      <Link to="/">
        <h1>Kyle J. Babcock</h1>
      </Link>
      <div className="link-git">
      <a href={"https://www.linkedin.com/in/kjbabcock/"}><FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
      <a href={"https://github.com/KJBabcock"}><FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Projects</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
            <FaBars size={20} style={{ color: "#fff" }}/>
        )}
      </div>
    </div>
  )
}

export default Navbar
