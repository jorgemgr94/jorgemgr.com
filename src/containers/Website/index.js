import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Social from "./Social";
import Lifestyle from "./Lifestyle";

function Website () {
	return (
		<div className='webpage'>
			<Navbar />
			<div className='container-fluid p-0'>
				<About />
				<hr className='m-0' />
				<Skills />
				<hr className='m-0' />
				<Experience />
				<hr className='m-0' />
				<Social />
				<hr className='m-0' />
				<Lifestyle />
				<hr className='m-0' />
			</div>
		</div>
	);
}

export default Website;
