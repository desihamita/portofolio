import React, { useContext } from 'react'
import './Toggle.css'

import {BiSun, BiMoon} from 'react-icons/bi'
import { themeContext } from '../../Context'

const Toggle = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const handleClick = () => {
        theme.dispatch({type: 'toggle'})
    }

    return (
        <div className='toggle'>
            <BiSun/>
            <BiMoon/>
            <div className="t-button"
                onClick={handleClick}
                style={darkMode? {left: '2px'}: {right: '2px'}}
            >

            </div>
        </div>
    )
}

export default Toggle
