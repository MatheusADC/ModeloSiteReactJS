import { Link, useLocation } from "react-router-dom";
import estilos from "./MenuNav.module.css"
import MenuLink from "../MenuLink";

function MenuNav() {
    return (
        <nav className={estilos.navegacao}>
            <ul>
                <MenuLink to="/">Principal</MenuLink>
                <MenuLink to="/sobre">Sobre Nós</MenuLink>
                <MenuLink to="/novo-link">Novo Link</MenuLink>
            </ul>
        </nav>
    );
}

export default MenuNav;