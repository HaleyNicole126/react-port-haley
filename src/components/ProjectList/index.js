import React, { useState}  from 'react';

const ProjectList = ({ project }) => {
const projects = [
    {
        name: 'PetLink 2.0',
        image:'Petlink2_screenshot.png',
        application:"https://serene-wildwood-60342.herokuapp.com/" ,
        github:'https://github.com/Darigay/PetLink_2.0',
    },
    {
        name: 'PetLink',
        image:'petlink.png',
        application:'https://gentle-tundra-78964.herokuapp.com/',
        github:'https://github.com/cbushman9/petlink',
    },
    {
        name: 'On Screen',
        image:'on_screen.png',
        application:'https://mkelsch2000.github.io/Down-Hill-From-Here/',
        github:'https://github.com/mkelsch2000/Down-Hill-From-Here',
    },
    {
        name: 'Budget Tracker',
        image:'budget_tracker.png',
        application:'https://tranquil-eyrie-30762.herokuapp.com/',
        github:'https://github.com/HaleyNicole126/for-the-budget',
    },
    {
        name: 'Search for Books',
        image:'book_search.png',
        application:'https://peaceful-springs-23273.herokuapp.com/',
        github:'https://github.com/HaleyNicole126/books-to-search',
    },
    {
        name: 'First Portfolio',
        image:'portfolio1.png',
        application:'https://haleynicole126.github.io/portfolio/',
        github:'https://github.com/HaleyNicole126/portfolio',
    },
]


return (
    <div>
      <div className="flex-row">
        {projects.map(project => (<div key={project.name} className="card space-between">
          <img
            src={require(`../../assets/screenshots/${project.image}`)}
            alt={project.name}
            className="img-thumbnail mx-1"
            key={project.image}
          />
          <a href={project.application}>{project.name} link</a><br></br>
          <a href={project.github}>Github link</a></div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
