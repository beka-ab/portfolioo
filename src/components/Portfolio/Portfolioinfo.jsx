import React from "react";

const PortfolioInfo = ({ title, text, description, urlRepo, urlLive }) => {
  return (
    <div className="portfolio__info">
      <h3 className="portfolio__title">{title}</h3>
      <p className="portfolio__content">{text}</p>
      <p className="portfolio__content">{description}</p>
      <a
        className="portfolio__link"
        href={urlRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        {urlRepo && <span className="link">View Repo</span>}
      </a>
      <br />
      <br />
      <a
        href={urlLive}
        className="portfolio__link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="link">View Live</span>
      </a>
    </div>
  );
};

export default PortfolioInfo;
