import React, {useState} from "react";
import "./header.css";

const Header = () => {
    /*==========================Toggle Menu============================*/
    const[Toggle, showMenu] = useState(false);

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Trench Kid</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <a href="#home" className="nav__link active-link">
                        <i className="uil uil-estate nav__icon"></i> 
                        Home
                    </a>
                </ul>

                <ul className="nav__list grid">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i> 
                        About
                    </a>
                </ul>

                <ul className="nav__list grid">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i> 
                        Skills
                    </a>
                </ul>

                <ul className="nav__list grid">
                    <a href="#services" className="nav__link">
                        <i className="uil uil-briefcase-alt nav__icon"></i> 
                        Services
                    </a>
                </ul>

                <ul className="nav__list grid">
                    <a href="#portfolio" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i> 
                        Portfolio
                    </a>
                </ul>

                <ul className="nav__list grid">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i> 
                        Contact 
                    </a>
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu (!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu (!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header