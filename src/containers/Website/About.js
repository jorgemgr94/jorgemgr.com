import React from "react";
import { socialIcons, aptitude } from "../../util/database";

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
					{aptitude}
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
					<a
						href="/resume"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="far fa-file-pdf"></i>
					</a>
				</div>
			</div>
		</section >
	);
}

export default About;
