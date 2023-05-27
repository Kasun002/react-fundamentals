import React from "react";
import Card from "../components/Card";

const CardPage: React.FC = () => {
    return (
        <Card
            title="Public Images"
            description="This represent the public images of each of dummy images"
            photo="https://www.w3schools.com/tags/img_girl.jpg" />
    )
}

export default CardPage;