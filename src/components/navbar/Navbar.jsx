import React from 'react'
import './Navbar.css' 
import Toggle from '../toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Dsihamita.</div>
          <Toggle/>
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul>
              <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                <li>Home</li>
              </Link>
              <Link spy={true} to='Services' smooth={true} >
                <li>Services</li>
              </Link>
              <Link spy={true} to='Experience' smooth={true} >
                <li>Experience</li>
              </Link>
              <Link spy={true} to='Portofolio' smooth={true} >
                <li>Portofolio</li>
              </Link>
            </ul>
          </div>
          <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar
