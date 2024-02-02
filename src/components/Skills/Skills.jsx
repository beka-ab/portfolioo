import React from "react";
import "./skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGit,
  faCss3,
  faHtml5,
  faJs,
  faSass,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faDatabase } from "@fortawesome/free-solid-svg-icons";
export const Skills = () => {
  return (
    <section id="skills" className="skills" data-testid="skills-component">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="pacman"></div>
        <FontAwesomeIcon
          icon={faReact}
          color="#53C1DE"
          className="prog-icon react"
        />
        <FontAwesomeIcon
          icon={faGit}
          color="#F4511E"
          className="prog-icon git"
        />
        <FontAwesomeIcon
          icon={faCss3}
          color="#2AA4F4"
          className="prog-icon css"
        />
        <FontAwesomeIcon
          icon={faHtml5}
          color="red"
          className="prog-icon html"
        />
        <FontAwesomeIcon
          icon={faJs}
          color="#FFD600"
          className="prog-icon javascript"
        />
        <FontAwesomeIcon
          icon={faSass}
          color="#F06292"
          className="prog-icon  sass"
        />
      </div>
    </section>
  );
};
