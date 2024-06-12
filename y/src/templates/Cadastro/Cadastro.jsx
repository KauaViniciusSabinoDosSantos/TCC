import React from 'react'
import './Cadastro.css'
import {Link} from "react-router-dom"

const Cadastro = () => {
    return (
        <div>
            <div className="caixa">
                <form action="">
                    <h1>Cadastro</h1>
                    <div className='input-box'>
                        <input type="email" placeholder='Email' required />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Senha' required />
                    </div>
                    <div className='input-box'>
                        <input type="password" placeholder='Digite novamente' required />
                    </div>

                    <div className='esqueceu-senha'>
                    </div>
                    <Link to={'/home'} className="btn-login">CADASTRAR</Link>
                    <div className="register-link">
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Cadastro
