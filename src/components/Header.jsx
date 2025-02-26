// importo dalla libreria installata react-router-dom per la navigazione

import {NavLink } from "react-router-dom";

export default function Header () {
    return (
        <header>
            <div className="nav-bar">
                {/* NavLink */}
                <NavLink to="/">HomePage</NavLink>
                <NavLink to="/chisiamo">Chi siamo</NavLink>
                <NavLink to="/posts">Lista dei post</NavLink>
                <NavLink to="/posts/create">add Post</NavLink>
            </div>
        </header>
    )
}