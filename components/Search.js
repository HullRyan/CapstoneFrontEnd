/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

import { useState, useEffect } from "react";

export default function Search() {
	//Gets staff data from localStorage
	const staff = JSON.parse(localStorage.getItem("staff"));

	//React state for search term
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="container">
			<div className="search-container">
				<div className="input-container">
					<input
						className="input"
						type="search"
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className="labels small-screen">
					<div>Faculty</div>
					<div>Interests</div>
				</div>
				<div className="results-container labels big-screen">
					<div className="resultContainer">
					<div className="personContainer">
						<div >Name</div>
						<div>College</div>
						<div>Department</div>
					</div>
					<div className="interests">Interests</div>
					</div>
				</div>
				<div className="results-container">
					{staff
						.filter((person) =>
							JSON.stringify(person)
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
						)
						.map((e, i) => {
							return (
								<div key={i} className="resultContainer">
									<div className="personContainer">
										<a href={e.link}>
											<div className="name">{e.name}</div>
										</a>
										<div>{e.college}</div>
										<div>{e.department}</div>
									</div>
									<div className="interests">{e.academic_interests.length}</div>
								</div>
							);
						})}
				</div>
			</div>
			<style jsx>
				{`
					.labels {
						border-bottom: 2px solid var(--color-accent);
						display: flex;
						justify-content: space-between;
						font-weight: bold;
					}
					.labels > * {
						font-size: 1.2rem;
					}
					.search-container {
						max-width: 1200px;
						margin-left: auto;
						margin-right: auto;
						background: #fbfbfe;
						color: var(--color-green);
						outline: 4px solid;
						outline-color: var(--color-accent);
						border-radius: .2rem;

					}
					.results-container {
						overflow: auto;
						max-height: 300px;
						padding-left: 1rem;
					}
					.results-container > *:last-child {
						padding-bottom: 1rem;
					}
					.results-container > *:first-child {
						padding-top: 1rem;
					}
					.input {
						width: 90%;
						max-width: 250px;
						padding: 0.3rem;
						margin-top: 0.5rem;
						margin-bottom: 0.5rem;
					}
					.input-container {
						display: flex;
						width: 100%;
						align-items: center;
						justify-content: center;
						border-bottom: 2px solid var(--color-accent);
					}
					.resultContainer {
						display: flex;
						width: 100%;
						padding-top: 0.5rem;
						padding-bottom: 0.5rem;
					}
					.personContainer {
						width: 85%;
						display: flex;
						flex-direction: column;
					}
					.interests {
						width: 15%;
						font-size: 1.2rem;
						display: flex;
						justify-content: center;
						align-items: center;
					}
					.name {
						font-size: 1.2rem;
						font-weight: bold;
					}
					.small-screen {
						padding: 1rem;
					}
					.big-screen {
						display: none;
					}
					@media screen and (min-width: 825px) {
						.personContainer {
							flex-direction: row;
							gap: 1rem;
							justify-content: space-between;
						}
						.personContainer > * {
							align-items: center;
							width: 33.33%;
							display: flex;
						}
						.small-screen {
							display: none;
						}
						.big-screen {
							display: flex;
						}
					}
				`}
			</style>
		</div>
	);
}
