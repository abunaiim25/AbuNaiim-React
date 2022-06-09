import React, { useState } from 'react'

const Card = (props) => {

  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }


  return (
    <>
      <div className="col-lg-4 col-md-6 col-12 mt-3">
        <div className="box btn_shadow">
          <div className="img">
            <img style={{ width: "100%", height: "200px" }} src={props.image} alt="" onClick={toggleModal} />
          </div>

          <div className="category">
            <span onClick={toggleModal}>
              {props.date}
            </span>
          </div>

          <div className='title'>
            <h2 onClick={toggleModal}>{props.title_one}</h2>
            <a href='#popup' className='arrow' onClick={toggleModal}>
              <i class='fas fa-arrow-right'></i>
            </a>
          </div>

        </div>
      </div>


      {/* Popup box */}
      {modal && (
        <div className='Modal modal-blog'>

          <div onClick={toggleModal} className='overlay'></div>

          <div className='modal-content '>

            <div className='modal-img left'>
              <img style={{ width: "100%", }} src={props.image} alt='' />
              <br />
              <span className='float-end'>Date: {props.date}</span>
            </div>

            <div className='modal-text  right'>

              <h1>{props.title_one}</h1>
              <p>{props.desc_one}</p>

              <h1>{props.title_two}</h1>
              <p>{props.desc_two}</p>

              <h1>{props.title_three}</h1>
              <p>{props.desc_three}</p>


              <h1>{props.title_four}</h1>
              <p>{props.desc_four}</p>

              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'></i>
              </button>

              <div className="content mtop">
                <h1>Leave a Reply</h1>

               
                  <form action="" className='blog_contact row'>

                    <div className="col-lg-6 col-12">
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Website' />
                       
                    </div>

                    <div className="col-lg-6 col-12">
                        <textarea name="" placeholder='Comment' cols="30" rows="8"></textarea>
                    </div>
                    <button className="btn_shadow blog-btn ">SUBMIT NOW</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
      )}
    </>
  )
}

export default Card
