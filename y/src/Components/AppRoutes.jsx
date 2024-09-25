import React from 'react'
import {Routes, Route, Router} from "react-router-dom"
import App from "../templates/App/App"
import Home from '../templates/Home/Home'
import Login from '../templates/Login/Login'
import Forgotpass from '../templates/Forgotpass/Forgotpass'
import Cadastro from '../templates/Cadastro/Cadastro'
import Inicio from '../templates/Inicio/Inicio'
import Interditar from '../templates/Interditar/Interditar'
import EntradaInicial from '../templates/EntradaInicial/EntradaInicial'


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
        <Route path="/interditar" element={<Interditar/>} /> 
        <Route path="/entradainicial" element={<EntradaInicial/>} />


      </Routes>
    </div>
  )
}

export default AppRoutes
