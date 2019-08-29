import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";

function App() {
	return (
		<>
			<Navbar />
			<div className="container-fluid p-0">
				<About />
				<hr className="m-0" />
				<Experience />
				<hr className="m-0" />
			</div>
		</>
	);
}

export default App;
