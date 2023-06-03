import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../utils/routes";

import '../css/_navbar.css'

const NavBar: React.FC<NoProps> = () => {
    return (
        <header className="navbar__container">
            <h1>Sample Pokemon App</h1>
            <nav>
                <ul className="navbar__menu">
                    <Link to={ROUTES.HOME} className="navbar__menu__link">
                        <h1>Home</h1>
                    </Link>
                    <Link to={ROUTES.POKEDEX} className="navbar__menu__link">
                        <h1>Pokedex</h1>
                    </Link>
                    <Link to={ROUTES.MY_POKEMONS} className="navbar__menu__link">
                        <h1>My Pokemons</h1>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default React.memo(NavBar);