import React, { useState } from 'react';
import "./Header.css";
import logo from "../pic/logo.png"

const Header = () => {

    //header top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classNameList.toggle("active", window.scrollY > 100)
    })


    return (
        <>
            <header className='header'>

                <nav className="navbar navbar-expand-lg navbar-light  fixed-top ">
                    <div className="container-fluid">
                        <a className="navbar-brand  logo" href="#">
                        <img  style={{ width: "40px"  }}  src={logo} alt='' />
                        <strong>  Naiim</strong>
                        </a>
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse   navlink " id="navbarSupportedContent">
                            <ul className="navbar-nav   ml-auto link uppercase">
                                
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#features">Features</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#portfolio">Portfolio</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#resume">Resume</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#blog">Blog</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#contact">Contact</a>
                                </li>

                                <li>
                                    <button className='home-btn'>Log In</button>
                                </li>

                            </ul>
                           
                        </div>
                    </div>
                </nav>

            </header>

          
        </>
    )
}

export default Header
