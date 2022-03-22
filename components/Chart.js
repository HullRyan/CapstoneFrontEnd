/**
 * @author Ryan Hull <hull.ryanc@gmail.com>
 */

import ReactECharts from "echarts-for-react";
import React, { useEffect, useContext, useState, useRef } from "react";
import Link from "next/link";
import ThemeContext from "./ThemeContext";

function Chart() {
	const echarts_react = useRef(null);

	const [modalOpen, setModalOpen] = useState(true);

	function closeModal() {
		setModalOpen(false);
	}

	if (typeof window !== "undefined") {
		var data = JSON.parse(localStorage.getItem("school"));
		var dataPath = data.children;
	}

	const theme = useContext(ThemeContext);

	function getLevelOption() {
		return [
			{
				itemStyle: {
					borderColor: "#a49665",
					borderWidth: 4,
					gapWidth: 4,
				},
			},
			{
				colorSaturation: [0.2, 0.4],
				itemStyle: {
					borderColorSaturation: 0.7,
					gapWidth: 2,
					borderWidth: 2,
				},
			},
			{
				colorSaturation: [0.2, 0.4],
				itemStyle: {
					borderColorSaturation: 0.6,
					gapWidth: 1,
				},
			},
			{
				colorSaturation: [0.2, 0.4],
			},
		];
	}

	const options = [
		{
			backgroundColor: "transparent",
			title: {
				text: "UNCC Faculty + Interests",
				left: "center",
			},
			legend: {
				type: "scroll",
				orient: "horizontal",
				top: "30",
				left: "auto",
			},
			toolbox: {
				feature: {
					saveAsImage: {},
					magicType: {
						show: true,
						type: ["pie", "sunburst", "treemap"],
					},
					myTool2: {
						show: true,
						title: "custom extension method",
						onclick: function () {
							alert("myToolHandler2");
						},
					},
					dataView: {},
				},
			},
			tooltip: {
				formatter: function (info) {
					//console.log(info);
					return [
						"<div>" +
							info.name +
							"</div>" +
							"Academic Interests: " +
							info.value,
					].join("");
				},
			},
			dataset: {
				source: dataPath,
			},
			series: [
				{
					name: "UNCC",
					type: "treemap",
					levels: getLevelOption(),
					data: dataPath,
					animationDurationUpdate: 1000,
					visibleMin: 20,
					leafDepth: 2,
					upperLabel: {
						show: true,
						//backgroundColor: 'transparent',
						//borderColor: 'white',
						textShadowColor: "black",
						textShadowBlur: "3",
						textShadowOffset: "2",
						color: "white",
						textBorderColor: "black",
						textBorderWidth: "",
						height: 25,
					},
					universalTransition: true,
					id: "pie",
					emphasis: {
						focus: "self",
					},
					label: {},
					/*encode: {
          itemName: "College Name",
          value: "College Publications",
          tooltip: "Publications"
        }*/
				},
			],
		},
		{
			series: [
				{
					type: "sunburst",
					universalTransition: true,
					itemStyle: {
						borderColor: "white",
						borderCap: "round",
						borderJoin: "round",
						borderWidth: "1",
					},
					data: dataPath,
					label: {
						show: false,
					},
				},
			],
		},
		{
			series: [
				{
					type: "tree",
					data: [data],
					layout: "",
					left: "2%",
					right: "2%",
					top: "8%",
					bottom: "20%",
					symbol: "emptyCircle",
					orient: "vertical",
					expandAndCollapse: true,
					label: {
						position: "top",
						rotate: -90,
						verticalAlign: "middle",
						align: "right",
						fontSize: 9,
					},
					leaves: {
						label: {
							position: "bottom",
							rotate: -90,
							verticalAlign: "middle",
							align: "left",
						},
					},
					universalTransition: true,
				},
			],
		},
		{
			series: [
				{
					type: "pie",
					universalTransition: true,
					data: dataPath,
				},
			],
		},
	];

	const onChartClick = (params) => {
		console.log("Chart clicked", params);
		if (params.event.event.ctrlKey) {
			console.log("Control was held");
			if (params.data.link != null) {
				window.open(params.data.link, "_blank");
			}
		}
	};

	const onEvents = {
		click: onChartClick,
	};

	return (
		<div className="charts-container">
			{modalOpen === true && (
				<div className="warning-modal" onClick={closeModal}>
					<div className="warning-box">
						<div className="message">
							Warning: This page was not built for a screen this small, and is
							best enjoyed in a larger experience
						</div>
						<div className="buttons">
							<Link href="/data">
								<a className="data">View Data Page</a>
							</Link>
							<div className="continue">Ignore Warnings</div>
						</div>
					</div>
				</div>
			)}
			{theme.theme === "dark" ? (
				<div className="chart">
					<div className="chart-buttons">
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[0]);
							}}
						>
							Tree Map
						</button>
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[1]);
							}}
						>
							Sunburst
						</button>
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[2]);
							}}
						>
							Tree
						</button>
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[3]);
							}}
						>
							Pie
						</button>
					</div>
					<ReactECharts
						ref={echarts_react}
						style={{
							height: "100%",
							width: "100%",
						}}
						option={options[0]}
						theme={"dark"}
						onEvents={onEvents}
					/>
					<div className="click-message">
						Hold Control when clicking a chart element to open the connections
						page in a new tab.
					</div>
				</div>
			) : (
				<div className="chart">
					<div className="chart-buttons">
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[0]);
							}}
						>
							Tree Map
						</button>
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[1]);
							}}
						>
							Sunburst
						</button>
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[2]);
							}}
						>
							Tree
						</button>
						<button
							onClick={() => {
								echarts_react.current
									.getEchartsInstance()
									.setOption(options[3]);
							}}
						>
							Pie
						</button>
					</div>
					<ReactECharts
						ref={echarts_react}
						style={{
							height: "100%",
							width: "100%",
						}}
						option={options[0]}
						onEvents={onEvents}
					/>
					<div className="click-message">
						Hold Control when clicking a chart element to open the connections
						page in a new tab.
					</div>
				</div>
			)}
			<style jsx>
				{`
					.click-message {
						background-color: #a49665;
						color: #f1f1f1;
						width: 30%;
						padding: 0.5rem;
						margin-left: auto;
						margin-right: auto;
						margin-top: 0.5rem;
					}
					.chart-buttons {
						margin-left: auto;
						margin-right: auto;
						display: flex;
						justify-content: center;
						gap: 1rem;
						padding-bottom: 1rem;
					}
					.chart-buttons > button {
						width: 6rem;
						padding: 0.4rem;
						background-color: #a49665;
						color: #f1f1f1;
						cursor: pointer;
						border: none;
						font-size: 1.005rem;
					}
					.chart-buttons > button:hover {
						background-color: rgb(218, 201, 138);
					}
					.warning-modal {
						display: flex;
						justify-content: center;
						align-items: center;
						position: fixed;
						left: 0;
						top: 0;
						z-index: 9999;
						width: 100%;
						height: 100%;
						background-color: rgba(0, 0, 0, 0.7);
						-webkit-transition: 0.5s;
						overflow: auto;
						transition: all 0.3s linear;
						color: #f1f1f1;
						font-size: 1.2rem;
						font-family: "Bebas Neue", Arial, sans-serif;
						transition: all 0.3s linear;
					}

					@media screen and (min-width: 1000px) {
						.warning-modal {
							display: none;
						}
					}
					.warning-box {
						display: flex;
						flex-direction: column;
						margin: 2rem;
						max-width: 400px;
						background-color: rgba(0, 0, 0, 0.8);
						padding: 2rem;
						border-radius: 1rem;
					}
					.buttons {
						padding-top: 2rem;
						width: 100%;
						display: flex;
						justify-content: space-around;
						gap: 2rem;
					}
					.buttons > * {
						display: flex;
						align-content: center;
						justify-content: center;
						padding: 1rem;
						border-radius: 1rem;
						cursor: pointer;
					}
					.data {
						background-color: rgba(47, 235, 26, 0.5);
					}
					.data:hover {
						background-color: rgba(47, 235, 26, 0.7);
					}
					.continue {
						background-color: rgba(255, 41, 31, 0.5);
					}
					.continue:hover {
						background-color: rgba(255, 41, 31, 0.7);
					}
				`}
			</style>
		</div>
	);
}

export default Chart;
