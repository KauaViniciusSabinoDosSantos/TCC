import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/logo.png'
import { Link } from "react-router-dom"
import { login } from '../../common/Services/Service'


const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = () => {
    login(email, senha).then(
      console.log('FOI')
    ).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>

      <div className='corpo-login'>

        <img src={Logo} alt="" className="logo-login" />

        <div className="caixa">
          <form action="">
            <h1 className='h1-L'>Login</h1>
            <div className='input-box'>
              <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />
            </div>

            <div className='esqueceu-senha-L'>
              <Link to={'/forgotpass'}>Esqueceu a senha?</Link>
            </div>
            <button type='submit' className="btn-login" onClick={handleSubmit} >ENTRAR</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
