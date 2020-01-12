import React from "react";
import { socialNetworks } from "../../util/database";

function Header() {
	return (
		<>
			<header>
				<section id="leftSection">
					<div className="container">
						<img
							alt="avatar"
							className="avatar"
							src={require("../../assets/img/me.jpg")}
						/>
						<br />
						<span className="primary-text">Jorge Marcial Garcia Rizo</span>
						<br />
						<span>Software Enginner</span>
						<br />
						<span>(UANL, CP: 11711750)</span>
						<br />
						<br />
						<section style={{ marginBottom: 8 }}>
							<a className="email" target="_blank" href="www.jorgemgr.com">
								www.jorgemgr.com
              				</a>
							<br />
							<a className="email" href="mailto:jorgemgr94@gmail.com">
								jorgemgr94@gmail.com
              				</a>
						</section>
						<div style={{ display: "flex", justifyContent: "space-around" }}>
							{socialNetworks.map(social => {
								return (
									<a
										rel="noopener noreferrer"
										href={social.url}
										target="_blank"
										key={social.id}
									>
										<div style={{ display: "inline-block" }}>
											<img
												alt={social.name}
												style={{ width: 20 }}
												src={social.img}
											/>
										</div>
									</a>
								);
							})}
						</div>
					</div>
				</section>
				<section id="rightSection">
					<div className="container">
						<span className="bold">APTITUDE</span>
						<p>
							+5 years of experience in software development; I've worked with
							startups, as well as small, mid and large companies, facing
							several scopes in Products, like: Multiple timezones, Multiple
							Languages, Work under pressure, Escalability, Highly sense of
							responsibility, Fast learning.
            			</p>
						<p>
							I love and believe in teamwork, smart work, best practices, home
							office, leadership, priority, order, people first, quickly adapt
							to change, new tech's, DevOps, startups.
            			</p>
						<p>
							My short term expectation is to meet and work/collaborate with
							extraordinary people and companies, passionate to change the world
							in which we live.
            			</p>
					</div>
				</section>
			</header>
		</>
	);
}

export default Header;
