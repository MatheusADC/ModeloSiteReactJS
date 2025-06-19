import { Icon } from "@iconify/react"
import estilos from "./Header.module.css"
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={estilos["header-logo"]}>
                <img src="/images/logo.png" alt="Logo do Projeto"/>
                <div className={estilos["header-titulo"]}>
                    <Link to="/">React + UX Design</Link>
                    <span>Plataforma de Exemplo</span>
                </div>
            </div>       
            <Icon className={estilos.icones} icon="mingcute:user-4-line" />
        </header>
    );
}

export default Header;