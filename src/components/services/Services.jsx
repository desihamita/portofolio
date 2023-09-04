import React, {useContext} from 'react'
import './Services.css'

import heartEmoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../card/Card'

import resume from './resume.pdf'
import { themeContext } from '../../Context'

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className='services'>
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
        <div className='cardOne'>
            <Card
                emoji={heartEmoji}
                heading={'Frontend'}
                detail={"HTML, CSS, Javascript, Reactjs, Sass, Tailwind"} 
            />
        </div>
        <div className='cardTwo'>
            <Card
                emoji={glasses}
                heading={'Backend'}
                detail={"NodeJs, HapiJs, MySQL, PostgresSQL, RestfulAPI"} 
            />
        </div>
        <div className='cardThree'>
            <Card
                emoji={humble}
                heading={'Design Web'}
                detail={"Figma"} 
            />
        </div>
        <div className="blur s-blur2"></div>
      </div>
    </div>
  )
}

export default Services
