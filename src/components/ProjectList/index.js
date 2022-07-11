
import React, { useState}  from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ project }) => {
const projects = [
    {
        name: 'PetLink 2.0',
        image:'Petlink2_screenshot.png',
        description: "A full stack MERN single page application for pet lovers to share and enjoy photos of adorable animals",
        role: "Back-end developer, CSS, sidebar feature",
        technologies: "MERN stack (MongoDB, Express, React, Node), Cloudinary, GraphQL, Mongoose ODM, JWT, JavaScript, HTML, CSS, React-Bootstrap",
        application:"https://serene-wildwood-60342.herokuapp.com/" ,
        github:'https://github.com/Darigay/PetLink_2.0',
    },
    {
        name: 'PetLink',
        image:'petlink.png',
        description: "A social media application for animal lovers to share and enjoy photos of pets",
        role: "Team leader, Front-end developer, Handlebars",
        technologies: "Cloudinary, Node, Express, Express Handlebars, MySQL, JavaScript, HTML, CSS",
        application:'https://gentle-tundra-78964.herokuapp.com/',
        github:'https://github.com/cbushman9/petlink',
    },
    {
        name: 'On Screen',
        image:'on_screen.png',
        description: "A web application that allows users to view currently playing movies and enter their zip code to view nearby theaters",
        role: "Bulma Carousel feature, troubleshooting errors",
        technologies: "HTML, CSS, JavaScript, Bulma, Bulma Carousel, jQuery, Moment.js, Google Maps API, The Movie DB API",
        application:'https://mkelsch2000.github.io/Down-Hill-From-Here/',
        github:'https://github.com/mkelsch2000/Down-Hill-From-Here',
    },
    {
        name: 'Budget Tracker',
        image:'budget_tracker.png',
        description: "A simple budget tracking app that can be used with or without an internet or data connection",
        role: "solo",
        technologies: "Node.js, npm, MongoDB, Github, Heroku, JavaScript, HTML, CSS, Express.js, Mongoose, jQuery, webpack",
        application:'https://tranquil-eyrie-30762.herokuapp.com/',
        github:'https://github.com/HaleyNicole126/for-the-budget',
    },
    {
        name: 'Search for Books',
        image:'book_search.png',
        description: "A book search engine refactored to use a GraphQL API built with Apollo Server",
        role: "solo",
        technologies: "Graph QL, Apollo Server, JavaScript",
        application:'https://peaceful-springs-23273.herokuapp.com/',
        github:'https://github.com/HaleyNicole126/books-to-search',
    },
    {
        name: 'First Portfolio',
        image:'portfolio1.png',
        description: "A portfolio built with HTML and CSS",
        role: "solo",
        technologies: "HTML, CSS",
        application:'https://haleynicole126.github.io/portfolio/',
        github:'https://github.com/HaleyNicole126/portfolio',
    },
]


return (
    <div>
      <div className="flex-row">
        {projects.map(project => (<div key={project.name} className="card space-between"><div className='petcard'>
        <h3>{project.name}</h3>
          <a href={project.application}><img
            src={require(`../../assets/screenshots/${project.image}`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.image}
          /></a>
          
          <p><i>Description: </i>{project.description}</p>
          <p><i>Role: </i>{project.role}</p>
          <p><i>Technologies Used: </i>{project.technologies}</p>
          <a href={project.application}>{project.name} link</a><br></br> 
          <a href={project.github}>Github link</a></div></div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;

