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
import jquery from "../pic/jquery.png";
import sass from "../pic/sass.png";
import ajax from "../pic/ajax.png";
import n1 from "../pic/n1.jpeg";
import mysql from "../pic/mysql.png";
import laravel from "../pic/laravel.png";
import { useEffect } from 'react';



const Home = () => {

  useEffect(() => {
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
  }, [])
  
    

    return (
        <>
            <section className="hero" id="Home">
                <div className="container  mtop">
                    <div className="row">

                        <div className="col-lg-7 col-12">
                            <div className="left top">
                                <h3 >Welcome To My Website</h3>

                                <h1>Hi, It's me <span>Abu Naiim </span></h1>
                                <h6>Full-Stack Web Developer<span>
                                   {/** 
                                 <a href="" class="typewrite" data-period="2000" data-type='[ "Full-Stack Web Developer.", "Software Developer.", "Programmer." ]'>
                                  <span class="wrap"></span>
                                 </a>
                                 */}
                                </span>
                               </h6>

                                <p>I am Abu Naiim. I am Full-Stack Web Developer. I am working on web & mobile application development more than 1 year. Usually I do web development using Laravel & React.js.
                                     I am always ready to learn any new technology and also looking for new opportunities to learn and progress. I want to build my career as a software engineer in the software and web related sector. 
                                     I would like to my knowledge, creativity and innovative thinking in this sector.
                                      Now, I studying at Daffodil International University in the department of B.Sc in Computer Science & Engineering. 
                                      I have passed Alim from Darunnazat Siddiqua Kamil Madrasah and Dakhil & JDC from Hafez Abdur Razzak Jamia Islamia Madrasah. Currently,  I am in Karanigong, Dhaka. My home village is Rarirchor, Chandpur.
                                       My hobbies are fishing, playing cricket, watching cricket and football.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-5 col-12 ">
                            <div className='right'>
                                <div className="card center">
                                    <img src={n1} alt='' />
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
                            <img src={sass} alt="" />
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

                            <button className='btn_shadow'>
                            <img src={jquery} alt="" />
                            </button>

                            <button className='btn_shadow'>
                            <img src={ajax} alt="" />
                            </button>

                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home
