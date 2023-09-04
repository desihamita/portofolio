import React, {useContext} from 'react'
import './Experience.css'
import { themeContext } from '../../Context'

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='experience'>
      <div className="achievement">
        <div className='circle'>-1</div>
        <span>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className='circle'>10+</div>
        <span>compleated </span>
        <span>Project</span>
      </div>
      <div className="achievement">
        <div className='circle' style={{color: darkMode? 'black': ''}}>10+</div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience
