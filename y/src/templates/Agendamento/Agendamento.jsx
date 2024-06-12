import React from 'react'
import './Agendamento.css'
import {Link} from "react-router-dom"

const Agendamento = () => {
  return (
    <div>
      <h1>AGENDAMENTO</h1>
      <Link to={'/home'} className="btn-voltar">VOLTAR</Link>
      </div>
  )
}

export default Agendamento
