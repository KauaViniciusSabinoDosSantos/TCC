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
                  <li className="nav-item"><Link to={'/sobrenos'} className="navlink-E">SOBRE NÓS</Link></li>
                </ul>
              </div>
            </nav>
          </header>
        <div className="circle"> {/* Círculo adicionado aqui */}
          <div className="container-body">
          <h1 className="bemVindoADM">Bem Vindo</h1>
                    <Link to={'/login'} className="btn-login-entrada">LOGIN</Link>

          </div>
        </div>
           <p className="textoIntro">Iron Works Gym é um sistema para facilitar a vida tanto<br/> 
           do usuário, quanto ao do síndico. Nosso projeto é focado <br/>
           em melhorar a rotina e organização do usuário, com <br/>
           agendamento de horários e equipamentos. Já para o <br/>
           síndico, fica disponível para tal fazer a interdição de <br/>
           equipamentos ou dias.</p>
    </div>
  )
}

export default EntradaInicial
