import React, { useState } from 'react';
import Card from './Card';
import "./Portfolio.css";
import Portfolio_data from "./Portfolio_data";

const Portfolio = () => {

  return (
    <>
      <section className='portfolio top' id='Projects'>
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND HERE MY PROJECTS</h4>
            <h1>My Projects</h1>
          </div>

          <div className="content row">
            {Portfolio_data.map((value, index) => {
              return <Card key={index}
                image={value.image}
                category={value.category}
                totalLike={value.totalLike}
                title={value.title}
                desc={value.desc}
                platform={value.platform}
                github={value.github}
                view={value.view}
              />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
