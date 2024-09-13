import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import Nav from '../../Components/Nav/Nav'
import Logo from '../../assets/logo.png'  


const Home = () => {
  return (
    <div className="container1">
      
      <Nav></Nav>

    <section className="hero">
        
        <div className="container">
            <h2>Bem-vindo à Nossa Página</h2>
           
            <Link to={'/interditar'} className="btn">AGENDAR</Link>
        </div>
    </section>
    </div>
  )
}

export default Home