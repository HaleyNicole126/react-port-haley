import React from "react";
import resume from "../../assets/resume/schwenk_resume_Jul22.pdf";

function Resume() {
  return (
    <section>
      <h1>Resume</h1>
      <br></br>
      <h3>Proficiencies</h3>
      <div>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>MySQL</li>
        <li>jQuery</li>
        <li>MongoDB</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>React</li>
        <li>API/JSON</li>
        <li>RESTful API</li>
        <li>State Management</li>
        <li>Command Line</li>
        <li>Database Theory</li>
        <li>Agile Methodologies</li>
        <li>Quality Assurance Testing</li>
        <li>Git</li>
        <li>Github</li>
        <li>Heroku</li>
        <li>SEO</li>
        <li>Responsive Design</li>
        <li></li>
        <li>R</li>
        <li>MATLAB</li>
        <li>SPSS</li>
        <li>Microsoft 365</li>
          <ul>
            <li>Excel Formulas and Functions</li>
            <li>Word</li>
            <li>Outlook</li>
            <li>PowerPoint</li>
          </ul>
        <li>Resort Data Processing</li>
      </ul>
      </div>
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
