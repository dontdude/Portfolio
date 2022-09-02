import React, { useState } from "react"
import contact from "../assets/contact.png"
import "./Contact.css"
//React Reveal
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    email: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const title_name = "< Contact Me />";

   // TODO: Add Email.JS to send the form details to email 
  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `Name : ${data.fullname}
	   Email : ${data.email}
	   Message : ${data.message}`
    )
  }

 
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <h1 className='title'>{title_name}</h1>

          <div className='content'>
            <Fade left>
              <div className='left'>
                <div className='box box_shadow'>
                  <div className='img'>
                    <img className="cont-img img-shadow" src={contact} alt='' />
                  </div>
                  <div className='details'>
                   <h1>Get In Touch!</h1>
                    <p>I am available for full time roles in Software development and web development. If you think you have any project/work that matches my skill set, or if you just want to say hi, you can contact me with the following details.</p> <br />
                    <p><span>Phone</span> : +91 7011125038</p>
                    <p><span>Email</span> : imchandan1947@gmail.com</p>
                    <p><span>Address</span> : Khora Colony, Noida, Uttar Pradesh, India</p> <br />
                    <div className="card-btn">
                        <a className="btn_shadow" href="https://t.me/dd215412">
                           Chat <i class="fas fa-paper-plane"></i>
                        </a>
                        <a className="btn_shadow" href="mailto:imchandan1947@gmail.com">
                           Mail <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className='right box_shadow'>
                <form onSubmit={formSubmit}>
                    <div className='input'>
                      <span>YOUR NAME</span>
                      <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                    </div>
                    <div className='input'>
                      <span>EMAIL </span>
                      <input type='email' name='email' value={data.email} onChange={InputEvent} />
                    </div>
                  <div className='input'>
                    <span>YOUR MESSAGE </span>
                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                  </div>
                  <button className='btn_shadow'>
                    SEND <i class='fas fa-arrow-right'></i>
                  </button>
                </form>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact