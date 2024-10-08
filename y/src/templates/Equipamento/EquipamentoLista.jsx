import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'
import { useEffect } from "react"
import EquipamentoService from "../../services/EquipamentoService.js"
import { useState } from "react"

const EquipamentoLista = () => {

    const navigate = useNavigate();

    const goTo = () => {
        navigate('/')
    }

    const [equipamentos, setEquipamentos] = useState([]);

    useEffect(() => {
        EquipamentoService.findAll().then(
            (response) => {
                const equipamentos = response.data;
                setEquipamentos(equipamentos);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);


    

    const inativar = (id) => {
        EquipamentoService.inativar(id).then(
            (response) => {
                console.log(response.data.message);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                console.log(message);
            }
        )
    }



    const ativar = (id) => {
        EquipamentoService.ativar(id).then(
            (response) => {
                console.log(response.data.message);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                console.log(message);
            }
        )
    }




    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/equipamento'}
                    title={'Lista de Equipamentos'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>

                                    <th scope="col">Quantidade</th>

                                    <th scope="col">Status</th>
                                    <th scope="col">INATIVAR</th>
                                </tr>
                            </thead>
                            <tbody>

                                {equipamentos?.map((equipamento) => (
                                    <tr key={equipamento.id}>
                                        <td scope="row">{equipamento.id}</td>

                                        <td>{equipamento.nome}</td>

                                        <td>{equipamento.quantidade}</td>
                                        <td>{equipamento.statusEquipamento}</td>
                                        <td>
                                            <button type="button" onClick={() => ativar(equipamento.id)}
                                                className="btn btn-sm btn-danger m-2">
                                                <i className="bi bi-envelope-open me-2"></i>ativar
                                            </button>
                                            <button type="button" onClick={() => inativar(equipamento.id)}
                                                className="btn btn-sm btn-dark m-2">
                                                <i className="bi bi-envelope-open me-2"></i>Inativar
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

export default EquipamentoLista