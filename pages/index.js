/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 * @author Seth Adams <sadams65@uncc.edu>
 */

import Head from "next/head";
import Scroll from "../components/ScrollText";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
	return (
		<div className="chart">
			<LoadingScreen />
			<div className="container">
			<div className="big title accent">Behind the scenes:</div>
				<div>(Backend work + front end work display here)</div>
				<div className="big title accent">Meet the team:</div>
				<img src="./TeamPhotos/Murtadha_Marzouq.png" alt="Abu" width="150" height="150"></img>
				<div><strong>Murtadha Marzouq (Abu)</strong> is an IT specialist with over 8 years of experience in IT infrastructure and networking.  
				Murtadha graduated from Central Piedmont College and is currently a student at The University of North Carolina in Charlotte. 
				Murtadha provides IT support for our clients in Charlotte, NC. He is experienced in setting up IT infrastructure from Cisco networking to  Active Directory.  
				He also has experience in Linux and setting up Linux-based services such as Secure FTP, MySQL and Apache web server. 
				Murtadha was born in Damascus, Syria and has been in the United States for 10 years.</div>
				<br></br>
				<br></br>
				<div><strong>Seth Adams</strong> has been studying IT for over 6 years from late high school to the present. Seth is working towards his degree in Computer Science with a concentration in Software, Systems & Networks. 
				He started his studies at Rowan-Cabarrus Community College and transferred to UNCC last year. 
				His experience in computer science includes not only his work at the university, but also a summer internship at TIAA over last summer. 
				Seth was born and raised in San Antonio, Texas and has been living in Charlotte, North Carolina for 8 years.</div>
				
			</div>
			<style jsx>
				{`
				.team {
					background-color: black;
				}
				`}
				</style>
		</div>
	);
}
