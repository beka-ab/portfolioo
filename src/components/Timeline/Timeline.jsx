import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Info from "../Info/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { educationData } from "../../services/server";

const Timeline = () => {
  const status = useSelector((state) => state.educations.status);

  return (
    <section id="education" data-testid="timeline-component">
      <h2 className="education__title">Education</h2>
      <div className="education__timeline">
        <div className="education__timeline-container">
          {status === "loading" && (
            <div className="loading-overlay">
              <FontAwesomeIcon
                className="loading-overlay__icon"
                icon={faSyncAlt}
                spin
              />
            </div>
          )}
          {educationData.map((event, index) => (
            <div className="education__timeline-event" key={index}>
              <div className="timeline-event__date">
                {event.date} <div className="timeline-event__line"></div>
              </div>
              <div className="timeline-event__details">
                <Info title={event.title} text={event.description} />
                {event.date === 2023 && (
                  <a
                    target="_blank"
                    href="https://certificates.epam.com/certificates/0f5689e3-f729-4582-9ee4-9acfbf18adb4"
                    rel="noreferrer"
                  >
                    View Certificate
                  </a>
                )}
                <div className="timeline-event__arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export { Timeline };
