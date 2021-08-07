import React from "react";
import "./Footer.css";
import ytIcon from "../../images/icon-youtube.svg";
import igIcon from "../../images/icon-instagram.svg";
import twitterIcon from "../../images/icon-twitter.svg";
import pintIcon from "../../images/icon-pinterest.svg";
import fbIcon from "../../images/icon-facebook.svg";
import logo2 from "../../images/logo2.svg";
import RequestInviteButton from "../RequestInviteButton/RequestInviteButton";

const Footer = () => {
    return (
        <div className="footer">
            <div className="contents">
                <div className="logo-and-socials">
                    <img className="logofooter" src={logo2} alt="easybank" />
                    <div className="social-icons">
                        <img
                            className="social-icon"
                            src={fbIcon}
                            alt="facebook"
                        />
                        <img
                            className="social-icon"
                            src={ytIcon}
                            alt="youtube"
                        />
                        <img
                            className="social-icon"
                            src={twitterIcon}
                            alt="twitter"
                        />
                        <img
                            className="social-icon"
                            src={pintIcon}
                            alt="pinterest"
                        />
                        <img
                            className="social-icon"
                            src={igIcon}
                            alt="instagram"
                        />
                    </div>
                </div>
                <div className="footer-links">
                    <div className="set">
                        <a>About Us</a>
                        <a>Contact</a>
                        <a>Blog</a>
                    </div>
                    <div className="set">
                        <a>Careers</a>
                        <a>Support</a>
                        <a>Private Policy</a>
                    </div>
                </div>
                <div className="rights-reserved-plus-button">
                    <RequestInviteButton />
                    <p className="copyright-p">
                        &copy; Easybank. All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
