import React from "react";

export const technologies = [
	{ name: "React", status: 0 },
	{ name: "Javascript", status: 0 },
	{ name: "Typescript", status: 0 },
	{ name: "NodeJs", status: 0 },
	{ name: "PostgreSQL", status: 0 },
	{ name: "MongoDb", status: 0 },
	{ name: "React Native", status: 0 },
	{ name: "Gitlab", status: 0 },
	{ name: "AWS", status: 0 },
	{ name: "Heroku", status: 0 },
	{ name: "Docker", status: 0 },
	{ name: "Eslint", status: 0 },
	{ name: "Google Cloud", status: 0 },
	{ name: "Python", status: 0 },

	{ name: "Go", status: 1 },
	{ name: "Jest", status: 1 },
	{ name: "Terraform", status: 1 },
	{ name: "TypeORM", status: 1 },
	{ name: "Gitlab CI / CD", status: 1 },
	{ name: "Kubernetes", status: 1 },
	{ name: "GraphQl", status: 1 },
	{ name: "Devops", status: 1 },
	{ name: "Django", status: 1 },
	{ name: "Electron", status: 1 },
	{ name: "Rust", status: 1 },
	{ name: "Dart", status: 1 },
	{ name: "Elixir", status: 1 },
	{ name: "Web Assembly", status: 1 },

	{ name: "Laravel", status: 2 },
	{ name: "VueJS", status: 2 },
	{ name: "Php", status: 2 },
	{ name: "Html5", status: 2 },
	{ name: "CSS3", status: 2 },
	{ name: "Android w/ Java", status: 2 },
	{ name: "Android w/Kotlin", status: 2 },
	{ name: "IOS w/ Swift", status: 2 },
	{ name: "MySQL", status: 2 },
	{ name: "MariaDB", status: 2 },
	{ name: "SQL Server", status: 2 },
	{ name: "Bash", status: 2 },
	{ name: "Redis", status: 2 },
	{ name: "Ruby on Rails", status: 2 }
];

export const positions = [
	{
		name: "Consultant / Full Stack Developer",
		description: "",
		companyImg: require("../assets/img/works/sintec.png"),
		company: "SINTEC",
		startAt: new Date("02/01/2019"),
		endAt: null,
		technicalEnv:
			(<>
				Technical Environment: NodeJs, Ruby on Rails, Javascript, ReactJs, React Native, MySQL,
				SQL Server, AWS, Git, SCRUM, Linux server administration, Jira,
			</>)
	},
	{
		name: "Full Stack Developer (Remote, Part time)",
		description: "",
		companyImg: require("../assets/img/works/garage.png"),
		company: "Garage (Startup)",
		startAt: new Date("07/01/2019"),
		endAt: new Date("12/31/2019"),
		technicalEnv:
			(<>
				Technical Environment: Ruby on Rails, Javascript, ReactJs, PostgreSQL, Heroku, Git, SCRUM, Docker, Gitlab,
			</>)
	},
	{
		name: "Full Stack Developer",
		companyImg: require("../assets/img/works/sensai.jpg"),
		company: "X8bit / SENSAI Empower Success (Startup) / Metalsa",
		startAt: new Date("06/01/2018"),
		endAt: new Date("02/01/2019"),
		description:
			(<>
				Development of an integrated solution of the industry 4.0 that consists of reading
				information from a Schuler PLC through the mqtt protocol with NodeJs, this with
				the objective of getting relevant information about the press performance, such as
				stoppages on the machine, run times, design speed, current status of the machine, etc.
				<br />
				The solution consists in a hybrid application (React native) which is managed by a operators
				team of the machine, in this application the user can visualize production records of
				past days, capture production records, identify stoppages by area, report of stoppages by area,
				and real-time monitoring of the Schuler press. The registered stoppages as well as the information
				that the operator captures are displayed on a web page (ReactJs) which contains reports per day,
				detailed reports per hour, per run, as well as KPI indicators with graphs, this part of the solution
				helps to take decisions instantly to administrative users, as well as monitor the production in real
				time.
				<br />
				Another part of the solution is the ANDON screen, this screen is basically a mirror between
				the machine and a TV screen placed on the floor, where shows the actual status of the press,
				the production in process, etc. This project has scope to integrate technologies such as machine
				learning, artificial intelligence to the prevention of failures and processes speed up.
			</>),
		technicalEnv:
			(<>
				Technical Environment: NodeJs, Ruby on Rails, Javascript, ReactJs, React Native, MySQL,
				SQL Server, AWS, Git, SCRUM, Linux server administration, Jira,
			</>),
	},
	{
		name: "Team Leader",
		companyImg: require("../assets/img/works/hms.png"),
		company: "HMS Sistemas de Información / ONCARE",
		startAt: new Date("10/01/2016"),
		endAt: new Date("08/01/2018"),
		description: (
			<>
				Team Leader of a team of 5 software developers, my main activities were: Take meetings with the client for
				software planning and requirements (ERP for Oncology purpose). Research, development, and implementation
				of new technologies by company or client requirements (artificial intelligence, internet of things,
				business intelligence, neural networks, machine learning, big data, DevOps) Project management,
				Needs generation for clients, Priorities and Time management. Supervise and support in software
				development, activities analysis and scheduling, quality assurance. AWS, Linux server administration,
				and Shell scripting for libraries, backups, and structure of ERP (Bash) Process design, software
				development and implementation of new work units on the ERP like Clinical Analysis Laboratory,
				RIS & PACS and Ambulatory surgery.
			</>
		),
		technicalEnv:
			(<>
				Technical Environment: Php, Javascript, ReactJs, Android w/ Kotlin, IOS w/ Swift, MySQL, AWS, Git,
				Linux server administration, Bash,
			</>)
	},
	{
		name: "Software Developer",
		companyImg: require("../assets/img/works/hms.png"),
		company: "HMS Sistemas de Información / ONCARE",
		startAt: new Date("01/01/2015"),
		endAt: new Date("10/01/2016"),
		description: (
			<>
				Process and Database design, Priorities and Time management. Activities analysis and scheduling,
				quality assurance. AWS, Linux server administration, and Shell scripting for libraries, backups,
				and structure of ERP (Bash) Software development of new features to ERP for Oncology purpose which
				consists in the complete Oncology process of a patient and the contact with the treatment center,
				the process goes from appointment scheduling, management of event schedule, charges of medicines
				and supplies by event, billing and stamping with PACS.
			</>
		),
		technicalEnv:
			(<>
				Technical Environment: Php, Javascript, MySQL, AWS, Linux server administration, Bash,
			</>)
	},
	{
		name: "Software Developer",
		companyImg: require("../assets/img/works/ingeniat.png"),
		company: "Ingeniat",
		startAt: new Date("06/01/2014"),
		endAt: new Date("01/01/2015"),
		description: (
			<>
				Development of new features, fix of bugs and maintenance of the Ingeniat platform
				and Android app (Java). Shell scripting for automated processes on Linux servers (Bash),
				one of them consisted of reading a PDF (Book) separate it by pages, then covert the pages to SVG,
				map page by page and upload to s3 after pass the SVG through a Regex who clean the SVG from certain
				characters, creating a MySQL record in relation to the book and his pages.
			</>
		),
		technicalEnv:
			(<>
				Technical Environment: Php, Javascript, Android w/ Java, MySQL, Linux server administration, Bash,
			</>)
	}
];

