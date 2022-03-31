/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 * @author Seth Adams <sadams65@uncc.edu>
 */

import Head from "next/head";
import Scroll from "../components/ScrollText";
import LoadingScreen from "../components/LoadingScreen";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<div className="chart">
				<LoadingScreen />
			</div>
			<div className="container">
				<div className="big title accent">
					<u>Behind the scenes</u>
				</div>
				<div>
					Ryan & Seth worked on the front end of the assignment making sure
					everything looked clean and precise. The charts that Ryan implemented
					really gave the data pages what they needed, and really captures
					everyones eyes. Murtadha was repsonsible for making sure the data was
					scraped and given to Ryan and I. We used a vanilla JavaScript so we
					had no front end libraries. We used a json file that is located in
					github for the information to be retrieved.
					<br></br>
					Willis and Miguel worked on the backend of the project and created a
					document explaining everything we did, our user stories, and created
					some nice diagrams for the class to look off of. With their
					explanation of every little detail, they really allowed even the more
					novice of coders to understand what we were trying to implement.
				</div>
				<div className="big title accent">
					<u>Meet the team</u>
				</div>
				<Image
					src="/TeamPhotos/Murtadha_Marzouq.png"
					alt="Abu"
					width="150"
					height="150"
				></Image>
				<div>
					<strong>Murtadha Marzouq (Abu)</strong> is an IT specialist with over
					8 years of experience in IT infrastructure and networking. Murtadha
					graduated from Central Piedmont College and is currently a student at
					The University of North Carolina in Charlotte. Murtadha provides IT
					support for our clients in Charlotte, NC. He is experienced in setting
					up IT infrastructure from Cisco networking to Active Directory. He
					also has experience in Linux and setting up Linux-based services such
					as Secure FTP, MySQL and Apache web server. Murtadha was born in
					Damascus, Syria and has been in the United States for 10 years.
				</div>
				<br></br>
				<br></br>
				<Image
					src="/TeamPhotos/seth_adams.jpg"
					alt="Seth"
					width="150"
					height="150"
				></Image>
				<div>
					<strong>Seth Adams</strong> has been studying IT for over 6 years from
					late high school to the present. Seth is working towards his degree in
					Computer Science with a concentration in Software, Systems & Networks.
					He started his studies at Rowan-Cabarrus Community College and
					transferred to UNCC last year. His experience in computer science
					includes not only his work at the university, but also a summer
					internship at TIAA over last summer. Seth was born and raised in San
					Antonio, Texas and has been living in Charlotte, North Carolina for 8
					years.
				</div>

				<br></br>
				<br></br>
				<Image
					src="/TeamPhotos/miguel.png"
					alt="miguel"
					width="150"
					height="150"
				></Image>
				<div>
					<strong>Miguel Morel</strong> is a Software Enthusiast with over 4
					years of experience in the Software Development scene. Miguel
					transferred from Central Piedmont Community College to the University
					of North Carolina at Charlotte (UNCC) for the last two years of his
					degree. He majors in Computer Science with a concentration in Software
					Engineering and is graduating in July 2021. He is a skilled Software
					Developer with considerable skill in languages such as Java, C++,
					Python, JavaScript and SQL, to name a few. In his spare time, Miguel
					enjoys playing soccer and learning about emerging technologies and
					gadgets.
				</div>
				<br></br>
				<div>
					<strong>Miguel&apos;s Links:</strong>
					<br></br>
					https://www.linkedin.com/in/miguelmorel94/<br></br>
					https://github.com/mmorel1
				</div>

				<br></br>
				<br></br>

				<Image
					src="/TeamPhotos/Ryan_hull.jpeg"
					alt="ryan"
					width="150"
					height="150"
				></Image>
				<div>
					<strong>Ryan Hull</strong> is a Senior graduating in May here at UNC
					Charlotte, with a BS in Computer Science, concentrating in Software,
					Systems & Networks. While born in Rochester, NY, Ryan has lived in
					Charlotte for most of his life and calls it home. H aving experience
					in many technologies, from C++, Java to Web Development (JavaScript,
					Angular, React, etc.), Ryan never passes up the opportunity to learn
					something new and expand his experience.
				</div>

				<br></br>
				<br></br>
				<Image
					src="/TeamPhotos/willis.jpg"
					alt="willis"
					width="150"
					height="150"
				></Image>
				<div>
					<strong>Willis Reid</strong>, I am currently a student at the
					University of North Carolina at Charlotte. Some of the things I&apos;ve
					done are graduated from Catawba Valley Community College with an
					associate degree. I have six years of experience working in customer
					service. Over the years, I have improved my problem-solving and
					critical thinking skills. I have also been studying IT for about five
					years now. I have experience with Python, HTML, and CSS.
				</div>

				<br></br>
				<br></br>
				<br></br>
				<br></br>

				<style jsx>
					{`
						.team {
							background-color: black;
						}
					`}
				</style>
			</div>
		</div>
	);
}
