import { Link, useParams } from "react-router-dom"
import Header from "../../Components/Header/Header.jsx"
import Sidebar from "../../Components/Menu/Sidebar.jsx"
import logo from '../../assets/logo.png'
import { useEffect, useRef, useState } from "react"
import MensagemService from "../../services/MensagemService.js"

const MensagemLer = () => {
     
    const objectValues = {
        id: null,
        Data_Mensagem: "",
        Emissor: "",
        Email: "",
        Telefone: "",
        Texto: "",
        statusMensagem: "",
    };
    const [mensagem, setMensagem] = useState(objectValues);

    const { id } = useParams();
    const _dbRecords = useRef(true);
    const [formData, setFormData] = useState({});
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMensagem(mensagem => ({ ...mensagem, [name]: value }));
    }

    useEffect(() => {
        MensagemService.findById(id).then(
            (response) => {
                const mensagem = response.data;
                setMensagem(mensagem);
            }
        ).catch((error) => {
            console.log(error);
        })
    }, []);

    const inativar = (id) => {
        MensagemService.inativar(id).then(
            (response) => {
                console.log(response.data.message);
                window.location.reload();

            }, (error) => {
                const message = error.response.data.message;
                console.log(message);
            }
        )
    }



    const marcarComoLida = (id) => {
        MensagemService.marcarComoLida(id).then(
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
                    goto={'/mensagem'}
                    title={'Ler Mensagem'}
                    logo={logo}
                />
                <section className="m-2 p-2 shadow-lg">
                    <form className="mx-5 p-2 border">
                        <div className="row my-3 g-1">
                            <label htmlFor="inputID" className="col-md-1 col-form-label">ID:</label>
                            <div class="col-md-2">
                                <input type="text" className="form-control" id="inputID" readOnly
                                        name="id"
                                        value={mensagem.id || ""} />
                            </div>

                            <label htmlFor="inputData" className="col-md-2 col-form-label">Data:</label>
                            <div class="col-md-3">
                                <input type="text" className="form-control" id="inputData" readOnly 
                                        name="inputData"
                                        value={mensagem.Data_Mensagem || ""}/>
                            </div>

                            <label htmlFor="inputStatus" className="col-md-2 col-form-label">Status:</label>
                            <div class="col-md-2">
                                <input type="text" className="form-control" id="inputStatus" readOnly 
                                name="StatusMensagem"
                                value={mensagem.statusMensagem || ""}/>
                            </div>
                        </div>
                        <div className="row mb-1">
                            <label htmlFor="inputEmissor" className="col-md-2 col-form-label">Emissor:</label>
                            <div class="col-md-10">
                                <input type="text" className="form-control" id="inputEmissor" readOnly
                                name="Emissor"
                                value={mensagem.emissor || ""}/>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail" className="col-md-2 col-form-label">Email:</label>
                            <div class="col-md-10">
                                <input type="email" className="form-control" id="inputEmail" readOnly 
                                name="Email"
                                value={mensagem.email || ""} />
                            </div>
                        </div>

                        <div className="col-md-12 mb-2">
                            <label htmlFor="inputTexto" className="form-label">Mensagem:</label>
                            <textarea rows={5} className="form-control" id="inputTexto"
                            name="Texto"
                            value={mensagem.texto || ""} >
                                </textarea>
                        </div>
                        <div className="col-12 d-flex justify-content-around">
                            <button type="submit" onClick={() => marcarComoLida(mensagem.id)} className="btn btn-warning">
                                Marcar com Lida
                            </button>
                            <button type="submit" onClick={() => inativar(mensagem.id)} className="btn btn-danger">
                                Inativar
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default MensagemLer