export const socialIcons = [
	{
		id: 1,
		name: "Linkedin",
		icon: "fab fa-github",
		url: "https://github.com/jorgemgr94",
		img: require("../assets/img/social/linkedin.png")
	},
	{
		id: 2,
		name: "Github",
		icon: "fab fa-linkedin-in",
		url: "https://www.linkedin.com/in/jorgemgr94/",
		img: require("../assets/img/social/github.png")
	},
	{
		id: 3,
		name: "Gitlab",
		icon: "fab fa-gitlab",
		url: "https://gitlab.com/jorgemgr94",
		img: require("../assets/img/social/gitlab.png")
	}
];

export const monthsNames = [
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

export function formatExperience(d1, d2) {
	const MONTHS_IN_YEAR = 12;
	const MONTHS_TO_YEAR = 3.8052e-10;

	if (!d2) d2 = new Date();
	let e = Math.floor((d2 - d1) * MONTHS_TO_YEAR);
	if (e >= MONTHS_IN_YEAR) {
		let months = e - Math.floor(e / MONTHS_IN_YEAR) * MONTHS_IN_YEAR;
		return `${Math.floor(e / MONTHS_IN_YEAR)} year(s) ${months} month(s)`;
	} else {
		return `${e} month(s)`;
	}
}

export const menu = [
	{
		id: 1,
		name: "About Me",
		targetTag: "about"
	},
	{
		id: 2,
		name: "Skills",
		targetTag: "skills"
	},
	{
		id: 3,
		name: "Work Exp",
		targetTag: "experience"
	},
	{
		id: 4,
		name: "Social",
		targetTag: "social"
	},
	{
		id: 5,
		name: "Lifestyle",
		targetTag: "lifestyle"
	}
];

export const aptitude = (<>
	I've worked with startups, as well as small, mid and large companies,
	facing several scopes in Products, like: Multiple timezones, Multiple
	Languages, Escalability, Highly sense of responsibility, Fast
	learning.
	<br /><br />
	I love and believe in teamwork, smart work, best practices, home
	office, leadership, priority, order, people first, quickly adapt to
	change, new tech's, DevOps, startups.
</>);