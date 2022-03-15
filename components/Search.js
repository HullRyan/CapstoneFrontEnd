import { useState } from "react";
import * as styles from "../styles/Search.module.css";

export default function Search() {

	//Gets staff data from localStorage
	useEffect(() => {
		const staff = JSON.parse(localStorage.getItem("staff"));
	},[])

    //React state for search term
    const [searchTerm, setSearchTerm] = useState("");

	return (
		<>
			<div className={styles.resultsContainer}>
				<div className={styles.results}>
					<div className={styles.searchTerm}>
						<div className={styles.searchBar}>
							<input
								type="search"
								placeholder="Search..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>
					</div>
					<div className={styles.searchItems}>
						{staff
							.filter((person) =>
								JSON.stringify(person)
									.toLowerCase()
									.includes(searchTerm.toLowerCase())
							)
							.map((e) => {
								return (
									<div key={e.id} className={styles.item}>
										<a href={e.link}>
											<div className={styles.name}>{e.name}</div>
										</a>
										<div className={styles.college}>{e.college}</div>
										<div className={styles.department}>{e.department}</div>
										<div className={styles.publications}>
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
