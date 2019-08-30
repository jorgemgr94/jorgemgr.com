import React from "react";

const positions = [
	{
		id: 1,
		name: "Full Stack Developer (Remote, Part time)",
		company: "Garage (Startup)",
		startAt: new Date("07/01/2019"),
		endAt: null,
		description:
			"Technical Environment: Ruby on Rails, Javascript, ReactJs, PostgreSQL, Heroku, Git, SCRUM, Docker, Gitlab,"
	},
	{
		id: 2,
		name: "Consultant / Full Stack Developer",
		company: "SINTEC",
		startAt: new Date("02/01/2019"),
		endAt: null,
		description:
			"Technical Environment: Php, NodeJs, Javascript, ReactJs, React Native, MySql, MongoDb, Google Cloud, AWS, Heroku, Git, Docker,"
	},
	{
		id: 3,
		name: "Full Stack Developer",
		company: "X8bit / SENSAI Empower Success (Startup) / Metalsa",
		startAt: new Date("06/01/2018"),
		endAt: new Date("02/01/2019"),
		description:
			"Technical Environment: NodeJs, Ruby on Rails, Javascript, ReactJs, React Native, MySql, SQL Server, AWS, Git, SCRUM, Linux server administration, Jira,"
	},
	{
		id: 4,
		name: "Team Leader",
		company: "HMS Sistemas de Información / ONCARE",
		startAt: new Date("10/01/2016"),
		endAt: new Date("08/01/2018"),
		description:
			"Technical Environment: Php, Javascript, ReactJs, Android w/ Kotlin, IOS w/ Swift, MySql, AWS, Git, Linux server administration, Bash,"
	},
	{
		id: 5,
		name: "Software Developer",
		company: "HMS Sistemas de Información / ONCARE",
		startAt: new Date("01/01/2015"),
		endAt: new Date("10/01/2016"),
		description:
			"Technical Environment: Php, Javascript, MySql, AWS, Linux server administration, Bash,"
	},
	{
		id: 6,
		name: "Software Developer",
		company: "Ingeniat",
		startAt: new Date("06/01/2014"),
		endAt: new Date("01/01/2015"),
		description:
			"Technical Environment: Php, Javascript, Android w/ Java, MySql, Linux server administration, Bash,"
	}
];

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
