import React from 'react'
import './Home.css'
import {Link} from "react-router-dom" 
import Sidebar from '../../Components/Menu/Sidebar'




const Home = () => {
  return (
    <div className="content">
    <div className="containe1">
     <Sidebar></Sidebar>
     <p className="Equipe">Seja bem-vindo(a) ao <br/>𝙸𝚛𝚘𝚗 𝚆𝚘𝚛𝚔𝚜 𝙶𝚢𝚖</p>
            <div>
              <img src="caminho/para/seu/gif.gif" alt="Descrição do GIF" />
            </div>
    </div>
    </div>
  )
}

export default Home 