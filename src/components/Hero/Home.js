import React from 'react';
import "./Home.css";
import { Typewriter } from 'react-simple-typewriter' //Typewriter
import hero from "../pic/hero2.jpeg";



const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="container  top">
                    <div className="row">

                        <div className="col-lg-8 col-12">
                            <div className="left top">
                                <h3 >Welcome To My Website</h3>

                                <h1>Hi, I'm <span>Abu Naiim</span></h1>
                                <h2>a <span>
                                    <Typewriter
                                        words={["Software Engineer", "Programmer."]}
                                        loop
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={70}
                                        deleteSpeed={60}
                                        delaySpeed={1500} />
                                </span></h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor ad a accusantium! In ducimus facere sint vel repellendus illum tempore vero aliquid, nobis cupiditate iste eaque corporis accusantium sunt fuga provident distinctio, dolores unde libero? Recusandae nobis quia sapiente! Minus voluptate reprehenderit quam molestiae illo ducimus aperiam distinctio maxime voluptas quod. Dolor praesentium tempora rerum voluptatum doloribus aspernatur reprehenderit ad laborum numquam! Delectus est dignissimos a vel, tempora dolore ipsam. Quasi, cum. Provident dolorum esse, temporibus illum officia est nulla, praesentium dolor corporis autem quisquam maxime recusandae doloremque, hic vero soluta quae repellat placeat earum aperiam ipsum. Aut, cumque.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12 ">
                            <div className='right '>
                                <div className="card center">
                                    <img  src={hero} alt=''/>
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
                            <h4 style={{ marginBottom:"7px" }}>BEST SKILL ON</h4>
                            <button className='btn_shadow'>
                                <i class="fa-brands fa-html5"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-brands fa-css3"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-brands fa-js"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-solid fa-b"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-brands fa-react"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-brands fa-php"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-brands fa-laravel"></i>
                            </button>
                            <button className='btn_shadow'>
                                <i class="fa-solid fa-database"></i>
                            </button>
                        </div>
                    </div>
                </div>


            </section>
        </>
    )
}

export default Home
