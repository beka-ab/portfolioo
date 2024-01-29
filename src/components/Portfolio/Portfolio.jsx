import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import card from "../../assets/images/intercard.png";
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

  const portfolioItems = [
    {
      id: 1,
      category: "all, projects",
      title: "Interactive Rating",
      description: "Some UI project description 1.",
      urlRepo: "https://github.com/beka-ab/interactive-rating",
      imageUrl: "./",
      urlLive: "https://beka-ab.github.io/interactive-rating/",
    },
    {
      id: 2,
      category: "all, projects",
      title: "Tip calculator app",
      description: "Some UI project dscription 1.",
      urlRepo: "https://github.com/beka-ab/tip-calculator-app",
      imageUrl: card,
      urlLive: "https://beka-ab.github.io/tip-calculator-app/",
    },
    {
      id: 3,
      category: "all, projects",
      title: "Interactive card details form main ",
      description: "",
      urlRepo: "https://github.com/beka-ab/interactive-card-details-form-main",
      imageUrl: card,
      urlLive: "https://beka-ab.github.io/interactive-card-details-form-main/",
    },
    {
      id: 4,
      category: "all, projects",
      title: "Article Preview Component",
      description: "",
      urlRepo: "https://github.com/beka-ab/Article-Preview-Component",
      imageUrl: card,
      urlLive: "https://beka-ab.github.io/Article-Preview-Component/",
    },
    {
      id: 5,
      category: "all, projects",
      title: "Api Advice Generator App",
      description: "Some UI project description 1.",
      urlRepo: "https://github.com/beka-ab/advise-api",
      imageUrl: card,
      urlLive: "https://beka-ab.github.io/advise-api/",
    },
    {
      id: 6,
      category: "all, projects",
      title: "Online eStore",
      description: "Some UI project description 1.",
      urlRepo: "https://github.com/beka-ab/online-Estore",
      imageUrl: card,
      urlLive: "https://product-list-add.000webhostapp.com/",
    },
    {
      id: 7,
      category: "all, projects",
      title: "IT courses page",
      description: "Some UI project description 1.",
      urlRepo: "https://github.com/beka-ab/TBCxUSAID",
      imageUrl: "../../assets/images/estore.png",
      urlLive: "https://beka-ab.github.io/TBCxUSAID/",
    },
    {
      id: 8,
      category: "all, projects",
      title: "photosnap-multi-page-website",
      description: "Some UI project description 1.",
      urlRepo: "https://github.com/beqa200/photosnap-multi-page-website-011",
      imageUrl: card,
      urlLive: "https://photosnap-multi-page-website-011.vercel.app/",
    },
    {
      id: 9,
      category: "all, freelance",
      title: "Web page for hotel",
      description: "Some UI project description 1.",
      imageUrl: card,
      urlLive: "https://khuloinn.ge/",
    },
    {
      id: 10,
      category: "all, freelance",
      title: "Cleaning service",
      description: "",
      imageUrl: card,
      urlLive: "https://cleanergeorgia.ge/",
    },
  ];

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
            projects
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
