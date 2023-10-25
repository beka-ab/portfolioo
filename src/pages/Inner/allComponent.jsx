import React from "react";
import About from "../../components/Box/Box";
import { Timeline } from "../../components/Timeline/Timeline";
import eventsData from "../../modules/timelineData";
import Expertise from "../../components/Expertise/Expertise";
import Portfolio from "../../components/Portfolio/Portfolio";
import { Address } from "../../components/Address/Adress";
import { Feedback } from "../../components/Feedback/Feedback";
import experiences from "../../modules/experience";
import { Skills } from "../../components/Skills/Skills";
import feedbackData from "../../modules/feedbackData";

const AllComponents = () => {
  return (
    <main className="main">
      <section className="main-container">
        <About />
        <Timeline data={eventsData} />
        <Expertise data={experiences} />
        <Skills />
        <Portfolio />
        <Address />
        <Feedback data={feedbackData} />
      </section>
    </main>
  );
};

export default AllComponents;
