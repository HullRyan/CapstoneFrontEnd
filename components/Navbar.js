import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

export default function Navbar() {
	return (
		<div>
			<div class="header">
				<span class="title">PROJECT GEMINI</span>
				<Link href="/">
					<a class="header-item">Home</a>
				</Link>
				<Link href="/about">
					<a class="header-item">About</a>
				</Link>
				<Link href="/charts">
					<a class="header-item">Charts</a>
				</Link>
				<span class="header-item right">
					<ToggleTheme />
				</span>
			</div>
			<div class="drop-buttons">
				<div class="drop-button">Visualize this</div>
				<div class="drop-button">Visualize this</div>
			</div>
		</div>
	);
}
