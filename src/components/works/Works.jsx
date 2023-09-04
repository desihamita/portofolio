import React, {useContext} from 'react'
import './Works.css'

import { 
    BiLogoReact,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoJavascript,
} from 'react-icons/bi'
import { BsCodeSlash } from 'react-icons/bs'

import { themeContext } from '../../Context'

const Works = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='works'>
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
            Possimus repellendus voluptatem molestiae. Ut natus enim beatae ullam?
        </span>
        <button className='button s-button'>Hire Me</button>
        <div className="blur s-blur1"></div>
      </div>

      <div className="w-right">
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <BiLogoReact size={80} color='#00D8FF'/>
            </div>
            <div className="w-secCircle">
                <BiLogoHtml5 size={80} color='#E44D26' />
            </div>
            <div className="w-secCircle">
                <BsCodeSlash size={80} color='black'/>
            </div>
            <div className="w-secCircle">
                <BiLogoCss3 size={80} color="#264DE4"/>
            </div>
            <div className="w-secCircle">
                <BiLogoJavascript size={80} color='#F7DF1E'/>
            </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
