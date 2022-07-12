import react from "react";

import selfie from "../../assets/photos/selfie.jpg";

function About() {
  return (
    <section id="about" className="my-5 align-center">
      <h1>About Me</h1>

      <div className="flex-row space-between">
        <p className="container">
          <img
            src={selfie}
            className="my-2"
            style={{
              float: "left",
              width: "15vw",
              padding: "20px",
              paddingTop: "0px",
              alignItems: "baseline",
            }}
            alt="Haley Schwenk smiling and holidng a camera"
          />
          My name is Haley Schwenk, and I'm a full stack web developer with a Master of Arts focused in Clinical Psychology from The University of South Dakota. 
          {/* As a graduate student, I gained teaching, clinical, and research experience. I also have a history of working in agriculture and the hospitality industry, where I demonstrated exceptional customer service and technical support with software including Microsoft Office 365 and Resort Data Processing. */}
          <br></br>
          <br></br> 
          I recently earned a certificate in Full Stack Development from the University of Utah, and my web development skills include the MERN stack, React, MongoDB, Mongoose, SQL, Sequelize, Heroku,JavaScript, Express.js, Node.js, HTML (HTML5), CSS, Git, GitHub, APIs, and jQuery. I am also proficient in data analysis using R and SPSS along with programming in MATLAB. 
          <br></br>
          <br></br>
          I have a passion for problem-solving and finding creative solutions. I have helped companies, including Alta's Rustler Lodge and Schwenk Aircraft Co., generate solutions using my creativity together with my technical abilities. I enjoy tackling new challenges while constantly learning and expanding my skillset. I am seeking to further my career in a role where I can grow with a company that is excited about making a difference. 
        </p>
      </div>
    </section>
  );
}

export default About;
