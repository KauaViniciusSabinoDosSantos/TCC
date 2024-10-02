import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'

const Produto = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100 bg-dark text-light">
                <Header
                    goto={'/home'}
                    title={'Produto'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div className="d-flex justify-content-around">
                        <Link to={'/produtonovo'}
                            className="btn btn-lg bg-black text-light">
                            Novo Produto
                        </Link>
                        <Link to={'/produtoslista'}
                            className="btn btn-lg bg-info">
                            Lista de Produtos
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Produto