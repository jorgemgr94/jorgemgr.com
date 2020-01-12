import React from "react";
import { technologies } from "../../util/database";

const TechnicalExperience = () => {
	return (
		<>
			<div className="bold">TECHNICAL EXPERIENCE</div>
			<ul className="list-unstyled">
				<li>
					<span className="primary-text mr-1">
						Current dev stack:
					</span>
					<span>
						{technologies.filter(t => t.status === 0).map(t => `${t.name}, `)}
					</span>
					<br />
					<br />
				</li>
				<li>
					<span className="primary-text mr-1">
						Thing I'm learning or I'm looking to learn soon:
					</span>
					<span>
						{technologies.filter(t => t.status === 1).map(t => `${t.name}, `)}
					</span>
					<br />
					<br />
				</li>
				<li>
					<span className="primary-text mr-1">
						Technologies I have used:
					</span>
					<span>
						{technologies.filter(t => t.status === 2).map(t => `${t.name}, `)}
					</span>
				</li>
			</ul>
		</>
	);
};

export default TechnicalExperience;
