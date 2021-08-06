import React, { useState } from "react";
import "./NavigationBar.css";
import logo from "../../images/logo.svg";
import RequestInviteButton from "../RequestInviteButton/RequestInviteButton";
import MobileNav from "../MobileNav/MobileNav";
import Hamburger from "../Hamburger/Hamburger";
import { useWindowWidth } from "@react-hook/window-size";

const NavigationBar = ({ windowDimensions }) => {
    const [isActive, setIsActive] = useState(false);
    const onlyWidth = useWindowWidth({ leading: false });
    return (
        <div className="Navbar">
            <img className="logo" src={logo} alt="logo" />
            {onlyWidth < 831 + 17 ? (
                <>
                    <Hamburger setIsActive={setIsActive} isActive={isActive} />
                </>
            ) : (
                <>
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
                </>
            )}
            {isActive ? <MobileNav setIsActive={setIsActive}/> : null}
        </div>
    );
};

export default NavigationBar;
