import { Link, useNavigate } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'
import { useState } from "react"
import { useEffect } from "react"
import UsuarioService from "../../services/UsuarioService"

const UsuariosLista = () => {
    const navigate = useNavigate();
    const goTo = () => {
        navigate('/usuarioeditar')
    }
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        UsuarioService.findAll().then(
            (response) => {
                const usuarios = response.data;
                setUsuarios(usuarios);
                console.log(usuarios);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="p-3 w-100">
                <Header
                    goto={'/usuario'}
                    title={'Lista de Usuarios'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Abrir</th>
                                </tr>
                            </thead>
                            <tbody>
                            {usuarios?.map((usuario) => (
                                <tr key={usuario.id}>
                                    <td scope="row">{usuario.id}</td>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.email}</td>
                                    <td>{usuario.statusUsuario}</td>
                                    <td>
                                    <button type="button" onClick={() => goTo()}
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

export default UsuariosLista