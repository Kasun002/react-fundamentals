import React from "react";

interface IPropsComponentProps {
    count: number;
    inclementCount?: () => void;
    decrementCount?: () => void;
}

const CounterProps: React.FC<IPropsComponentProps> = ({ count, inclementCount, decrementCount }) => {

    return (
        <div className="counter">
            <button className="counter__button" onClick={decrementCount}>-</button>
            <span className="counter__count">{count}</span>
            <button className="counter__button" onClick={inclementCount}>+</button>
        </div>
    )
}

export default CounterProps;
