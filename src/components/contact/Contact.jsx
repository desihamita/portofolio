import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from '../../Context'

import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'

const Contact = () => {
  const form = useRef();
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7f0rm4k', 'template_g6fsjin', form.current, 'Cz5DoVOxO6lfMUCBn')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
          <div className="t-contact">
            <span><AiOutlineMail size={30} className="icon"/>desishmt@gmail.com</span>
          </div>
          <div className="t-contact">
            <span><AiOutlineWhatsApp size={30} className="icon"/>+62 858-8347-8078</span>
          </div>
          
          <div className="blur s-blur1"></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact