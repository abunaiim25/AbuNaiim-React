import React from 'react';
import Card from "./Card";
import ResumeApi from './ResumeApi';
import "./Resume.css";

const Resume = () => {
    return (
        <>
            <section className='resume top' id='resume'>
                <div className="container ">
                    <div className="heading text-center">
                        <h4 className='uppercase'>Education and Experience</h4>
                        <h1>My Resume</h1>
                    </div>


                    <div className="content-section  row">
                        <div className="col-lg-6 col-12 mt-3">
                     
                            <div className="content">
                                {ResumeApi.map((val, id) => {
                                    if (val.category === "education") {
                                        return <Card key={id} {...val} />
                                    }
                                })}
                            </div>
                        </div>

                        <div className="col-lg-6 col-12 mt-3">

                            <div className="content">
                                {ResumeApi.map((val, id) => {
                                    if (val.category === "experience") {
                                        return <Card key={id} {...val} />
                                    }
                                })}

                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Resume
