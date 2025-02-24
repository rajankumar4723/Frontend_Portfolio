import React from "react";
import "../styles/About.css";
import Footer from "./Footer";
import Pic from "../assets/linkdin_pic.jpg";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="profile-image-container">
          <img
            src={Pic}
            alt="Kelly - UI/UX Designer & Web Developer"
            className="profile-image"
          />
        </div>
        <h1>About Me</h1>
        <div className="about-text">
          <p>
            I'm Kelly, a passionate UI/UX Designer & Web Developer with a focus
            on creating user-centered and visually appealing digital
            experiences.
          </p>
          <p>
            "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit." - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills">
              <div className="skill">
                <span className="skill-name">HTML</span>
                <div className="skill-progress" style={{ width: "100%" }}></div>
              </div>
              <div className="skill">
                <span className="skill-name">CSS</span>
                <div className="skill-progress" style={{ width: "100%" }}></div>
              </div>
              <div className="skill">
                <span className="skill-name">JavaScript</span>
                <div className="skill-progress" style={{ width: "75%" }}></div>
              </div>
              <div className="skill">
                <span className="skill-name">React</span>
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
              <div className="skill">
                <span className="skill-name">Java</span>
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
              <div className="skill">
                <span className="skill-name">DSA</span>
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
              <div className="skill">
                <span className="skill-name">MongoDB</span>
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>{" "}
              <div className="skill">
                <span className="skill-name">Node JS</span>
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>{" "}
              <div className="skill">
                <span className="skill-name">Tailwind CSS</span>
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <h2>Contact</h2>
            <ul>
              <li>
                <strong>Birthday:</strong> 1 May 1995
              </li>
              <li>
                <strong>Age:</strong> 30
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a
                  href="www.example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.example.com
                </a>
              </li>
              <li>
                <strong>Degree:</strong> Master
              </li>
              <li>
                <strong>Phone:</strong> +123 456 7890
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:email@example.com">email@example.com</a>
              </li>{" "}
              {/* Make email clickable */}
              <li>
                <strong>City:</strong> New York, USA
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
