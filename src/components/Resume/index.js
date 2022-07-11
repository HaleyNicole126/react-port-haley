import React from "react";
import resume from "../../assets/resume/schwenk_resume_Jul22.pdf";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <br></br>
      <h3>Proficiencies</h3>
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
      <br></br>
      <h2>
        <a href={resume} target="_blank">
          Resume pdf
        </a>
      </h2>
    </section>
  );
}

export default Resume;
