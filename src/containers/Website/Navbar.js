import React from "react";
import { Link } from "react-scroll";
import profilePhoto from "../../assets/img/me.jpg";

const menu = [
	{
		name: "About Me",
		targetTag: "about"
	},
	{
		name: "Professional Exp.",
		targetTag: "experience"
	},
	{
		name: "Social",
		targetTag: "social"
	},
	{
		name: "Lifestyle",
		targetTag: "lifestyle"
	}
];

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
			id="sideNav"
		>
			<Link
				className="nav-link pointer navbar-brand"
				to="about"
				spy={true}
				smooth={true}
				offset={0}
				duration={700}
			>
				<span className="d-content d-lg-none">
					<img
						className="img-fluid img-profile rounded-circle"
						style={{ width: "3rem" }}
						src={profilePhoto}
						alt="profilePhoto"
					/>
				</span>
				<span className="d-none d-lg-block">
					<img
						className="img-fluid img-profile rounded-circle mx-auto mb-2"
						src={profilePhoto}
						alt="profilePhoto"
					/>
				</span>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav">
					{menu.map((option) => (
						<li className="nav-item" key={option.targetTag}>
							<Link
								className="nav-link pointer"
								to={option.targetTag}
								spy={true}
								smooth={true}
								offset={0}
								duration={700}
							>
								{option.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
