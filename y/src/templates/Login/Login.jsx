import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className='corpo-login'>
      <div className="caixa">
      <form action="">
        <h1 className='h1-L'>Login</h1>
        <div className='input-box'>
           <input type="email" placeholder='Email' required />
        </div>
        <div className='input-box'>
           <input type="password" placeholder='Senha' required />
        </div>
        
        <div className='esqueceu-senha-L'>
            <Link to={'/forgotpass'}>Esqueceu a senha?</Link>
        </div>
       <Link to={'/home'} className="btn-login">ENTRAR</Link>
      </form>
      </div>
    </div>
  )
}

export default Login
