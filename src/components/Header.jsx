import { useState } from 'react';
import '../components-css/Header.css';
import 'remixicon/fonts/remixicon.css';
function Header(){
 const [isOpen, setIsOpen] = useState(false);

 const handleToggle = ()=>{
   setIsOpen(!isOpen);
 }
return(
    <>
    
    <header>
    <div className="logo">
        <a href="#" className="mj">MJ</a>
    </div>
    <nav className="navigation">
    <a href="#" className="active">
        Home
      </a>
      <a href="#about">About Me</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact Me</a>
    </nav>
    <div className="toggle-btn" onClick={handleToggle}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-3-line"} id="menu-icon" />
        </div>
    <div className="btn-container">
        <a
          href="https://drive.google.com/file/d/1IFBsYL8bbn90wNW2abt5EDsj9NPOl6Sc/view?usp=sharing"
          className="resume-btn"
          target="_blank"
        >
          Download Resume
        </a>
      </div>
</header>
<div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
    <a href="#" className="active">
      Home
    </a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact Me</a>
  </div>
    </>

)
}

export default Header;