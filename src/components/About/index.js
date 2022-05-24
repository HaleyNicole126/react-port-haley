import react from "react";
import coverImage from "../../assets/cover/cover_image_v2.jpg";
import selfie from "../../assets/photos/selfie.jpg";

function About() {
  return (
    <section id="about" className="my-5 flex-row align-center">
      <h1>About Me</h1>
      <div className="flex-row align-center">
        <div className="container flex-row justify-space-between" style={{ display: "inline-block" }}>
 
            <img
              src={selfie}
              className="my-2"
              style={{ float: "left", width: "15vw", padding: "20px" }}
              alt="photo of Haley Schwenk"
            />
        
            <p style={{ padding: "30px", marginTop: "80px" }}>
              I'm an experienced administrative professional with a Master of
              Arts focused in Clinical Psychology from The University of South
              Dakota. I also have a history of working in agriculture as well as
              the hospitality industry. My skills include full-stack web
              development (including MERN), React, MongoDB, Mongoose, SQL,
              Sequelize, JavaScript, Express.js, Node.js, HTML, CSS, Git, R,
              SPSS, Microsoft Office, and customer service.
            </p>
          
        </div>
      </div>
    </section>
  );
}

export default About;
