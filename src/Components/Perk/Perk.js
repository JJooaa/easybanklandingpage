import React from "react";
import "./Perk.css";
import OnlineIcon from "../../images/icon-online.svg";

const Perk = ({ header, text, image }) => {
    return (
        <div className="perk">
            <img className="perk-image" src={image} alt="online" />
            <h3 className="perk-h3">{header}</h3>
            <p className="perk-p">{text}</p>
        </div>
    );
};

export default Perk;
