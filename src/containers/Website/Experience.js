import React from "react";
import { positions, formatExperience } from "../../util/database";

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

function formatDate(date) {
	if (!date) return "Current";
	return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function Experience() {
	return (
		<section
			className="resume-section p-3 p-lg-5 d-flex align-items-center"
			id="experience"
		>
			<div className="w-100">
				<h2 className="mb-5">Work Exp</h2>
				{positions.map((position, key) => (
					<React.Fragment
						key={key}
					>
						<div

							className="resume-item d-flex flex-column flex-md-row justify-content-between"
						>
							<div className="resume-content">
								<h3 className="mb-0">{position.name}</h3>
								<div className="subheading mb-3">{position.company}</div>
								<p>{position.technicalEnv}</p>
							</div>
							<div className="resume-date text-md-right">
								<div>
									{formatDate(position.startAt)} - {formatDate(position.endAt)}
								</div>
								<div>
									{formatExperience(position.startAt, position.endAt)}
								</div>
							</div>
						</div>
						<div className="mb-4">
							<p>
								<button className="btn btn-outline-light" type="button" data-toggle="collapse" data-target={`#collapseDescription${key}`} aria-expanded="false">
									Read Experience and Achievements <i className="fas fa-trophy"></i>
								</button>
							</p>
							<div className="collapse" id={`collapseDescription${key}`}>
								<div className="card card-body bg-dark">
									{position.description}
								</div>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</section >
	);
}

export default Experience;
