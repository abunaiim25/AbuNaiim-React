import React, { useState, useRef } from 'react';
import "./Contact.css";
import contact from "../pic/n3.jpeg";
import emailjs from '@emailjs/browser';//npm install @emailjs/browser --save
import MessengerCustomerChat from 'react-messenger-customer-chat';//npm install react-messenger-customer-chat
//message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

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

    alert(
      `
       My name is ${data.fullname}. 
      My email address is ${data.email}. 
      My Subject on  ${data.subject}. 
      Here is my message I want to say : ${data.message}. 
        `
    )

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
      toast.success("Successfull Email Send", { position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
    }


  return (
    <>
      <section className="contact" id="Contact">
        <div className="container top">
          <div className="heading text-center">
            <h4 className='uppercase'>You can contact always with me</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content row">
            <div className="col-lg-6 col-12 mt-3">
              <div className="box box_shodow">
                <div className="img">
                  <img style={{ width: "100%" }} src={contact} alt="" />
                </div>

                <div className="details">
                  <h1>Abu Naiim</h1>
                  <p>If you want to contact me, you can contact me through social media or email.</p>
                  <p>Email: abu15-13860@diu.edu.bd</p><br />
                  <span>FIND WITH ME</span>

                  <div className='button f_flex'>
                    <a href="https://www.facebook.com/profile.php?id=100010098828694" target="_blank" className='btn_shadow mx-2'>
                      <i class='fab fa-facebook-f'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/abu-naiim-516949210/" target="_blank" className='btn_shadow mx-2'>
                      <i class='fab fa-linkedin-in'></i>
                    </a>
                    <a href="https://www.instagram.com/abu_naiim/" target="_blank" className='btn_shadow mx-2'>
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>

                </div>
              </div>
            </div>


            <div className="col-lg-6 col-12 mt-3">
              <div className=' box_shodow p-4'>

                <form ref={form} onSubmit={sendEmail}>

                  <div className='row'>
                    <div className='input col-lg-6 col-md-12 col-12'>
                      <span>YOUR NAME</span>
                      <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                    </div>

                    <div className='input  col-lg-6 col-md-12 col-12'>
                      <span>EMAIL </span>
                      <input type='email' name='email' value={data.email} onChange={InputEvent} />
                    </div>
                  </div>

                  <div className='input'>
                    <span>SUBJECT </span>
                    <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                  </div>

                  <div className='input'>
                    <span>YOUR MESSAGE </span>
                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                  </div>

                  <button onClick={notify} className='btn_shadow right-btn'>
                    SEND Email <i className='fa fa-long-arrow-right'></i>
                  </button>
                  <ToastContainer />
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      <MessengerCustomerChat
        pageId="107276032014225" // fb page id
        appId="390414809715969" //https://developers.facebook.com/apps/?show_reminder=true
        //advance massaging on FB page: https://abu-naiim.netlify.app/
      />,
    </>
  )
}

export default Contact
