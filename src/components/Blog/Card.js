import React, { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';//npm install @emailjs/browser --save
//message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Card = (props) => {

  //Modal
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!modal)
  }


  //form
  const [data, setData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const InputEvent = (event) => {
    const name = event.target.name;
    setData((oldData) => {
      return { ...oldData, [name]: event.target.value }
    })
  }

  const form = useRef();
  const sendEmail = (event) => {
    event.preventDefault();
    setData({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });//after submit empty
    
    //EmailJs -> naiimabu25@gmail.com  //emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
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


{/**
 *  <div className="content mtop">
                <h1>Leave a Reply</h1>
               
                  <form ref={form} onSubmit={sendEmail} className='blog_contact row'>
                    <div className="col-lg-6 col-12">
                        <input type="text" placeholder='Full Name' name='fullname' value={data.fullname} onChange={InputEvent} />
                        <input type="email" placeholder='Email' name='email' value={data.email} onChange={InputEvent}/>
                        <input type="text" placeholder='Subject' name='subject' value={data.subject} onChange={InputEvent}/>
                       
                    </div>

                    <div className="col-lg-6 col-12">
                        <textarea name="message" placeholder='Comment' cols="30" rows="8"  value={data.message} onChange={InputEvent}></textarea>
                    </div>
                    <button onClick={notify} className="btn_shadow blog-btn ">SUBMIT NOW</button>
                    <ToastContainer />
                  </form>

                </div>
 * 
 */}

             

              </div>

            </div>
          </div>
      )}
    </>
  )
}

export default Card
