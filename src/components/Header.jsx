// importo dalla libreria installata react-router-dom per la navigazione

import {Link, NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <div className="nav-bar">
                {/* NavLink */}
                <NavLink to="/"></NavLink>
                <NavLink to="/chisiamo">Chi siamo</NavLink>
                <NavLink to="/listpost">Lista dei post</NavLink>
            </div>
        </header>
    )
}