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
				<div>(Team display here)</div>
			</div>
		</div>
	);
}
