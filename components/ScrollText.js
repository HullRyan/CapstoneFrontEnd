/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

export default function ScrollText() {
	return (
		<div>
			<div className="scrollContainer">
				<div className="scroll">UNCC has </div>
				<div className="scroll">
					<span>
						Grit
						<br />
						Opportunity
						<br />
						Leadership
						<br />
						Determination
					</span>
				</div>
				<style jsx>{`
					.scroll {
						height: 1.2em;
						line-height: 1.4m;
						position: relative;
						display: inline-block;
						overflow: hidden;
						width: 100%;
						font-size: 1.5rem;
						font-weight: bold;
					}
					.scroll > span {
						position: absolute;
						top: 0;
						animation: slide 10s infinite;
						font-weight: bold;
					}
					@keyframes slide {
						0% {
							top: -0.1em;
						}
						25% {
							top: -1.55em;
						}
						50% {
							top: -2.9em;
						}
						75% {
							top: -4.4em;
						}
					}
					.scrollContainer {
					}
				`}</style>
			</div>
		</div>
	);
}
