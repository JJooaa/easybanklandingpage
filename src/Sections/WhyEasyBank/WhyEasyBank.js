import React from "react";
import "./WhyEasyBank.css";
import Perk from "../../Components/Perk/Perk";
import onlineIcon from "../../images/icon-online.svg";
import budgetingIcon from "../../images/icon-budgeting.svg";
import onboardingIcon from "../../images/icon-onboarding.svg";
import apiIcon from "../../images/icon-api.svg";

const object = {
    perk1: {
        header: "Online Banking",
        image: onlineIcon,
        para: "Our modern web and mobile applications allow you to keep track of your finanances wherever you are in the world.",
    },
    perk2: {
        header: "Simple Budgeting",
        image: budgetingIcon,
        para: "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    perk3: {
        header: "Fast Onboarding",
        image: onboardingIcon,
        para: "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    perk4: {
        header: "Open API",
        image: apiIcon,
        para: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
};

const WhyEasyBank = () => {
    return (
        <div className="whyEasy-section">
            <div
                style={{
                    maxWidth: 1200,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <div className="why-header">
                    <h2 className="why-h2">Why choose Easybank?</h2>
                    <p className="why-p">
                        We leverage Open Banking to turn your bank account intro
                        your financial hub. <br />
                        Control your finances like never before.
                    </p>
                </div>
                <div className="perks-container">
                    {Object.keys(object).map((item, i) => (
                        <Perk
                            key={i}
                            text={object[item].para}
                            header={object[item].header}
                            image={object[item].image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyEasyBank;
