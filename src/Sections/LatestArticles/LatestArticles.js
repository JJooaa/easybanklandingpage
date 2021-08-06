import React from "react";
import "./LatestArticles.css";
import Article from "../../Components/Article/Article";
import confetti from "../../images/image-confetti.jpg";
import plane from "../../images/image-plane.jpg";
import restaurant from "../../images/image-restaurant.jpg";
import currency from "../../images/image-currency.jpg";

const articles = {
    article1: {
        image: currency,
        writer: "Claire Robinson",
        header: "Receive money in any currency with no fees",
        text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only reveice money in a single ...",
    },
    article2: {
        image: restaurant,
        writer: "Wilson Hutton",
        header: "Treat yourself without worrying about money",
        text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    },
    article3: {
        image: plane,
        writer: "Wilson Hutton",
        header: "Take your Easybank card wherever you go",
        text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    },
    article4: {
        image: confetti,
        writer: "Claire Robinson",
        header: "Our invite-only Beta accounts are now live!",
        text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    },
};

const LatestArticles = () => {
    return (
        <div className="latest-articles">
            <div style={{ maxWidth: 1200, marginRight: "auto", marginLeft: "auto", paddingBottom: 25 }}>
                <h2 className="articles-h2">Latest Articles</h2>
                <div className="articles-container">
                    {Object.keys(articles).map((item, i) => (
                        <Article
                            key={i}
                            writer={articles[item].writer}
                            text={articles[item].text}
                            header={articles[item].header}
                            image={articles[item].image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestArticles;
