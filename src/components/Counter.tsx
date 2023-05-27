import React from "react";
import useCount from "../hooks/useCount";
import './css/_counter.css';

const Counter: React.FC = () => {
    const { count, inclementCount, decrementCount } = useCount()

    return (
        <div className="counter">
            <button className="counter__button" onClick={inclementCount}>+</button>
            <span className="counter__count">{count}</span>
            <button className="counter__button" onClick={decrementCount}>-</button>
        </div>
    )
}

export default Counter;