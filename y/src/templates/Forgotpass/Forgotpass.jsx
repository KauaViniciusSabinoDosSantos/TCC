import React from 'react'
import './Forgotpass.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/logo.png' 


const EsqueceuSenha = () => {
  return (
    <div className='corpo-forgotpass'>

      <img src={Logo} alt="" className="logo-esqueceu" />

      <div className="caixa-F">
      <form action="">
        <h1 className='h1-F'>ESQUECEU A SENHA</h1>
        <div className='input-box-F'>
           <input type="email" placeholder='Email' required />
        </div>
        <div className='input-box-F'>
           <input type="password" placeholder='Nova senha' required />
        </div>
        <div className='input-box-F'>
           <input type="password" placeholder='Repita a senha' required />
        </div>
        
        <div className='esqueceu-senha-F'>
            <Link to={'/login'}>Voltar</Link>
        </div>
       <Link to={'/login'} className="btn-continuar">CONTINUAR</Link>
      </form>
      </div>
    </div>
  )
}

export default EsqueceuSenha
