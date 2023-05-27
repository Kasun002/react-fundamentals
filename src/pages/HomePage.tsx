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
        </div>
    )
}

export default HomePage;