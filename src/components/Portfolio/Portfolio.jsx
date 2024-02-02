import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { portfolioItems } from "../../utilities/projects";
import imagesLoaded from "imagesloaded";
import PortfolioInfo from "./Portfolioinfo";

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  const portfolioRef = useRef(null);

  useEffect(() => {
    const iso = new Isotope(portfolioRef.current, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
      filter: filter,
    });

    const imagesLoad = imagesLoaded(portfolioRef.current);
    imagesLoad.on("progress", () => {
      iso.layout();
    });

    return () => {
      iso.destroy();
    };
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    if (filter === newFilter) {
      setFilter("*");
    } else {
      setFilter(newFilter);
    }
  };

  return (
    <section id="portfolio" data-testid="portfolio-component">
      <h2 className="portfolio__title">Portfolio</h2>
      <div className="portfolio__container">
        <div className="portfolio__filter">
          <button
            onClick={() => handleFilterChange("*")}
            className={`portfolio__filter-button ${
              filter === "*" ? "active" : ""
            }`}
          >
            All
          </button>
          <span className="portfolio__filter-divider">/ </span>
          <button
            onClick={() => handleFilterChange(".projects")}
            className={`portfolio__filter-button ${
              filter === ".projects" ? "active" : ""
            }`}
          >
            individual projects
          </button>
          <span className="portfolio__filter-divider">/ </span>
          <button
            onClick={() => handleFilterChange(".freelance")}
            className={`portfolio__filter-button ${
              filter === ".freelance" ? "active" : ""
            }`}
          >
            freelance
          </button>
          <span className="portfolio__filter-divider">/ </span>
          <button
            onClick={() => handleFilterChange(".collaborative")}
            className={`portfolio__filter-button ${
              filter === ".collaborative" ? "active" : ""
            }`}
          >
            collaborative projects
          </button>
        </div>
        <div className="portfolio__items" ref={portfolioRef}>
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.category}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="portfolio-item__image"
              />
              <PortfolioInfo
                title={item.title}
                description={item.description}
                urlRepo={item.urlRepo}
                urlLive={item.urlLive}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
