/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

import Link from "next/link";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className="header-big">
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
				<Link href="/backend">
					<a className="header-item">Back-End</a>
				</Link>
				<span className="header-item right">
					<ToggleTheme />
				</span>
			</div>
			<div className="header-small">
				<div className="sidemenu-button">
					<IoMdMenu size={32} onClick={() => setIsOpen(!isOpen)} />
				</div>
				<span className="title">PROJECT GEMINI</span>
				<span className="header-item right">
					<ToggleTheme />
				</span>
			</div>
			<div className={`sidemenu ${isOpen ? "open" : "offscreen"}`}>
				<div className="drawer-links">
					<Link href="/">
						<a onClick={() => setIsOpen(false)} className="header-item">Home</a>
					</Link>
					<Link href="/data">
						<a onClick={() => setIsOpen(false)} className="header-item">Data</a>
					</Link>
					<Link href="/charts">
						<a onClick={() => setIsOpen(false)} className="header-item">Charts</a>
					</Link>
					<Link href="/backend">
						<a onClick={() => setIsOpen(false)} className="header-item">Back-End</a>
					</Link>
				</div>
			</div>
			<div
				className={`sidemenu-background  ${
					isOpen ? "background-open" : "background-offscreen"
				}`} onClick={() => setIsOpen(false)}>
			</div>
			<style jsx>
				{`
					.sidemenu {
						position: fixed;
						display: flex;
						flex-direction: column;
						height: 100%;
						top: 0;
						left: 0;
						width: 13rem;
						z-index: 1501;
						background-color: var(--color-secondary);
						transition: all 0.25s ease-out;
						opacity: 1;
					}
					.sidemenu-background {
						position: fixed;
						top: 0;
						left: 0;
						height: 100%;
						width: 100%;
						overflow: hidden;
						background-color: rgba(0, 0, 0, 0.6);
						z-index: 1500;
						display: flex;
						flex-direction: column;
						justify-content: center;
						transition: all 0.2s ease-out;
					}
					.background-offscreen {
						position: absolute;
						pointer-events: none;
						background-color: rgba(0, 0, 0, 0);
						width: 100%;
						height: 100%;
					}
					.offscreen {
						left: -100%;
          				opacity: 0;
					} 
					.header-big {
						display: flex;
						justify-content: space-between;
						gap: 1rem;
						align-items: center;
						padding: 1rem;
						outline: 4px solid;
						outline-color: var(--color-third);
					}
					.header-small {
						display: none;
						justify-content: space-between;
						gap: 1rem;

						padding: 1rem;
						outline: 4px solid;
						outline-color: var(--color-third);
					}
					.sidemenu-button {
						cursor: pointer;
					}
					.sidemenu-button:hover {
						color: var(--color-accent);
					}
					.drawer-links {
						display: flex;
						flex-direction: column;
						padding-left: 1rem;
						padding-top: 2rem;
						gap: 0.2rem;
					}
					@media screen and (max-width: 550px) {
						.header-big {
							display: none;
						}
						.header-small {
							display: flex;
						}
					}
				`}
			</style>
		</div>
	);
}
