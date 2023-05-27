import React from "react";
import Nav from "../components/Nav";

const navItems = [
    {
        title: 'List',
        link: '/list-component'
    }, {
        title: 'Card',
        link: 'card-page'
    }
];

const NavPage: React.FC = () => {
    return (
        <Nav navList={navItems} />
    )
}

export default NavPage;