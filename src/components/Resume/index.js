import React from "react";
import resume from "../../assets/resume/schwenk_resume_Jun22.pdf";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <h2>Proficiencies</h2>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>SQL</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React</li>
        <li>MERN</li>
        <li>Git and Github</li>
        <li>R</li>
        <li>MATLAB</li>
        <li>SPSS</li>
        <li>Microsoft Excel</li>
      </ul>
      <h2>
        <a href={resume} target="_blank">
          Resume pdf
        </a>
      </h2>
    </section>
  );
}

export default Resume;
