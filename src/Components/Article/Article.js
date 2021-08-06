import React from "react";
import "./Article.css";

const Article = ({ image, writer, header, text }) => {
    return (
        <div className="article">
            <div className="article-image">
                <img className="article-img" src={image} />
            </div>
            <div className="article-info">
                <p className="article-writer">By {writer}</p>
                <h4>{header}</h4>
                <p className="article-p">{text}</p>
            </div>
        </div>
    );
};

export default Article;
