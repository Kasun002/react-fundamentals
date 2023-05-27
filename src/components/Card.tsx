import React from "react";
import './css/_card.css';

const Card: React.FC<ICard> = ({ title, description, photo }) => {
    return (
        <div className="card flex-container">
            <div className="card__title flex-container">{title}</div>
            <div className="card__description flex-container">{description}</div>
            <div className="card_graphic flex-container">
                <img src={photo} alt="Sample Image" />
            </div>
        </div>
    );
}


export default Card;

interface ICard {
    title: string;
    description?: string;
    photo?: string;
}