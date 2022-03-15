/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Scroll from "../components/ScrollText";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
	return (
		<div className="chart">
			this is the home
			<Scroll />
			<LoadingScreen />
		</div>
	);
}
