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
            alt="photo of Haley Schwenk smiling and holidng a camera"
          />
          I'm an experienced administrative professional with a Master of Arts
          focused in Clinical Psychology from The University of South Dakota. As
          a graduate student, I gained teaching, clinical, and research
          experience. I also have a history of working in agriculture as well as
          the hospitality industry.<br></br><br></br> My skills include full-stack web development
          (including MERN), React, MongoDB, Mongoose, SQL, Sequelize,
          JavaScript, Express.js, Node.js, HTML, CSS, Git, R, MATLAB, SPSS,
          Microsoft Office, and customer service.
        </p>
      </div>
    </section>
  );
}

export default About;
