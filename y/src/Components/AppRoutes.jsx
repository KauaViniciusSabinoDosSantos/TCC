import React from 'react'
import {Routes, Route, Router} from "react-router-dom"
import App from "../templates/App/App"
import Home from '../templates/Home/Home'
import Login from '../templates/Login/Login'
import Forgotpass from '../templates/Forgotpass/Forgotpass'
import Inicio from '../templates/Inicio/Inicio'
import EntradaInicial from '../templates/EntradaInicial/EntradaInicial'
import Usuario from '../templates/Usuario/Usuario'
import Mensagem from '../templates/Mensagem/Mensagem'



const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App/>}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgotpass" element={<Forgotpass/>} />
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/entradainicial" element={<EntradaInicial/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/mensagem" element={<Mensagem/>} />


      </Routes>
    </div>
  )
}

export default AppRoutes
