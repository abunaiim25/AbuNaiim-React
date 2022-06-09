import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';//npm install @emailjs/browser --save
//message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Card = (props) => {

  //Modal
  const [Modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!Modal)
  }


  //form
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const InputEvent = (event) => {
    const name = event.target.name;
    setInput((oldData) => {
      return { ...oldData, [name]: event.target.value }
    })
  }

  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    setInput({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });//after submit empty
    
    //EmailJs -> naiimabu25@gmail.com //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_0chfr5c',
      'template_qn5nmfn',
      form.current,
      '1i09rkvHXb8cPCEd6')
      .then((result) => {
        console.log(result.text);
        console.log("message successfull")
      }, (error) => {
        console.log(error.text);
      });
  };
  //message
  const notify = () =>{
    toast.success("Successfull Comment Send", { position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
  }


  return (
    <>

      <div className="col-lg-4 col-md-6 col-12 mt-3">
        <div className="box btn_shadow">

          <div className="img">
            <img style={{ width: "100%", height: "200px" }} src={props.image} alt="" onClick={toggleModal} />
          </div>

          <div className="category d_flex ">
            <span onClick={toggleModal} className="uppercase mt-1">
              {props.category}
            </span>
            {/** 
            <label htmlFor="">
              <i className='far fa-heart'></i>
              {props.totalLike}
            </label>
            */}
          </div>

          <div className='title mt-2'>
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

                  <div style={{ color: " var(--primary)" }} className='h4 mb-2'>Tools and Languages:</div>
                  <h6>{props.platform}</h6>


                  <div className='button f_flex mtop grid_protfolio'>

                    <a href={props.github} target="_blank" className='btn_shadow'>
                      GITHUB <i class="fa-brands fa-github"></i>
                    </a>

                    <a href={props.view} className='btn_shadow' target="_blank" >
                      VIEW <i class="fa-solid fa-eye"></i>
                    </a>

                  </div>

                  <button className='close-modal btn_shadow' onClick={toggleModal}>
                    <i class='fas fa-times'></i>
                  </button>

                </div>
              </div>


              <div className="content top">
                <h1>Leave a Reply</h1>

                <form ref={form} onSubmit={sendEmail} className='blog_contact row'>
                  <div className="col-lg-6 col-12">
                    <input type="text" placeholder='Full Name' name='fullname' value={input.fullname} onChange={InputEvent} />
                    <input type="email" placeholder='Email' name='email' value={input.email} onChange={InputEvent} />
                    <input type="text" placeholder='Subject' name='subject' value={input.subject} onChange={InputEvent} />

                  </div>

                  <div className="col-lg-6 col-12">
                    <textarea name="message" placeholder='Comment' cols="30" rows="8" value={input.message} onChange={InputEvent}></textarea>
                  </div>
                  <button onClick={notify} className="btn_shadow blog-btn ">SUBMIT NOW</button>
                  <ToastContainer />
                </form>
              </div>


          </div>

        </div>
        </div>
  )
}
    </>
  )
}

export default Card
