import React from 'react'
import './Login.css'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div>
      <div className="caixa">
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
           <input type="email" placeholder='Email' required />
        </div>
        <div className='input-box'>
           <input type="password" placeholder='Senha' required />
        </div>
        
        <div className='esqueceu-senha'>
            <Link to={'/forgotpass'}>Esqueceu a senha?</Link>
        </div>
       <Link to={'/home'} className="btn-login">LOGIN</Link>
       <div className="register-link">
             <p>Nao possui uma conta? <Link to={'/cadastro'}>Cadastre-se</Link></p>
       </div>
      </form>
      </div>
    </div>
  )
}

export default Login
