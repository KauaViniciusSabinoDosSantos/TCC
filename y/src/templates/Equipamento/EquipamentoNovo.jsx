import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'

const EquipamentoNovo = () => {

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/equipamento'}
                    title={'Novo Equipamento'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="row g-3">
                        <div className="col-md-8">
                            <label htmlFor="inputNome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="inputNome" />
                        </div>
                        
                        <div className="col-md-4">
                            <label htmlFor="inputPreco" className="form-label">Quantidade</label>
                            <input type="text" className="form-control" id="inputPreco" />
                        </div>

                        

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">
                                Gravar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default EquipamentoNovo