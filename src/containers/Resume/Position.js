import React from "react";
import { monthsNames, formatExperience } from "../../util/database";

const Position = props => {
	const {
		companyImg,
		company,
		name,
		startAt,
		endAt,
		description,
		technicalEnv
	} = props.data;

	return (
		<section style={{ marginLeft: "1em" }}>
			<img
				alt="x8"
				src={companyImg}
				style={{ verticalAlign: "middle", height: "30px", marginRight: "5px" }}
			/>
			<div style={{ display: "inline-block", verticalAlign: "middle" }}>
				<span className="primary-text">{company}</span>
				<br />
				<span className="primary-text">{name}</span>
			</div>
			<div
				style={{
					display: "inline-block",
					float: "right",
					verticalAlign: "middle"
				}}
			>
				<div className="primary-text">
					{`${monthsNames[startAt.getMonth()]} ${startAt.getFullYear()}`} –{" "}
					{endAt
						? `${monthsNames[endAt.getMonth()]} ${endAt.getFullYear()}`
						: "Current"}
				</div>
				<div className="primary-text" style={{ textAlign: "right" }}>
					{formatExperience(startAt, endAt)}
				</div>
			</div>
			<p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
			<p>
				{technicalEnv}
			</p>
		</section>
	);
};

export default Position;
