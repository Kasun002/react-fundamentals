import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div>
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
        </div>
    )
}

export default HomePage;