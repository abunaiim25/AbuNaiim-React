//import React, { useState } from 'react';
import Card from './Card';
import "../Portfolio/Portfolio.css";
import "./Blog.css";
import BlogApi from "./BlogApi";



const Blog = () => {
  return (
    <>
      <section className='portfolio blog' id='blog'>
        <div className="container">
          <div className="heading text-center">
            <h4 className='uppercase'>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>

          <div className="content row">
          {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three}  title_four={value.title_four} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} desc_four={value.desc_four} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
