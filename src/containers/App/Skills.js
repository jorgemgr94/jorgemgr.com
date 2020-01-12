import React from "react";
import { technologies } from "../../util/database";

function Skills() {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>
        <h3 className="mb-2">Current dev stack</h3>
        <p className="mb-4">
          {technologies.filter(t => t.status === 0).map(t => `${t.name}, `)}
        </p>
        <h3 className="mb-2">
          Things I'm learning or I'm looking to learn soon
        </h3>
        <p className="mb-4">
          {technologies.filter(t => t.status === 1).map(t => `${t.name}, `)}
        </p>
        <h3 className="mb-2">Technologies I have used</h3>
        <p className="mb-4">
          {technologies.filter(t => t.status === 2).map(t => `${t.name}, `)}
        </p>
      </div>
    </section>
  );
}

export default Skills;
