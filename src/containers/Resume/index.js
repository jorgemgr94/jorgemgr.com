import React from "react";
import Header from "./Header";
import ProfessionalExperience from "./ProfessionalExperience";
import TechnicalExperience from "./TechnicalExperience";

function Resume() {
	return (
		<div className="resume">
			<section className="paper">
				<section className="container-fluid">
					<Header />
					<main>
						<TechnicalExperience />
						<ProfessionalExperience />
					</main>

					<img
						alt="print"
						className="print-icon"
						onClick={window.print}
						src={require("../../assets/img/print.png")}
					/>
				</section>
			</section>
		</div>
	);
}

export default Resume;
