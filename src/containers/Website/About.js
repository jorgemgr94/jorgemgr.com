import React from "react";
import { socialIcons } from "../../util/database";

function About() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h1>Hi, I'm Jorge García!</h1>
        <div className="subheading mb-5">
          <span role="img" aria-label="intro">
            Software Developer 👨‍💻, Consultant 🏢, Geek 🤓, Gamer 🎮, Startups
            lover 🚀 and more..
          </span>
        </div>
        <p className="lead mb-5">
          I've worked with startups, as well as small, mid and large companies,
          facing several scopes in Products, like: Multiple timezones, Multiple
          Languages, Escalability, Highly sense of responsibility, Fast
          learning.
        </p>
        <p className="lead mb-5">
          I love and believe in teamwork, smart work, best practices, home
          office, leadership, priority, order, people first, quickly adapt to
          change, new tech's, DevOps, startups.
        </p>
        <div className="social-icons">
          {socialIcons.map(socialIcon => (
            <a
              key={socialIcon.id}
              href={socialIcon.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={socialIcon.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
