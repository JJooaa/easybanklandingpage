import React from "react";
import "./NavigationBar.css";
import logo from "../../images/logo.svg";
import RequestInviteButton from "../RequestInviteButton/RequestInviteButton";

const NavigationBar = () => {
    return (
        <div className="Navbar">
            <img className="logo" src={logo} alt="logo" />
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>
            </nav>
            <RequestInviteButton />
        </div>
    );
};

export default NavigationBar;
