import React from 'react'
import './Nav.css'
import Logo from '../../assets/logo.png'  
import {Link} from "react-router-dom"



const Nav = () => {
  return (
    <div className="containerH">
          <header>
            <nav className="nav-bar">
              <div className="logoH">
               <img src={Logo} alt="" className="logo-style"/>
              </div>

              <div className="nav-list">
                <ul>
                  <li className="nav-item"><Link to={'/interditar'} className="nav-link">INTERDITAR</Link></li>
                  <li className="nav-item"><Link to={'/sobrenos'} className="nav-link">SOBRE NOS</Link></li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
  )
}

export default Nav;
