import React, { useState } from 'react'

const Card = (props) => {

  const [Modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!Modal)
  }
  return (
    <>

      <div className="col-lg-4 col-md-6 col-12 mt-3">
        <div className="box btn_shadow">

          <div className="img">
            <img style={{ width: "100%", height: "200px" }} src={props.image} alt="" onClick={toggleModal} />
          </div>

          <div className="category d_flex">
            <span onClick={toggleModal} className="uppercase">
              {props.category}
            </span>

            <label htmlFor="">
              <i className='far fa-heart'></i>
              {props.totalLike}
            </label>
          </div>

          <div className='title'>
            <h2 onClick={toggleModal}>{props.title}</h2>
            <a href='#popup' className='arrow' onClick={toggleModal}>
              <i class='fas fa-arrow-right'></i>
            </a>
          </div>

        </div>
      </div>



      {/* Popup box */}
      {Modal && (
        <div className='Modal'>

          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content '>

            <div className="row">
              <div className="col-lg-6 col-12">
                <div className='modal-img left'>
                  <img style={{ width: "100%" }} src={props.image} alt='' />
                </div>
              </div>

              <div className="col-lg-6 col-12">
                <div className='modal-text right'>
                  <span>Featured - Design</span>
                  <h1>{props.title}</h1>
                  <p>{props.desc}</p>
                  <br />

                  <div style={{ color:" var(--primary)" }} className='h3 mb-2'>Tools and Languages:</div>
                  <h6>{props.platform}</h6>
                  

                  <div className='button f_flex mtop grid_protfolio'>
               
                    <a className='btn_shadow'>
                      LIKE <i class='far fa-thumbs-up'></i>
                    </a>

                    <a className='btn_shadow'>
                      GITHUB <i class="fa-brands fa-github"></i>
                    </a>

                    <a className='btn_shadow'>
                      VIEW <i class='fas fa-chevron-right'></i>
                    </a>
                   
                  </div>

                  <button className='close-modal btn_shadow' onClick={toggleModal}>
                    <i class='fas fa-times'></i>
                  </button>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}

export default Card
