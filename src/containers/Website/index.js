import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Social from "./Social";
import Lifestyle from "./Lifestyle";

function Website() {
	return (
		<div className="webpage">
			<Navbar />
			<div className="container-fluid">
				<About />
				<Experience />
				<Social />
				<Lifestyle />
			</div>
		</div>
	);
}

export default Website;
