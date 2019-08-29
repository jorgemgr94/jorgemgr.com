import React from "react";
import { Link } from "react-scroll";
import profilePhoto from "../../assets/img/me.jpg";

const optinonsMenu = [
	{
		id: 1,
		name: "About Me",
		targetTag: "about"
	}
];

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
			id="sideNav"
		>
			<a className="navbar-brand js-scroll-trigger" href="#page-top">
				<span className="d-block d-lg-none">JORGE GARCIA</span>
				<span className="d-none d-lg-block">
					<img
						className="img-fluid img-profile rounded-circle mx-auto mb-2"
						src={profilePhoto}
						alt="profilePhoto"
					/>
				</span>
			</a>
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
					{optinonsMenu.map(option => (
						<li className="nav-item" key={option.id}>
							<Link
								className="nav-link pointer"
								to={option.targetTag}
								spy={true}
								smooth={true}
								offset={50}
								duration={500}
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
