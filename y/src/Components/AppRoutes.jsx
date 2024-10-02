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
import Produto from '../templates/Produto/Produto'
import ProdutoNovo from '../templates/Produto/ProdutoNovo'
import ProdutoLista from '../templates/Produto/ProdutoLista'
import UsuarioEditar from '../templates/Usuario/UsuarioEditar'
import UsuarioNovo from '../templates/Usuario/UsuarioNovo'
import UsuariosLista from '../templates/Usuario/UsuariosLista'
import ProdutoEditar from '../templates/Produto/ProdutoEditar'





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
        <Route path="/usuarionovo" element={<UsuarioNovo/>} />
        <Route path="/usuarioeditar" element={<UsuarioEditar/>} />
        <Route path="/usuarioslista" element={<UsuariosLista/>} />
        <Route path="/mensagem" element={<Mensagem/>} />
        <Route path="/produto" element={<Produto/>} />
        <Route path="/produtonovo" element={<ProdutoNovo/>} />
        <Route path="/produtoslista" element={<ProdutoLista/>} />
        <Route path="/produtoeditar" element={<ProdutoEditar/>} />
        
       

      </Routes>
    </div>
  )
}

export default AppRoutes
