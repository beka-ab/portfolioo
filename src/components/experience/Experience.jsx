import React from "react";
import "./experience.scss";
export default function Experience(props) {
  const experiences = props.experiences;

  return (
    <section>
      <h1>Experience</h1>
      {experiences.map((experience, index) => (
        <div className="expc-container" key={index}>
          <div className="exp-company">
            <h6>{experience.info.company}</h6>
            <p>{experience.date}</p>
          </div>
          <div>
            <h3>{experience.info.job}</h3>
            <p>{experience.info.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
{
  /* <div className="expc-containet">
        <div className="exp-company">
          <h6>Google</h6>
          <p>2013-2014</p>
        </div>
        <div>
          <h3>Front-end developer / php programmer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringil
          </p>
        </div>
      </div> */
}
