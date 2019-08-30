import React from "react";

function Skills() {
	return (
		<section
			className="resume-section p-3 p-lg-5 d-flex justify-content-center"
			id="skills"
		>
			<div className="w-100">
				<h2 className="mb-5">Skills</h2>
				<h3 className="mb-2">Current dev stack</h3>
				<ul className="mb-4">
					<li>React, Javascript, Typescript</li>
					<li>NodeJs, Ruby on Rails</li>
					<li>PostgreSQL, MongoDb, Redis</li>
					<li>React Native</li>
					<li>Gitlab, AWS, Heroku, Docker, Eslint</li>
				</ul>
				<h3 className="mb-2">
					Things I am learning or I'm looking to learn soon
				</h3>
				<p className="mb-4">
					Go, Jest, Terraform, TypeORM, Gitlab CI / CD, Kubernetes, GraphQl,
					Devops, Django, Electron..
				</p>
				<h3 className="mb-2">Technologies I have used</h3>
				<p className="mb-4">
					Python, Laravel, VueJS, Php, Html5, CSS3, Android w/ Java, Android w/
					Kotlin, IOS w/ Swift, MySql, MariaDB, SQL Server, Google Cloud, Bash.
				</p>
			</div>
		</section>
	);
}

export default Skills;
