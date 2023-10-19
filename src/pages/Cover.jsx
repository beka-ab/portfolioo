import React from "react";
import "./cover.scss";
import Userimg from "../assets/images/userimg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Random from "../components/Box";
import { Link } from "react-router-dom";

export default function Mainpage() {
  return (
    <div className="container">
      <div className="main-bg">
        <div className="overlay"></div>
        <div className="user-info">
          <div className="user-img">
            <img className="img" src={Userimg} alt="" />
          </div>
          <section className="user-data">
            <h1>John Doe</h1>
            <h6>Programmer. Creative. Innovator</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo <br /> ligula eget dolor. Aenean massa. Cum sociis natoque{" "}
            </p>
            <Link to="../pages/Main">
              <Button content="know more" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
