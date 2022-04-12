/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
	return (
		<div>
			<div className="header">
				<span className="title">PROJECT GEMINI</span>
				<Link href="/">
					<a className="header-item">Home</a>
				</Link>
				<Link href="/data">
					<a className="header-item">Data</a>
				</Link>
				<Link href="/charts">
					<a className="header-item">Charts</a>
				</Link>
				<span className="header-item right">
					<ToggleTheme />
				</span>
			</div>
		</div>
	);
}
