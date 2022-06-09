import React from 'react';
import Card from "./Card";
import ResumeApi from './ResumeApi';
import "./Resume.css";

const Resume = () => {
    return (
        <>
            <section className='resume' id='resume'>
                <div className="container top">
                    <div className="heading text-center">
                        <h4 className='uppercase'>Education and Experience</h4>
                        <h1>My Resume</h1>
                    </div>


                    <div className="content-section mtop row">
                        <div className="col-lg-6 col-12">
                            <div className="heading">
                                <h4>2015-2023</h4>
                                <h1 style={{ fontSize:"35px" }}>Education Qualification</h1>
                            </div>

                            <div className="content">
                                {ResumeApi.map((val, id) => {
                                    if (val.category === "education") {
                                        return <Card key={id} {...val} />
                                    }
                                })}
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div className="heading">
                                <h4>2021-2022</h4>
                                <h1  style={{ fontSize:"35px" }}>Working Sector</h1>
                            </div>

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
