import React from 'react'
import './Forgotpass.css'
import {Link} from "react-router-dom"


const EsqueceuSenha = () => {
  return (
    <div className='teste'>
      <div className="caixa">
      <form action="">
        <h1>ESQUECEU A SENHA</h1>
        <div className='input-box'>
           <input type="email" placeholder='Email' required />
        </div>
        <div className='input-box'>
           <input type="password" placeholder='Nova senha' required />
        </div>
        <div className='input-box'>
           <input type="password" placeholder='Repita a senha' required />
        </div>
        
        <div className='esqueceu-senha'>
            <Link to={'/login'}>Voltar</Link>
        </div>
       <Link to={'/login'} className="btn-continuar">CONTINUAR</Link>
      </form>
      </div>
    </div>
  )
}

export default EsqueceuSenha
