import { Link } from "react-router-dom";

const Header = ({goto, title, logo}) => {

    return (
        <div className="
            d-flex justify-content-between align-content-center 
            p-3 border-bottom shadow rounded bg-white">
            <Link to={goto} className="btn btn-info shadow  ">Voltar</Link>
            <div>
                <span className="fw-bold h2">{title}</span>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Header