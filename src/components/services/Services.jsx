import React, {useContext} from 'react'
import './Services.css'

import heartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../card/Card'

import resume from './resume.pdf'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const transition = {duration: 1, type: 'spring'}

  return (
    <div className='services' id='Services'>
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>services</span>
        <span>
          "Kami tidak hanya menciptakan tampilan yang indah, 
          tetapi juga berfokus pada <br/>pengalaman pengguna yang luar biasa. Kami memahami bahwa antarmuka <br/>pengguna yang baik
          adalah yang tidak hanya memikat mata, <br/>tetapi juga intuitif, 
          responsif, dan memudahkan interaksi <br/>pengguna dengan situs 
          web atau aplikasi Anda.""
        </span>
        <a href={resume} download>
          <button className='button s-button'>Download CV</button>
        </a>
        
        <div className="blur s-blur1"></div>
      </div>
      <div className="cards">
        <motion.div 
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          className='cardOne'>
            <Card
                emoji={heartEmoji}
                heading={'Frontend'}
                detail={"HTML, CSS, Javascript, Reactjs, Sass, Tailwind"} 
            />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          className='cardTwo'>
            <Card
                emoji={glasses}
                heading={'Backend'}
                detail={"NodeJs, HapiJs, MySQL, PostgresSQL, RestfulAPI"} 
            />
        </motion.div>
        <motion.div 
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          className='cardThree'>
            <Card
                emoji={humble}
                heading={'Design Web'}
                detail={"Figma, balsamiq, canva, boostrap, github"} 
            />
        </motion.div>
        <div className="blur s-blur2"></div>
      </div>
    </div>
  )
}

export default Services
