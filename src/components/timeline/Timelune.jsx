import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee , fa-triangle } from "@fortawesome/free-solid-svg-icons";
import "./timeline.scss";
export default function Timeline(props) {
  const tringle = <FontAwesomeIcon icon="fa-duotone fa-triangle" />;
  return (
    <div className="exp">
      <div className="exp-year">
        <h6>1998</h6>
        <div className="ver-line"></div>
      </div>
      <div className="exp-content">
        {tringle}
        <h3>{props.headline}</h3>
        <p>{props.content}</p>
      </div>
    </div>
  );
}
