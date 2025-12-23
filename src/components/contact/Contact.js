import React, { useState, useRef } from "react"
import contact from "../assets/contact.png"
import "./Contact.css"
//React Reveal
import Zoom from 'react-reveal/Zoom';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot Field
  })
  const [status, setStatus] = useState({ type: '', message: '' });
  const mountTime = useRef(Date.now());

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

  const formSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: '' }); // Only toggle button state, hide message
    
    try {
      // Advanced Lead Intelligence
      const timeOnPage = Math.round((Date.now() - mountTime.current) / 1000);
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      
      const meta = {
        userAgent: navigator.userAgent,
        screen: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || 'Direct',
        
        // Hardware & Behavior
        ram: navigator.deviceMemory ? `~${navigator.deviceMemory} GB` : 'Unknown',
        cores: navigator.hardwareConcurrency || 'Unknown',
        network: connection ? connection.effectiveType : 'Unknown',
        timeOnPage: `${timeOnPage} seconds`
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...data, sourceUrl: window.location.href, meta })
      });
      
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        setData({ name: "", email: "", message: "" });
        
        // Celebration!
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2ecc71', '#3498db', '#e74c3c', '#f1c40f']
        });

        // Clear success message after 10 seconds
        setTimeout(() => setStatus({ type: '', message: '' }), 10000);
      } else {
        throw new Error('Server returned error');
      }
    } catch (error) {
      console.error(error);
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }
  }

  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <h1 className='title'>{title_name}</h1>

          <div className='content'>
            <Zoom bottom>
              <div className='left'>
                <div className='box box_shadow'>
                  <div className='img'>
                    <img className="cont-img img-shadow" src={contact} alt='Contact Illustration' width="500" height="350" />
                  </div>
                  <div className='details'>
                   <h1>Get In Touch!</h1>
                    <p>I am actively seeking SDE-2 / Senior Software Engineering roles where I can drive architectural decisions and build high-performance distributed systems. If you're looking for an engineer who prioritizes scalability and business impact, let's connect.</p> <br />
                    <p><span>Phone</span>: +91 7011125038</p>
                    <p><span>Email</span>: mishrachandan.dd@gmail.com</p>
                    <p><span>Address</span>: Noida, Uttar Pradesh, India</p> <br />
                    <div className="card-btn">
                        <a target="_blank" rel="noopener noreferrer" className="btn_shadow" href="https://t.me/dd215412" aria-label="Chat on Telegram">
                           Chat <i class="fas fa-paper-plane"></i>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" className="btn_shadow" href="mailto:mishrachandan.dd@gmail.com" aria-label="Send Email">
                           Mail <i class="fas fa-envelope"></i>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>

            <Zoom bottom>
              <div className='right box_shadow'>
                <form onSubmit={formSubmit}>
                    <div className='input'>
                      <span>YOUR NAME</span>
                      <input type='text' name='name' value={data.name} onChange={InputEvent} aria-label="Name" required />
                    </div>
                    <div className='input'>
                      <span>YOUR EMAIL </span>
                      <input type='email' name='email' value={data.email} onChange={InputEvent} aria-label="Email" required />
                    </div>
                    {/* Honeypot: Hidden for humans */}
                    <div className='input check'>
                      <input type='text' name='company' value={data.company} onChange={InputEvent} tabIndex="-1" autoComplete="off" />
                    </div>
                  <div className='input'>
                    <span>YOUR MESSAGE </span>
                    <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} aria-label="Message" required></textarea>
                  </div>
                  <button className='btn_shadow' disabled={status.type === 'loading'}>
                    {status.type === 'loading' ? 'SENDING...' : <>SEND <i class='fas fa-arrow-right'></i></>}
                  </button>
                  {status.message && (
                    <div className={`status_msg ${status.type}`}>
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
