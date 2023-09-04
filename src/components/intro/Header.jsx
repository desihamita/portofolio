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
import { motion } from 'framer-motion'

const Header = () => {
  const transition = {duration: 2, type: 'spring'}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='header'>
      <div className="h-left">
        <div className="h-name">
            <span style={{color: darkMode? 'white': ''}}>Hy! I am</span>
            <span>Desi Sihamita</span>
            <span>"Merancang Tampilan yang Memukau, Menghidupkan Ide dengan Kode, Menghadirkan Pengalaman Tak Terlupakan."</span>
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
        <motion.img 
          initial={{left: '-36%'}}
          whileInView={{left: '-24%'}}
          transition={transition}
          src={glassesImoji} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div h-image1"
        >
          <FloatingDiv image={crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div 
          initial={{left:'9rem', top:'18rem'}}
          whileInView={{left: '0rem'}}
          transition={transition}
          className='h-image2 floating-div'>
            <FloatingDiv image={thumbUp} txt1='Web' txt2='Designer' />
        </motion.div>
        <div className="blur"></div>
        <div className="blur bgRight"></div>
      </div>
    </div>
  )
}

export default Header
