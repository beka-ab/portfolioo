import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

import "./timeline.scss";
export default function Timeline(props) {
  const tringle = <FontAwesomeIcon className="tringle" icon={faCaretLeft} />;
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
