/* eslint-disable @next/next/no-img-element */
/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */
import css from "styled-jsx/css";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Search() {
	//Gets staff data from localStorage
	const staff = JSON.parse(localStorage.getItem("staff"));

	//React state for filtered staff
	const [searchTerm, setSearchTerm] = useState("");
	//React state for modal showing
	const [showModal, setShowModal] = useState(false);
	//React state for modal data
	const [activeObject, setActiveObject] = useState(null);

	function getClass() {
		return showModal === true
			? "results-container active"
			: "results-container inactive";
	}
	function getModalContainerClass() {
		return showModal === true ? "modal-active" : "modal-inactive";
	}

	//Modal
	const Modal = ({ object: { e } }) => (
		<div>
			<div className="modal-container small-screen">
				<div className="modal-left">
					<div className="modal-top-big">
						<div>
							<div className="big-name">{e.name}</div>
							<div className="modal-links">
								{e.scholar_id && (
									<div className="logo">
										<a
											href={
												"https://scholar.google.com/citations?user=" +
												e.scholar_id
											}
										>
											<Image
												src="/logos/Scholar_logo.png"
												width="22px"
												height="22px"
												alt="Google Scholar Logo"
											/>
										</a>
									</div>
								)}
								<div className="logo">
									<a href={e.link}>
										<Image
											src="/logos/C_logo.png"
											width="22px"
											height="22px"
											alt="Google Scholar Logo"
										/>
									</a>
								</div>
							</div>
						</div>
						{e.cited_by > 1 ? (
							<div className="modal-cited">
								<div className="modal-interest">Cited by: </div>
								<div>{e.cited_by}</div>
							</div>
						) : (
							<div className="modal-interest">No citations found</div>
						)}
						{e.academic_interests.length > 1 ? (
							<div className="modal-interests">
								<div className="modal-interest">Academic Interests</div>
								{e.academic_interests.map((interest, i) => (
									<div key={i}>{interest}</div>
								))}
							</div>
						) : (
							<div>No interests found</div>
						)}
					</div>
					<div>
						<div className="button-holder">
							<button
								onClick={() => setShowModal(false)}
								className="close"
							></button>
						</div>
						<div className="modal-image">
							{e.url_picture && (
								<img
									src={e.url_picture}
									alt={e.name + "'s Google Scholar Profile Picture"}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="modal-container-big big-screen">
				<div className="modal-left">
					<div className="modal-top-big">
						<div>
							<div className="big-name">{e.name}</div>
							<div className="modal-links">
								{e.scholar_id && (
									<div className="logo">
										<a
											href={
												"https://scholar.google.com/citations?user=" +
												e.scholar_id
											}
										>
											<Image
												src="/logos/Scholar_logo.png"
												width="22px"
												height="22px"
												alt="Google Scholar Logo"
											/>
										</a>
									</div>
								)}
								<div className="logo">
									<a href={e.link}>
										<Image
											src="/logos/C_logo.png"
											width="22px"
											height="22px"
											alt="Google Scholar Logo"
										/>
									</a>
								</div>
							</div>
						</div>
						{e.cited_by > 1 ? (
							<div className="modal-cited">
								<div className="modal-interest">Cited by: </div>
								<div>{e.cited_by}</div>
							</div>
						) : (
							<div className="modal-interest">No citations found</div>
						)}
						{e.academic_interests.length > 1 ? (
							<div className="modal-interests">
								<div className="modal-interest">Academic Interests</div>
								{e.academic_interests.map((interest, i) => (
									<div key={i}>{interest}</div>
								))}
							</div>
						) : (
							<div>No interests found</div>
						)}
					</div>
					<div>
						<div className="button-holder">
							<button
								onClick={() => setShowModal(false)}
								className="close"
							></button>
						</div>
						<div className="modal-image-big">
							{e.url_picture && (
								<img
									src={e.url_picture}
									alt={e.name + "'s Google Scholar Profile Picture"}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);

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
							<div>Name</div>
							<div>College</div>
							<div>Department</div>
						</div>
						<div className="interests">Interests</div>
					</div>
				</div>
				<div className={getClass()}>
					{staff
						.filter((person) =>
							JSON.stringify(person)
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
						)
						.map((e, i) => {
							return (
								<div
									key={i}
									className="resultContainer"
									onClick={() => {
										setActiveObject({ e });
										setShowModal(true);
									}}
								>
									<div className="personContainer">
										<div className="name">
											{e.name}{" "}
											{e.scholar_account == "true" && (
												<div className="logo">
													<a
														href={
															"https://scholar.google.com/citations?user=" +
															e.scholar_id
														}
													>
														<Image
															src="/logos/Scholar_logo.png"
															width="20px"
															height="20px"
															alt="Google Scholar Logo"
														/>
													</a>
												</div>
											)}
										</div>
										<div>{e.college}</div>
										<div>{e.department}</div>
									</div>
									<div className="interests">{e.academic_interests.length}</div>
								</div>
							);
						})}
				</div>
				<div className={"modal-box " + getModalContainerClass()}>
					{showModal && <Modal object={activeObject} />}
				</div>
			</div>
			<style jsx global>
				{`
					.big-name {
						font-size: 1.4rem;
						font-weight: 600;
						padding-bottom: 1rem;
					}
					.button-holder {
						display: flex;
						justify-content: end;
						margin-top: -.5rem;
						margin-right: -.5rem;
						margin-bottom: .5rem;
					}
					.modal-left {
						display: flex;
						gap: .3rem;
						justify-content: space-between;
					}
					.modal-bottom {
						display: flex;
						flex-direction: column;
						gap: 0.8rem;
					}
					.modal-cited {
						display: flex;
						gap: 0.5rem;
						align-items: center;
						font-size: 1.1rem;
					}
					.modal-interest {
						font-weight: 600;
					}
					.modal-links {
						display: flex;
						gap: 1rem;
					}
					.modal-top {
						display: flex;
						gap: 2rem;
						justify-content: space-between;
						max-height: 8rem;
					}
					.modal-top-big {
						display: flex;
						flex-direction: column;
						gap: 1rem;
					}
					.modal-image-big {
						display: flex;
						align-items: center;
					}
					.modal-image-big img {
						height: 14rem;
						border-radius: 10px;
						border: 1px solid #ccc;
					}
					.modal-image img {
						height: 7rem;
						max-width: 7rem;
						border-radius: 10px;
						border: 1px solid #ccc;
						object-fit: cover;
					}
					.logo {
						display: flex;
					}
					.modal-box {
						overflow: auto;
						transition: 0.5s;
						border-top: 2px solid var(--color-accent);
					}
					.modal-active {
						max-height: 40rem;
					}
					.modal-inactive {
						max-height: 0rem;
					}
					.modal-container {
						display: flex;
						flex-direction: column;
						padding: 0.5rem;
						max-height: 16rem;
					}
					.modal-container-big {
						display: flex;
						flex-direction: column;
						padding-left: 2rem;
						padding-right: 2rem;
						padding-top: 1rem;
						padding-bottom: 1rem;
						max-height: 16rem;
					}
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
						border-radius: 0.2rem;
					}
					.results-container {
						transition: 0.5s;
						overflow: auto;
						padding-left: 1rem;
					}
					.active {
						max-height: 200px;
					}
					.inactive {
						max-height: 300px;
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
						display: flex;
						align-items: center;
						gap: 0.8rem;
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
						.modal-image {
							
						}
					}
					.close {
						overflow: hidden;
						position: relative;
						border: none;
						padding: 0;
						width: 2em;
						height: 2em;
						border-radius: 50%;
						background: transparent;
						color: #1da1f2;
						font: inherit;
						text-indent: 100%;
						cursor: pointer;
					}
					.close:focus {
						outline: solid 0 transparent;
						box-shadow: 0 0 0 2px #8ed0f9;
					}
					.close:hover {
						background: rgba(29, 161, 142, 0.1);
					}
					.close:before,
					.close:after {
						position: absolute;
						top: 15%;
						left: calc(50% - 0.0625em);
						width: 0.125em;
						height: 70%;
						border-radius: 0.125em;
						transform: rotate(45deg);
						background: currentcolor;
						content: "";
					}
					.close:after {
						transform: rotate(-45deg);
					}
					}
				`}
			</style>
		</div>
	);
}
