import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div>
            <h2>Main Features</h2>
            <div>
                <Link to="/list-component">List Component</Link>
            </div>
            <div>
                <Link to="/card-page">Card Page</Link>
            </div>
            <div>
                <Link to="/counter-page">Counter Page</Link>
            </div>
            <div>
                <Link to="/nav-page">Nav Page</Link>
            </div>
            <div>
                <Link to="/product-list-page">Product List API Page</Link>
            </div>
            <div>
                <Link to="/product-detail-page">Product Detail (Submit general form)</Link>
            </div>
            <div>
                <Link to="/user-context-page">Context (Share the data between multiple component using context API)</Link>
            </div>
            <div>
                <Link to="/redux-page">API data share via redux-tool-kit</Link>
            </div>
            <div>
                <Link to="/router-page/457891">Access the router params</Link>
            </div>
            <div>
                <Link to="/scroll-pagination">React Scroll pagination</Link>
            </div>
            <div>
                <Link to="/function-props">Pass callback function as props</Link>
            </div>
            <div>
                <Link to="/lazy-page">This page is loading Components by using Lazy Loading</Link>
            </div>
        </div>
    )
}

export default HomePage;