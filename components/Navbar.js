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
				<Link href="/about">
					<a className="header-item">About</a>
				</Link>
				<Link href="/charts">
					<a className="header-item">Charts</a>
				</Link>
				<span className="header-item right">
					<ToggleTheme />
				</span>
			</div>
			<div className="drop-buttons">
				<div className="drop-button">Visualize this</div>
				<div className="drop-button">Visualize this</div>
			</div>
		</div>
	);
}
