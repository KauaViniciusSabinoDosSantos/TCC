import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"


const Usuario = () => {

    return (
        <div className="d-flex">
           <Sidebar />
           <div className="p-3 w-100">
           <Header
                    goto={'/home'}
                    title={'Usuário'}

                    />
               <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/usuarioslista'} 
                            className="btn btn-lg bg-info">
                            Lista de Usuários
                        </Link>
                    </div>
                </section>
           </div>
        </div>
    )
}

export default Usuario