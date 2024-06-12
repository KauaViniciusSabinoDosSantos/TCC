import React from 'react'
import {Routes, Route, Router} from "react-router-dom"
import App from "../templates/App/App"
import Home from '../templates/Home/Home'
import Login from '../templates/Login/Login'
import Forgotpass from '../templates/Forgotpass/Forgotpass'
import Cadastro from '../templates/Cadastro/Cadastro'
import Inicio from '../templates/Inicio/Inicio'
import Agendamento from '../templates/Agendamento/Agendamento'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpass" element={<Forgotpass/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/agendamento" element={<Agendamento/>} /> 
      </Routes>
    </div>
  )
}

export default AppRoutes
