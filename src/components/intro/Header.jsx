import React, { useContext } from 'react'
import './Header.css'

import { 
  BiLogoGithub, 
  BiLogoLinkedin, 
  BiLogoInstagram 
} from 'react-icons/bi'

import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy3.png'
import thumbUp from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesImoji from '../../img/glassesimoji.png'

import FloatingDiv from '../floatingDiv/FloatingDiv'
import { themeContext } from '../../Context'

const Header = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='header'>
      <div className="h-left">
        <div className="h-name">
            <span style={{color: darkMode? 'white': ''}}>Hy! I am</span>
            <span>Desi Sihamita</span>
            <span>"Menggambarkan Dunia Lewat Kreasi: Desain Grafis yang Menceritakan Lebih dari Kata-kata!"</span>
        </div>
        <button className="button h-button">
            Hire me
        </button>
        <div className="h-icons">
            <a href="https://github.com/desihamita?tab=repositories" className='icon'>
              <BiLogoGithub size={60}/>  
            </a>
            <a href="https://www.linkedin.com/in/desi-sihamita-a031411b5/" className='icon'>
               <BiLogoLinkedin size={60}/> 
            </a>
            <a href="" className='icon'>
               <BiLogoInstagram size={60}/> 
            </a>   
        </div>
      </div>
      <div className="h-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesImoji} alt="" />
        <div className='h-image1'>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer' />
        </div>
        <div className='h-image2'>
            <FloatingDiv image={thumbUp} txt1='Web' txt2='Designer' />
        </div>
        <div className="blur"></div>
        <div className="blur bgRight"></div>
      </div>
    </div>
  )
}

export default Header
