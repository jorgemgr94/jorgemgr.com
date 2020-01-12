import React from "react";
import Position from "./Position";

const ProfessionalExperience = props => {
  return (
    <>
      <span className="bold">PROFESSIONAL EXPERIENCE</span>
      <br />
      <br />
      {props.data.map(position => {
        return <Position key={position.id} data={position} />;
      })}
    </>
  );
};

export default ProfessionalExperience;
