import React from "react";
import { Link } from "react-router-dom";
import './css/_nav.css';

const Nav: React.FC<{ navList: INavItem[] }> = ({ navList }) => {
    return (
        <ul className="nav">
            {navList.map((nav, index) => (
                <li className="nav__item" key={`nav-item-${index}`}>
                    <Link to={nav.link}>{nav.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav;

interface INavItem {
    title: string;
    link: string;
}