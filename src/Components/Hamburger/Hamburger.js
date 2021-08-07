import React from "react";
import "./Hamburger.css";
import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";

const Hamburger = ({setIsActive, isActive}) => {
    return (
        <div>
            {isActive ? (
                <img
                    className="mobile-menu-button"
                    src={closeIcon}
                    alt="close"
                    onClick={() => setIsActive(false)}
                />
            ) : (
                <img
                    className="mobile-menu-button"
                    src={hamburgerIcon}
                    alt="hamburger"
                    onClick={() => setIsActive(true)}
                />
            )}
        </div>
    );
};

export default Hamburger;
