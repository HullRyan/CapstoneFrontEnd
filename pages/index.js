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
				<div>Murtadha Marzouq (Abu) is an IT specialist with over 8 years of experience in IT infrastructure and networking.  
				Murtadha graduated from Central Piedmont College and is currently a student at The University of North Carolina in Charlotte. 
				Murtadha provides IT support for our clients in Charlotte, NC. He is experienced in setting up IT infrastructure from Cisco networking to  Active Directory.  
				He also has experience in Linux and setting up Linux-based services such as Secure FTP, MySQL and Apache web server. 
				Murtadha was born in Damascus, Syria and has been in the United States for 10 years.</div>
				<img src="Murtadha_Marzouq.png" alt="Abu" width="500" height="333"></img>
			</div>
		</div>
	);
}
