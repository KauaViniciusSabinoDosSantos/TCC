import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <div className="container">
      <nav className="menuNav">
      <h1>SEJA BEM VINDO</h1>
      <p>lorem</p>
        <ul className="menu">
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="content">
      
      </div>
    </div>
  )
}

export default Home