import React from 'react'
import './SobreNos.css'
import Logo from "../../assets/logo.png"
import D from "../../assets/danielFoto.png"
import E from "../../assets/eloiseFoto.png"

import { Link } from "react-router-dom"

const SobreNos = () => {
    return (
<div className='content'>

            <img src={Logo} alt="Logo Iron Works Gym" className="logo"/>

    <p className="SobreEquipe">𝙸𝚛𝚘𝚗 𝚆𝚘𝚛𝚔𝚜 𝙶𝚢𝚖</p>
    <p className='texto'>
    Nosso trabalho consiste em um agendamento de dias e <br /> 
    horários (incluindo também os equipamentos) para facilitar a <br />
    vida e a rotina de pessoas que fazem parte do condomínio <br />
    e que querem ter uma vida mais saudável e ativa.  <br /><br />

    A academia sem nosso serviço acaba sofrendo algumas <br />
    complicações, relacionadas com 2 usuários querendo <br />
    utilizar um equipamento no mesmo tempo, fazendo 1 deles <br />
    ter que esperar o outro terminar para poder utilizar, <br />
    gerando assim uma grande perda de tempo, discussões <br />
    e conflitos entre os usuários e reclamações da academia. <br /><br />

    Nós prometemos trazer uma solução viável e sustentável <br />
    para esse problema, fazendo um bom serviço e trazendo <br />
    tranquilidade para ambos os meios. <br /><br />

    Nosso projeto será tanto uma versão web (versão para os <br />
    administradores da academia, funcionários, etc), tanto <br />
    uma versão de aplicativo para celular (que será utilizada <br />
    pelos usuários). <br /><br />
    </p>

    <div className="membro">
        <img src={D} alt="" className="foto1"/>{/*foto do membro do grupo*/}
        <p className='sobre1'>DANIEL VÍTOR PRAES. <br/> RM: 86243. N°: 03.  <br/>GERENTE DO PROJETO</p>
    </div>

    <div className="membro">
        <img src={E} alt="" className="foto2"/>{/*foto do membro do grupo*/}
        <p className='sobre2'>ELOISE DA SILVA GONÇALVES.<br/> RM: 86135. N°: 06. </p>
    </div>

    <div className="membro">
        <img src={Logo} alt="" className="foto3"/>{/*foto do membro do grupo*/}
        <p className='sobre3'>KAUÃ VINÍCIUS SABINO DOS SANTOS.<br/> RM: 86014. N°: 16. </p>
    </div>

    <div className="membro">
        <img src={Logo} alt="" className="foto4"/>{/*foto do membro do grupo*/}
        <p className='sobre4'>LUCAS EMANUEL GONÇALVES OLIVEIRA.<br/> RM: 86247. N°: 21. </p>
    </div>

    <div className="membro">
        <img src={Logo} alt="" className="foto5"/>{/*foto do membro do grupo*/}
        <p className='sobre5'>VALDEMAR ALVES SOARES NETO.<br/> RM: 86250. N°: 32. </p>
    </div>

    <div className="classe">INF3AM</div>

    <Link to={'/entradainicial'} className="voltar">VOLTAR</Link>

    

    <p className="NossaEquipe">Conheça Nossa Equipe</p>


</div>

    )
}
    
export default SobreNos