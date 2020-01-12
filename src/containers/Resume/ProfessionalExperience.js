import React from "react";
import Position from "./Position";
import { profesionalExperience } from "../../util/database";

const ProfessionalExperience = () => {
	return (
		<>
			<span className="bold">PROFESSIONAL EXPERIENCE</span>
			<br />
			<br />
			{profesionalExperience.map(position => {
				return <Position key={position.id} data={position} />;
			})}
		</>
	);
};

export default ProfessionalExperience;
