import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Sidebar from '../../Components/Menu/Sidebar'
import logo from '../../assets/logo.png'
import { useState } from "react"
import { useEffect } from "react"
import MensagemService from "../../services/MensagemService"

const Mensagem = () => {
    const navigate = useNavigate();
    const goTo = (id) => {
        navigate(`/mensagemler/${id}`)    
    }
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        MensagemService.findAll().then(
            (response) => {
                const mensagens = response.data;
                setMensagens(mensagens);
                console.log(mensagens);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);
   
    
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100 bg-dark-subtle">
                <Header
                    goto={'/home'}
                    title={'Mensagem'}
                    logo={logo}
                />
                <section className="p-2 m-2 shadow-lg">
                    <div className="m-2">
                        <table className="table table-striped table-hover">
                            <thead> 
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Data</th>
                                    <th scope="col">Emissor</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mensagens?.map((mensagem) => (
                                <tr key={mensagem.id}>
                                    <td scope="row">{mensagem.id}</td>
                                    <td>{mensagem.Data_Mensagem}</td>
                                    <td>{mensagem.emissor}</td>
                                    <td>{mensagem.email}</td>
                                    <td>{mensagem.statusMensagem}</td>
                                    <td>
                                    <button type="button" onClick={() => goTo(mensagem.id)}
                                            className="btn btn-sm btn-warning">
                                            <i className="bi bi-envelope-open me-2"></i>Abrir
                                        </button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Mensagem