import { useState } from "react";
import * as styles from "../styles/Search.module.css";

export default function Search() {

	//Gets staff data from localStorage
    const staff = JSON.parse(localStorage.getItem("staff"));
	
    //React state for search term
    const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div class={styles.resultsContainer}>
				<div class={styles.results}>
					<div class={styles.searchTerm}>
						<div class={styles.searchBar}>
							<input
								type="search"
								placeholder="Search..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</div>
					<div class={styles.searchItems}>
						{staff
							.filter((person) =>
								JSON.stringify(person)
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							)
							.map((e) => {
								return (
									<div class={styles.item}>
										<a href={e.link}>
											<div class={styles.name}>{e.name}</div>
										</a>
										<div class={styles.college}>{e.college}</div>
										<div class={styles.department}>{e.department}</div>
										<div class={styles.publications}>
											Publications: {e.academic_interests.length}
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</>
	);
}
