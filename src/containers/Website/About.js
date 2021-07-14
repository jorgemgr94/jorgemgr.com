import React from "react";
import { NavLink } from "react-router-dom";
import { socialNetworks, aptitude, technologies } from "../../database";

function About() {
	return (
		<section
			className="resume-section d-flex flex-column justify-content-center"
			id="about"
		>
			<div class="container-fluid d-flex flex-column flex-lg-row">
				<div className="mr-4">
					<h2 className="mb-2">
						I'm Jorge García
						<span role="img" aria-label="👨‍💻">
							👨‍💻
						</span>
					</h2>
					<p className="mb-4">{aptitude}</p>
					<div className="social-icons mb-4">
						{socialNetworks.map((social) => (
							<a
								key={social.id}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className={social.icon}></i>
							</a>
						))}
						<NavLink to="/resume" target="_blank">
							<i className="far fa-file-pdf"></i>
						</NavLink>
					</div>
				</div>
				<div className="">
					<h3 className="mb-2">Current dev stack</h3>
					<p className="mb-4">
						{technologies
							.filter((t) => t.status === 0)
							.map((t) => `${t.name}, `)}
					</p>
					<h3 className="mb-2">I'm learning</h3>
					<p className="mb-4">
						{technologies
							.filter((t) => t.status === 1)
							.map((t) => `${t.name}, `)}
					</p>
					<h3 className="mb-2">I have used</h3>
					<p className="mb-4">
						{technologies
							.filter((t) => t.status === 2)
							.map((t) => `${t.name}, `)}
					</p>
				</div>
			</div>
			<div class="container-fluid">
				<div className="w-100"></div>
			</div>
		</section>
	);
}

export default About;
