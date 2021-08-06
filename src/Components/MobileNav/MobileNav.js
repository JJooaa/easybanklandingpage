import React from "react";
import "./MobileNav.css";

const MobileNav = ({ setIsActive }) => {
    const options = ["Home", "About", "Contact", "Blog", "Careers"];
    
    return (
        <div className="mobile-nav">
            {options.map((item) => {
                return <p onClick={() => setIsActive(false)}>{item}</p>;
            })}
        </div>
    );
};

export default MobileNav;
