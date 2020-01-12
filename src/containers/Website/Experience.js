import React from "react";
import { positions } from "../../util/database";

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

				{positions.map(position => (
					<div
						key={position.id}
						className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
					>
						<div className="resume-content">
							<h3 className="mb-0">{position.name}</h3>
							<div className="subheading mb-3">{position.company}</div>
							<p>{position.description}</p>
						</div>
						<div className="resume-date text-md-right">
							<span className="text-primary">
								{formatDate(position.startAt)} - {formatDate(position.endAt)}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Experience;
