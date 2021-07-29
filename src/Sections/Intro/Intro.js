import React from "react";
import "./Intro.css";
import RequestInviteButton from "../../Components/RequestInviteButton/RequestInviteButton";
import mockups from "../../images/image-mockups.png";

const Intro = () => {
    return (
        <div className="intro">
            <div className="info">
                <h1 className="header">
                    Next generation <br /> digital banking
                </h1>
                <p className="info-p">
                    Take your financial life online. Your Easybank account{" "}
                    <br /> will be a one-stop-shop for spending, saving, <br />{" "}
                    budgeting, investing, and much more
                </p>
                <RequestInviteButton />
            </div>
            <div className="picture">
                <img style={{paddingTop: 20}}src={mockups} alt="4-phones" />
            </div>
        </div>
    );
};

export default Intro;
