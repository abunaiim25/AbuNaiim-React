import React, { useState } from 'react';
import "./Header.css";
import logo from "../pic/logo.png"
import { useEffect } from 'react';

const Header = () => {

    //header top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classNameList.toggle("active", window.scrollY > 100)
    });

useEffect(() => {
    var header = document.getElementById("myDIV");
    var btns = header.getElementsByClassName("nav-item");
    for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
   }
}, [])

   
    return (
        <>
            <header className='header'>

                <nav className="navbar navbar-expand-lg navbar-light  fixed-top " id='navbar'>
                    <div className="container-fluid">
                        <a className="navbar-brand  logo" href="#">
                            <img style={{ width: "40px" }} src={logo} alt='' />
                            <strong></strong>
                        </a>
                      <div id="myDIV">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                       
                        <div className="collapse navbar-collapse   navlink " id="navbarSupportedContent">
                       
                            <ul className="navbar-nav   ml-auto link uppercase">

                           
                                <li className="nav-item active">
                                    <a className="nav-link" aria-current="page" href="#Home">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#Job">Job</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#Projects">Projects</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#Education">Education</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#Story">Story</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="#Contact">Contact</a>
                                </li>

                            </ul>
                            </div>
                        </div>
                    </div>
                </nav>

            </header>

        </>
    )
}

export default Header
