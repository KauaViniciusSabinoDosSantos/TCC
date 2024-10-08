import { Link } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'
import { useState } from "react"
import { criarEquipamento } from "../../services/Service.js"

const EquipamentoNovo = () => {

       const [nome, setNome ] = useState('');
       const [quantidade, setQuantidade ] = useState('');

       const novoEquipamento = { nome, quantidade}

         const handleSubmit = async ()=>{
              console.log(novoEquipamento);
              criarEquipamento(novoEquipamento).then(
                console.log("EQUIPAMENTO CRIADO")
              )
         }

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
                            <input type="text" className="form-control" id="inputNome" value={nome} onChange={(e) => setNome(e.target.value)}  />
                        </div>
                        
                        <div className="col-md-4">
                            <label htmlFor="inputPreco" className="form-label">Quantidade</label>
                            <input type="text" className="form-control" id="inputPreco" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                        </div>

                        

                        <div className="col-12">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
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