import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import logo from '../../assets/logo.png'

const Equipamento = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100 bg-white text-black">
                <Header
                    goto={'/home'}
                    title={'Equipamento'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/equipamentonovo'}
                            className="btn btn-lg bg-black text-light">
                            Novo Equipamento
                        </Link>
                        <Link to={'/equipamentolista'}
                            className="btn btn-lg bg-info">
                            Lista de Equipamentos
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Equipamento