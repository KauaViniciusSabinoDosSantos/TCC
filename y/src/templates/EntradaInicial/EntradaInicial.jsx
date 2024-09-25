import React from 'react'
import './EntradaInicial.css'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

const EntradaInicial = () => {
  return (

    <div className='content'>
     <header className="container-header">
            <nav className="navbar-E">
              <div className="logo-E">
               <img src={Logo} alt="" className="logostyle-E"/>
              </div>

              <div className="navlist-E">
                <ul>
                  <li className="nav-item"><Link to={'/interditar'} className="navlink-E">INTERDITAR</Link></li>
                  <li className="nav-item"><Link to={'/sobrenos'} className="navlink-E">SOBRE NOS</Link></li>
                </ul>
              </div>
            </nav>
          </header>
 
          <div className="container-body">
          <h1>Bem Vindo,  Adm!</h1>
                    <Link to={'/login'} className="btn-login">LOGIN</Link>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus pariatur temporibus, similique ducimus dicta officiis odio harum suscipit at fuga ab obcaecati recusandae sapiente vel expedita possimus ullam libero praesentium.</p>
           


          </div>

    </div>
  )
}

export default EntradaInicial
