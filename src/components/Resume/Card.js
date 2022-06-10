import React from 'react'

const Card = (props) => {
  return (
    <>
      <div className="box box_shodow">
        <div className="title_content ">

          <div className="title">
            <h2>{props.title}</h2>
            <span>{props.year}</span>
          </div>

          <hr />
          <div className='justify'>{props.desc}</div>
        </div>



      </div>
    </>
  )
}

export default Card
