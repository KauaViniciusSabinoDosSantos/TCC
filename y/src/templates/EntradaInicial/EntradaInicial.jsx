import React from 'react'
import './EntradaInicial.css'
import { Link } from "react-router-dom"
import Logo from "../../assets/logo.png"

const EntradaInicial = () => {
  return (

    <div className='content'>
      <div className="side center left">
                <div className='Txt-1'>
                    <h2>BEM VINDO(a) <br />ADMIN</h2>
                    <Link to={'/login'} className="btn-login">LOGIN</Link>
                </div>
            </div>
            <div className="side center right">
                <div className='Txt-2'>
                    <h1>IRON WORKS</h1>
                    <p>
                    Iron Works Gym, aplicativo e um website de acordo <br /> com a preferencia do usuário, onde especializados <br /> podem monitorar o agendamento dos funcionamentos <br /> das maquinas especializadas para aqueles que querem <br /> ter um físico forte e ter uma organização boa
                    </p>
                </div>
            </div>
    </div>
  )
}

export default EntradaInicial
