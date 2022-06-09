import React from 'react';
import Card from './Card';
import "./Features.css";
import data from "./FeaturesApi";

const Features = () => {
    return (
        <>
            <section className='features top' id="features">

                <div className="container">
                    <div className='heading text-center'>
                        <h4>Features</h4>
                        <h1>What I Do</h1>
                    </div>


                    <div className="content row">
                        {data.map((val, index) => {
                            return  <Card key={index} image={val.image} title={val.title} desc={val.desc} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features
