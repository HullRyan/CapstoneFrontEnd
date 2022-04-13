/* eslint-disable @next/next/no-img-element */
/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 * @author Seth Adams <sadams65@uncc.edu>
 */

import Image from "next/image";

export default function Backend() {
	return (
		<div>
			<div className="backend-container">
				<iframe
					src="https://drive.google.com/file/d/1036be-M_JZcKqpo__k-AeRSHPlGvPP7N/preview"
					width="100%"
					height="100%"
					allow="autoplay"
				></iframe>
			</div>

			<div className="text">
				<p>
					*Written by <u>Miguel Morel</u> & <u>Willis Reid</u>
				</p>
			</div>

			<style jsx>
				{`
					.backend-container {
						height: 80%;
						max-height: 1024px;
						width: 80%;
						max-width: 791px;
						overflow: none;
						display: block;
						margin-left: auto;
						margin-right: auto;
						border: 8px solid black;
						border-radius: 5px;
						aspect-ratio: 791 / 1024;
					}
					.backend-container img {
						width: 100%;
						object-fit: contain;
					}
					.text {
						display: flex;
						justify-content: center;
						align-items: center;
						justify-content: center;
					}
				`}
			</style>
		</div>
	);
}
