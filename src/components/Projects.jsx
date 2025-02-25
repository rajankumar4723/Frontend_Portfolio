import React from "react";
import "../styles/Projects.css";
import Contact from "../assets/Contact.png";
import Timer from "../assets/Timer.png";
import Portfolio from "../assets/Portfolio.png";
import Cards from "../assets/Cards.png";
import Footer from "./Footer";
import Port from "../assets/Port.png";
import Todo from "../assets/ToDo.png";
const Projects = () => {
  return (
    <>
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project-grid">
      <div className="project">
          <img src={Port} alt="Project 1" />
          <h3>Portfolio </h3>
          <p>Port from using html css js </p>
          <a
            href="https://web-t4s7.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live  Project
          </a>
        </div>{" "}
        <div className="project">
          <img src={Contact} alt="Project 1" />
          <h3>Contact Form</h3>
          <p>Contact from using html css js </p>
          <a
            href="https://project1-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
        <div className="project">
          <img src={Timer} alt="Project 1" />
          <h3>Timer</h3>
          <p>Contact from using html css js </p>
          <a
            href="https://project1-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>{" "}
        <div className="project">
          <img src={Portfolio} alt="Project 1" />
          <h3>Portfolio </h3>
          <p>Portfolio Build Using React</p>
          <a
            href="https://project1-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>{" "}
        <div className="project">
          <img src={Cards} alt="Project 1" />
          <h3>Cards</h3>
          <p>Contact from using html css js </p>
          <a
            href="https://project1-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project">
          <img src={Contact} alt="Project 1" />
          <h3>Contact</h3>
          <p>Contact from using html css js </p>
          <a
            href="https://project1-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>{" "}
        <div className="project">
          <img src={Todo} alt="Project 1" />
          <h3>To-DO</h3>
          <p>Build Using React and Node js </p>
          <a
            href="https://todo-app-eight-lovat.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>{" "}
       
        <div className="project">
          <img src={Contact} alt="Project 1" />
          <h3>Contact</h3>
          <p>Contact from using html css js </p>
          <a
            href="https://project1-link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
    <Footer/>

    </>
  );
};

export default Projects;
