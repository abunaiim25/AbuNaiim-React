import React from 'react';
import "./Home.css";
//import { Typewriter } from 'react-simple-typewriter' //Typewriter
import hero from "../pic/hero2.jpeg";
import html from "../pic/html-5.png";
import css from "../pic/css-3.png";
import js from "../pic/js.png";
import react from "../pic/react.png";
import bootstrap from "../pic/bootstrap.png";
import php from "../pic/php.png";
import mysql from "../pic/mysql.png";
import laravel from "../pic/laravel.png";



const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="container  mtop">
                    <div className="row">

                        <div className="col-lg-8 col-12">
                            <div className="left top">
                                <h3 >Welcome To My Website</h3>

                                <h1>Hi, I'm <span>Abu Naiim</span></h1>
                                <h6> <span>Full Stack Web Developer & Programmer</span>
                                    {/*
                                    <span>
                                    <Typewriter
                                        words={["Software Engineer", "Programmer."]}
                                        loop
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={60}
                                        delaySpeed={1500} />
                                </span>
                                 */}</h6>


                                <p>I am Abu Naiim. I was born in a middle-class Muslim family. Now, I studying at Daffodil International University in the department of B.Sc in Computer Science & Engineering. I have passed Alim from Darunnazat Siddiqua Kamil Madrasah and Dakhil & JDC from Hafez Abdur Razzak Jamia Islamia Madrasah. I would like to be a  Software Engineer. Currently,  I am in Karanigong, Dhaka. My home village is Rarirchor, Chandpur. My hobbies are fishing, playing cricket, watching cricket and football.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 ">
                            <div className='right '>
                                <div className="card center">
                                    <img src={hero} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='hero_btn row'>

                        <div className='col-lg-5 col-12'>
                            <h4 >FIND ME IN THESE PLATFORM</h4>
                            <div className='button'>

                                <a href="https://github.com/abunaiim25" target="_blank" className='btn_shadow'>
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100010098828694" target="_blank" className='btn_shadow'>
                                    <i class='fab fa-facebook-f'></i>
                                </a>
                                <a href="https://www.linkedin.com/in/abu-naiim-516949210/" target="_blank" className='btn_shadow'>
                                    <i class='fab fa-linkedin-in'></i>
                                </a>
                                <a href="https://www.instagram.com/abu_naiim/" target="_blank" className='btn_shadow'>
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>

                        <div className='col-lg-7  col-12'>
                            <h4 style={{ marginBottom: "7px" }}>WEB SKILL ON</h4>
                            <button className='btn_shadow'>
                                <img src={html} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={css} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={js} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={bootstrap} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={react} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={php} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={laravel} alt="" />
                            </button>
                            <button className='btn_shadow'>
                            <img src={mysql} alt="" />
                            </button>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home
