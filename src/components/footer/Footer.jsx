import React from 'react'
import './Footer.css'
import wave from '../../img/wave.png'
import {
    AiOutlineInstagram, 
    AiFillLinkedin, 
    AiFillGithub
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={wave} alt="" className='f-img'/>
      <div className="f-content">
        <div className="f-icons">
            <AiOutlineInstagram size={'3rem'} color='white'/>
            <AiFillLinkedin size={'3rem'} color='white'/>
            <AiFillGithub size={'3rem'} color='white'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
