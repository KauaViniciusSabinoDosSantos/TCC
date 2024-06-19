import React from 'react'
import './Home.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/logo.png'


const Home = () => {
  return (
    <div className="container1">
      <header>
        <div className="containerH">
            <nav>
                <ul className="nav-links">
                    <li>  <Link to={'/login'} className="btn">Voltar</Link></li>
                </ul>
            </nav>
        </div>
    </header>

    <section className="hero">
        <div className="container">
            <h2>Bem-vindo à Nossa Página</h2>
            <p>Conheça mais sobre nossos serviços e como podemos ajudá-lo.</p>
            <Link to={'/agendamento'} className="btn">AGENDAR</Link>
        </div>
    </section>

    <footer>
        <div className="containerF">
            <p>&copy; 2024 Iron Works. Todos os direitos reservados.</p>
        </div>
    </footer>
    </div>
  )
}

export default Home