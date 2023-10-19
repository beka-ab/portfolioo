import React from "react";
import Box from "../components/Box";
import { Headlines } from "../data/data";
import Timeline from "../components/timeline/Timelune";
import Experience from "../components/experience/Experience";
import { Experience as experienceData } from "../data/data";

export default function Main() {
  return (
    <section>
      <h1>About me</h1>
      <Box headline={Headlines[0].Headline} content={Headlines[0].content} />
      <h1>Education</h1>
      <div>
        <div>
          <div>
            <Timeline
              headline={Headlines[1].Headline}
              content={Headlines[1].content}
            />
            <Timeline
              headline={Headlines[2].Headline}
              content={Headlines[2].content}
            />
            <Timeline
              headline={Headlines[3].Headline}
              content={Headlines[3].content}
            />
          </div>
        </div>
      </div>
      <Experience experiences={experienceData} />
    </section>
  );
}
