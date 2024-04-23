import React from "react";
import Box from "../../utilities/aboutSection";
const About = () => {
  return (
    <section id="about" data-testid="about-component">
      <Box
        title="About me"
        content="Hello, I'm Beka Abuladze, a passionate junior front-end developer with a toolbox filled with HTML, CSS, Sass, Git, JavaScript, Typescript and React. I thrive on solving problems in effective and innovative ways, always seeking elegant solutions to complex challenges.

My journey in the world of coding is marked by a relentless work ethic. I find joy in the process of turning ideas into tangible, functional products. From crafting pixel-perfect interfaces to diving into the intricacies of code, I embrace each step of the development journey.

Being a problem solver at heart, I approach each project with enthusiasm, ready to tackle obstacles head-on. I believe in the power of continuous learning and adapting to new technologies. Git is my ally in version control, and I find joy in creating seamless and dynamic user experiences with JavaScript and React.

Driven by a goal-oriented mindset, I am a firm believer that with a destination in mind, coupled with determination, I will inevitably reach my goals. As a junior developer, I am excited about the challenges ahead and the growth that comes with them. Join me on this coding adventure, where every line of code tells a story of innovation and determination.

Let's build something incredible together!

"
        contentClassName="about__text"
        headingClassname="about__heading"
      ></Box>
    </section>
  );
};

export default About;
