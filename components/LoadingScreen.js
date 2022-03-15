/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

import ReactECharts from "echarts-for-react";
import React, { useEffect, useContext, useState, useRef } from "react";
import * as styles from "../styles/LoadingScreen.module.css";
import ThemeContext from "./ThemeContext";

function LoadingScreen() {
	const echarts_react = useRef(null);
	const echarts_react_dark = useRef(null);

	const [option, setOption] = useState();
	const { theme } = useContext(ThemeContext);
	const symbolSize = 300;

	useEffect(() => {
		let optionIndex = 0;
		const interval = setInterval(() => {
			optionIndex = (optionIndex + 1) % options.length;
			if (echarts_react.current != null)
				echarts_react.current
					.getEchartsInstance()
					.setOption(options[optionIndex]);
			else
				echarts_react_dark.current
					.getEchartsInstance()
					.setOption(optionsDark[optionIndex]);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	const paths = [
		"path://M99.981 0.280 C 99.463 0.420,98.668 0.760,98.213 1.036 C 97.340 1.565,9.217 84.570,7.920 86.085 C 6.911 87.264,7.196 85.911,3.378 107.654 C -0.269 128.415,-0.191 127.860,0.409 128.844 C 1.404 130.477,-2.835 130.326,42.059 130.327 L 81.967 130.328 81.967 130.922 C 81.967 131.248,81.737 133.710,81.455 136.393 C 80.798 142.644,80.799 142.660,81.541 143.491 L 82.138 144.160 108.846 144.220 C 138.988 144.288,233.215 143.551,235.041 143.233 C 236.352 143.004,237.372 142.504,242.930 139.364 C 255.161 132.455,260.887 128.767,261.881 127.158 C 262.441 126.252,279.594 20.272,279.377 19.057 C 279.306 18.663,279.129 18.110,278.982 17.828 C 278.575 17.046,262.293 0.912,261.475 0.481 C 260.558 -0.003,101.758 -0.200,99.981 0.280 M160.861 6.226 C 160.861 6.269,157.149 9.881,152.613 14.252 C 144.499 22.070,143.757 22.851,143.279 24.078 C 143.076 24.596,136.127 67.346,135.750 70.389 C 135.455 72.766,140.892 85.252,142.872 86.747 C 144.129 87.696,143.325 87.668,191.099 88.446 L 237.013 89.194 238.597 88.605 C 240.457 87.913,240.238 88.479,240.769 82.992 C 241.561 74.814,241.993 65.392,242.015 55.840 L 242.026 50.717 242.457 51.534 C 246.537 59.276,249.265 71.769,249.246 82.627 L 249.237 87.487 249.914 87.710 C 250.286 87.833,251.537 87.916,252.694 87.895 C 254.042 87.870,254.824 87.934,254.871 88.075 C 254.928 88.246,253.695 92.668,252.325 97.210 C 252.222 97.553,252.064 97.582,250.908 97.475 C 250.048 97.394,249.275 97.452,248.625 97.645 L 247.643 97.937 246.959 100.659 C 244.807 109.226,241.019 117.984,235.901 126.230 C 234.500 128.487,230.509 134.266,230.416 134.173 C 230.387 134.143,230.866 132.321,231.481 130.123 C 234.799 118.275,237.055 108.427,238.831 98.040 C 238.936 97.429,238.898 97.394,237.413 96.742 L 235.888 96.071 184.642 97.417 C 129.759 98.858,132.861 98.717,131.827 99.827 C 131.096 100.613,131.093 100.630,128.259 119.731 L 125.532 138.115 106.509 138.115 C 90.435 138.115,87.470 138.070,87.378 137.829 C 87.288 137.595,88.854 126.712,89.260 124.744 L 89.377 124.180 48.150 124.180 C 9.063 124.180,6.930 124.162,7.060 123.824 C 7.135 123.628,8.299 116.550,9.645 108.096 C 12.154 92.339,12.350 91.415,13.570 89.528 C 14.096 88.715,87.528 19.237,98.804 8.884 C 100.499 7.327,101.649 6.654,103.101 6.368 C 103.950 6.201,160.861 6.061,160.861 6.226 M228.838 32.779 C 230.989 33.756,230.986 34.100,228.719 46.365 C 226.725 57.158,226.891 56.641,225.075 57.710 C 223.230 58.795,223.026 58.804,201.639 58.805 L 181.865 58.805 181.066 58.347 C 179.093 57.216,179.096 57.014,181.266 45.400 C 183.317 34.420,183.522 33.867,185.959 32.760 C 187.272 32.164,227.521 32.181,228.838 32.779 M99.107 42.588 C 98.302 43.358,87.062 54.012,74.129 66.264 C 53.657 85.657,50.615 88.615,50.615 89.122 C 50.615 90.282,49.543 90.222,72.440 90.328 L 93.632 90.426 94.345 89.713 C 94.737 89.320,95.110 88.777,95.173 88.506 C 95.475 87.214,102.254 43.053,102.254 42.382 C 102.254 40.697,100.999 40.779,99.107 42.588 M280.030 54.662 C 280.100 55.648,280.219 57.631,280.295 59.067 L 280.433 61.680 278.032 76.793 C 276.712 85.105,275.628 92.113,275.623 92.367 L 275.615 92.828 292.470 92.828 L 309.325 92.828 311.168 87.996 C 312.183 85.338,313.043 83.080,313.080 82.977 C 313.120 82.867,308.593 82.769,302.003 82.737 L 290.859 82.684 291.280 80.020 L 291.701 77.357 301.028 77.303 L 310.355 77.250 312.149 72.488 C 313.136 69.868,313.941 67.656,313.939 67.572 C 313.936 67.487,309.271 67.418,303.572 67.418 C 293.801 67.418,293.216 67.398,293.314 67.059 C 293.371 66.862,293.521 65.963,293.648 65.061 C 293.774 64.160,293.924 63.261,293.981 63.064 C 294.078 62.728,294.778 62.705,304.932 62.705 C 313.472 62.705,315.779 62.650,315.780 62.449 C 315.780 62.308,316.103 60.177,316.497 57.714 C 316.891 55.250,317.213 53.152,317.213 53.052 C 317.213 52.946,309.366 52.869,298.558 52.869 L 279.903 52.869 280.030 54.662 M319.474 53.223 C 319.478 53.423,319.610 55.381,319.767 57.574 L 320.052 61.562 317.608 76.991 C 316.264 85.478,315.164 92.512,315.164 92.624 C 315.164 92.755,317.612 92.828,322.003 92.828 L 328.842 92.828 328.947 92.264 C 329.005 91.954,329.406 89.416,329.839 86.623 L 330.625 81.546 333.280 81.603 L 335.934 81.660 338.496 87.244 L 341.058 92.828 348.709 92.828 L 356.359 92.828 355.819 91.752 C 355.521 91.160,354.125 88.478,352.716 85.791 C 350.567 81.690,350.200 80.862,350.436 80.639 C 350.591 80.493,351.962 79.292,353.484 77.970 C 355.005 76.648,356.313 75.508,356.391 75.437 C 356.713 75.141,358.852 60.757,358.749 59.580 C 358.532 57.103,356.834 54.667,354.542 53.541 L 353.381 52.971 336.424 52.915 C 320.306 52.862,319.468 52.878,319.474 53.223 M368.955 53.154 C 364.101 54.710,362.153 57.509,361.043 64.526 C 360.174 70.017,360.450 71.757,362.507 73.754 C 364.483 75.671,365.233 75.854,376.594 77.181 C 380.232 77.607,383.288 78.004,383.385 78.065 C 383.570 78.181,382.979 82.105,382.712 82.538 C 382.597 82.723,381.186 82.787,377.224 82.787 L 371.890 82.787 372.020 82.018 C 372.091 81.596,372.270 80.489,372.419 79.559 L 372.689 77.869 365.846 77.869 C 360.556 77.869,358.984 77.927,358.915 78.125 C 358.435 79.518,357.796 85.393,358.000 86.523 C 358.466 89.093,359.898 90.959,362.264 92.080 L 363.627 92.725 375.102 92.788 C 389.783 92.867,390.236 92.790,393.362 89.671 C 395.687 87.351,395.959 86.648,396.940 80.430 C 397.830 74.788,397.632 73.332,395.686 71.221 C 393.860 69.240,392.999 69.014,382.398 67.723 C 378.183 67.210,374.669 66.749,374.589 66.700 C 374.394 66.580,374.970 63.295,375.244 62.965 C 375.408 62.767,376.712 62.705,380.689 62.705 L 385.918 62.705 385.787 63.730 C 385.715 64.293,385.597 65.215,385.525 65.779 L 385.394 66.803 392.251 66.803 L 399.108 66.803 399.580 63.704 C 400.432 58.122,399.332 55.203,395.742 53.521 L 394.570 52.971 382.172 52.931 C 372.562 52.900,369.590 52.951,368.955 53.154 M95.246 55.350 C 95.306 55.861,90.697 83.662,90.443 84.323 C 90.110 85.192,89.889 85.204,76.383 85.090 C 62.871 84.975,62.653 84.959,63.229 84.106 C 63.818 83.235,94.560 54.701,94.850 54.756 C 95.035 54.791,95.212 55.056,95.246 55.350 M344.672 63.035 C 344.672 64.373,343.368 71.448,343.081 71.670 C 342.766 71.914,332.172 72.076,332.172 71.838 C 332.172 71.789,332.495 69.760,332.889 67.330 C 333.284 64.900,333.607 62.865,333.607 62.808 C 333.607 62.751,336.096 62.705,339.139 62.705 C 344.089 62.705,344.672 62.740,344.672 63.035",
		"path://M46.132 0.324 C 45.210 0.801,25.244 17.031,23.790 18.485 C 22.814 19.462,22.633 20.037,21.528 25.706 C 12.528 71.882,5.643 118.293,0.742 165.814 C -0.187 174.824,-0.432 173.740,3.518 178.083 C 9.444 184.599,16.454 192.112,16.899 192.424 C 17.635 192.939,99.628 192.919,101.188 192.403 C 102.737 191.890,125.449 169.131,125.807 167.733 C 125.932 167.244,126.074 166.725,126.123 166.578 C 126.172 166.432,126.602 162.834,127.079 158.583 C 128.978 141.642,131.251 124.144,133.163 111.743 C 134.544 102.791,134.556 102.575,133.701 101.856 C 132.952 101.225,133.488 101.245,103.889 100.724 L 85.069 100.393 82.193 101.399 C 80.612 101.952,79.318 102.474,79.318 102.558 C 79.318 102.643,79.079 104.813,78.788 107.380 C 77.141 121.904,76.506 135.394,76.484 156.348 C 76.476 164.178,76.401 170.511,76.317 170.420 C 75.923 169.995,72.747 163.864,71.303 160.740 C 63.621 144.126,60.066 128.095,60.066 110.075 L 60.066 103.412 57.977 103.412 C 56.087 103.412,55.857 103.368,55.570 102.957 C 55.258 102.513,55.172 102.506,51.607 102.659 C 47.813 102.821,47.335 102.741,47.335 101.942 C 47.335 100.964,53.254 83.490,53.682 83.206 C 54.053 82.960,54.472 82.949,56.086 83.145 L 58.040 83.383 58.569 82.813 C 59.090 82.251,59.127 82.244,61.209 82.359 L 63.321 82.475 63.551 81.590 C 68.760 61.537,77.383 43.985,90.733 26.254 C 94.409 21.372,100.206 14.277,99.729 15.245 C 99.326 16.062,93.642 35.118,91.366 43.284 C 87.787 56.124,82.292 80.277,82.304 83.115 C 82.305 83.373,83.015 83.771,84.810 84.519 L 87.313 85.563 111.727 84.347 C 125.155 83.678,136.396 83.032,136.709 82.912 C 137.512 82.602,137.547 82.463,139.127 73.348 C 140.995 62.567,143.608 48.703,146.276 35.409 C 147.648 28.570,148.389 24.416,148.310 23.999 C 148.234 23.589,146.893 21.699,144.746 18.974 C 142.853 16.571,139.588 12.382,137.490 9.663 C 133.022 3.874,133.429 4.148,129.012 3.957 C 127.437 3.888,109.782 3.022,89.780 2.031 C 44.529 -0.210,46.978 -0.115,46.132 0.324 M260.993 0.545 C 257.341 1.553,257.624 0.587,251.595 32.623 C 248.887 47.011,248.861 47.302,250.138 48.925 C 251.209 50.287,249.868 50.203,272.388 50.320 C 295.073 50.438,293.846 50.357,294.879 51.807 C 295.796 53.095,295.771 53.510,294.215 62.703 C 287.282 103.666,279.812 157.134,276.850 186.994 C 276.586 189.654,277.831 191.740,280.010 192.288 C 281.635 192.698,318.989 192.638,320.377 192.224 C 323.582 191.267,323.866 190.488,325.159 179.087 C 329.324 142.347,334.056 108.529,340.311 70.789 C 343.435 51.941,343.276 52.472,346.221 51.026 L 347.441 50.426 368.017 50.320 C 390.760 50.202,389.226 50.302,390.909 48.825 C 392.537 47.395,392.627 47.093,394.355 37.283 C 395.230 32.316,396.868 23.285,397.996 17.216 C 400.089 5.947,400.140 5.463,399.335 4.713 C 398.740 4.159,398.090 4.120,384.755 3.841 C 372.225 3.579,362.808 3.300,330.810 2.240 C 302.394 1.298,289.937 0.915,279.104 0.649 C 274.355 0.532,268.598 0.389,266.311 0.330 C 263.013 0.246,261.914 0.290,260.993 0.545 M170.701 0.650 C 167.854 1.368,167.687 1.801,165.048 15.245 C 153.946 71.813,145.869 122.970,139.329 178.145 C 137.910 190.119,137.962 190.695,140.566 191.783 C 141.888 192.335,259.871 192.267,261.087 191.713 C 263.712 190.518,263.959 189.734,265.242 178.529 C 265.844 173.275,266.770 165.474,267.300 161.194 C 268.788 149.170,268.772 148.684,266.833 147.205 L 266.025 146.588 230.187 146.482 C 191.565 146.367,193.801 146.433,192.521 145.374 C 190.898 144.031,190.896 143.789,192.443 132.220 C 197.501 94.371,203.386 57.590,209.947 22.814 C 211.064 16.892,212.215 10.782,212.505 9.237 C 213.413 4.387,213.215 4.153,207.710 3.594 C 188.373 1.630,171.986 0.327,170.701 0.650",
		"path://M28.4,19v4.3c0,3-2.7,5.7-5.7,5.7H6.6c-3,0-5.7-2.7-5.7-5.7V5.9c0-3,2.7-5.7,5.7-5.7h16.2  c3,0,5.7,2.7,5.7,5.7v3.6h-8.9V7.3c0-0.6-0.4-1.1-1.1-1.1h-7.8c-0.6,0-1,0.4-1,1.1V22c0,0.6,0.4,1.1,1,1.1h7.8  c0.6,0,1.1-0.4,1.1-1.1v-3H28.4z M54.3,0.2v10.9h-9.8V0.2H34.3l1.3,6V29h8.9V17.2h9.8V29h8.9V0.2H54.3z M92.8,29h9.2L92,0.2H76.4  l1.3,5.9l-8,22.8h9.2l1.7-5.4h10.6L92.8,29z M82.5,17.6l3.4-10.9h0.1l3.4,10.9H82.5z M138,29l-5.8-8.4l4.4-4.5V5.9  c0-3-2.7-5.7-5.7-5.7h-23.4l1.3,6V29h8.9v-8.4h5.2l5.2,8.4H138z M117.7,6.2h9c0.6,0,1,0.5,1,1.1v6.3c0,0.6-0.4,1.1-1.1,1.1h-8.9V6.2  z M144.1,29H168l1.4-6H153V0.2h-10.2l1.3,6V29z M173.9,23.3c0,3,2.7,5.7,5.7,5.7h16.2c3,0,5.7-2.7,5.7-5.7V5.9c0-3-2.7-5.7-5.7-5.7  h-16.2c-3,0-5.7,2.7-5.7,5.7V23.3 M183.8,23c-0.6,0-1-0.4-1-1.1V7.3c0-0.6,0.4-1.1,1-1.1h7.8c0.6,0,1.1,0.4,1.1,1.1V22  c0,0.6-0.4,1.1-1.1,1.1H183.8z M206.1,0.2l1.3,6h9.2V29h8.9V6.2h9.1v-6H206.1z M239.3,0.2l1.3,6h9.2V29h8.9V6.2h9.1v-6H239.3z   M299.6,6.2v-6H273l1.3,6V29h24.2l1.3-6h-16.7v-5.8h14.2l1.3-5.9h-15.5V6.2H299.6z",
		"path://M106.2,132.9c-4,29.7-4.2,59.5-3.8,89c-15.9-26.7-24.1-56.3-22.1-87.8l-4.9,0.2c-1,0.1-1.6-0.5-1.8-1.3  l-9.3,0.4c-1,0.1-1.6-0.7-1.4-1.5l7.7-23c0.1-0.8,1-1.5,1.9-1.5l4.9,0.5c0.4-0.8,1.3-1.4,2.2-1.4l4.8,0.2  c7.7-31.4,25-61.1,49.2-87.8c-9.6,29.5-18.5,59.3-23.7,89l6.8,2.8l64.8-3.2c1-0.1,1.8-0.7,2-1.6c4.1-23.5,9.3-49.7,14.2-73  c0.2-1.2,0-2.2-0.7-3.2C191,22.5,185,15,178.9,7.4c-0.7-1-1.8-1.5-3.2-1.5C138.6,4,101.4,2.3,64.2,0.5c-1.3-0.1-2.5,0.4-3.6,1.3  C51.2,9,41.8,16.5,32.5,24c-1.2,1-1.8,2.1-2.1,3.3C17.1,92,7.1,157.5,0.4,223.4c-0.1,1.3,0.2,2.4,1.1,3.3c7,7.4,14,14.9,21,22.2  c0.7,0.8,3.2,0.6,3.2,0.6h107.6c0,0,2.7-0.6,3.6-1.5c8.4-8,21.4-21.1,29.9-28.8c1-1,1.6-4.3,1.8-5.5c1.8-16.5,3.9-33,6.2-49.4  c0.3-2,0.6-4,0.8-6c1.1-7.7,2.4-16,3.7-23.7c0.3-1.6-1-3-2.7-3.1l-62.8-1.1L106.2,132.9z",
	];

	const options = [
		{
			backgroundColor: "transparent",
			xAxis: {
				type: "category",
				show: false,
			},
			yAxis: {
				type: "category",
				show: false,
			},
			series: [
				{
					type: "scatter",
					data: [1],
					symbol: paths[1],
					color: "#005035",
					symbolKeepAspect: true,
					universalTransition: true,
					symbolSize: symbolSize,
				},
			],
		},
		{ series: [{ symbol: paths[0], symbolSize: symbolSize }] },
		{ series: [{ symbol: paths[2], symbolSize: symbolSize }] },
	];

	const optionsDark = [
		{
			backgroundColor: "transparent",
			xAxis: {
				type: "category",
				show: false,
			},
			yAxis: {
				type: "category",
				show: false,
			},
			series: [
				{
					type: "scatter",
					data: [1],
					symbol: paths[1],
					color: "#fff",
					symbolKeepAspect: true,
					universalTransition: true,
					symbolSize: symbolSize,
				},
			],
		},
		{ series: [{ symbol: paths[0], symbolSize: symbolSize }] },
		{ series: [{ symbol: paths[2], symbolSize: symbolSize }] },
	];

	return (
		<div className="chart">
			{theme === "dark" ? (
				<div className="chart">
					<div className="charlotteDark">WE ARE</div>
					<ReactECharts
						style={{
							height: "175px",
							width: "100%",
						}}
						ref={echarts_react_dark}
						option={optionsDark[0]}
					/>
				</div>
			) : (
				<div className="chart">
					<div className="charlotte">WE ARE</div>
					<ReactECharts
						style={{
							height: "175px",
							width: "100%",
						}}
						ref={echarts_react}
						option={options[0]}
					/>
				</div>
			)}
			<style jsx>{`
				.charlotte {
					font-family: "RedzoneOblique";
					display: flex;
					flex-direction: column;
					align-items: center;
					color: #32725d;
					font-size: 4rem;
				}
				.charlotteDark {
					font-family: "RedzoneOblique";
					display: flex;
					flex-direction: column;
					align-items: center;
					color: #ccdcd6;
					font-size: 4rem;
				}
			`}</style>
		</div>
	);
}

export default LoadingScreen;
