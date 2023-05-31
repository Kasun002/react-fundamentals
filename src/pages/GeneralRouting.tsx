import React from "react";
import { useParams } from "react-router-dom";

const GeneralRouting: React.FC = () => {
    const { id } = useParams();
    return (
        <div>Router Param ID: {id}</div>
    )
}

export default GeneralRouting;