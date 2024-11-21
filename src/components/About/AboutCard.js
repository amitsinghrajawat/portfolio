import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amit Singh Rajawat </span>
            from <span className="purple"> Gwalior, India.</span>
            <br />
            I am currently employed as a software developer at SDGI Technologies.
            <br />
            I have completed Integrated BCA at MPCAS.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(102 204 219)" }}>
            "Code is not just a skill; <br/> it's a superpower to build, innovate, and solve the impossible."
          </p>
          <footer className="blockquote-footer">Amit Singh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
