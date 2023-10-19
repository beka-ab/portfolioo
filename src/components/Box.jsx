import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Headlines } from "../data/data";
export default function Box(props) {
  return (
    <div>
      <p>{props.content}</p>
    </div>
  );
}
