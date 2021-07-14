import React from "react";

function Social() {
	return (
		<section
			className="resume-section p-3 p-lg-5 d-flex align-items-center"
			id="social"
		>
			<div className="w-100">
				<h2 className="mb-5">Social</h2>
				<p className="lead mb-2"></p>
				<p className="lead mb-2">
					<span role="img" aria-label="intro">
						I write thoughts and conclusions on{" "}
						<a
							href="https://twitter.com/jorgemgr94"
							target="_blank"
							rel="noopener noreferrer"
						>
							twitter
						</a>{" "}
						🧠.
					</span>
				</p>
				<p className="lead mb-2">
					<span role="img" aria-label="intro">
						I share best moments on{" "}
						<a
							href="https://www.instagram.com/jorgemgr94"
							target="_blank"
							rel="noopener noreferrer"
						>
							Instagram
						</a>{" "}
						🏖 🐶 ☕️ ❤️
					</span>
				</p>
				<p className="lead mb-2">
					<span role="img" aria-label="intro">
						I support others and share knowledge on{" "}
						<a
							href="https://stackoverflow.com/users/5377188/jorge-garcia"
							target="_blank"
							rel="noopener noreferrer"
						>
							stack overflow
						</a>
						,{" "}
						<a
							href="https://medium.com/@jorgegarcia_43471"
							target="_blank"
							rel="noopener noreferrer"
						>
							medium
						</a>{" "}
						and{" "}
						<a
							href="https://dev.to/jorgemgr94"
							target="_blank"
							rel="noopener noreferrer"
						>
							dev.to
						</a>{" "}
						📔
					</span>
				</p>
				<p className="lead mb-5">
					<span role="img" aria-label="intro">
						I challenge myself on{" "}
						<a
							href="https://app.codesignal.com/profile/jorgemgr94"
							target="_blank"
							rel="noopener noreferrer"
						>
							codesignal
						</a>{" "}
						👨‍💻
					</span>
				</p>
			</div>
		</section>
	);
}

export default Social;
