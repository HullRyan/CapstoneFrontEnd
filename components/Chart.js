import ReactECharts from "echarts-for-react";
import React, { useEffect, useContext, useState } from "react";
import ThemeContext from "./ThemeContext"

function Chart() {
	var data = JSON.parse(localStorage.getItem("school"));
	var dataPath = data.children;

	const theme = useContext(ThemeContext);

	function getLevelOption() {
		return [
			{
				itemStyle: {
					borderColor: "rgb(0, 80, 53)",
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
			title: {
				text: "UNCC Faculty + Interests",
				left: "center",
				padding: 25,
			},
			legend: {
				type: "scroll",
				orient: "horizontal",
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
						height: 30,
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

	return (
		<>
			{theme.theme === "dark" ? (
				<div className="chart">
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[1]);
						}}
					>
						Sunburst
					</button>
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[2]);
						}}
					>
						Tree
					</button>
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[0]);
						}}
					>
						Tree Map
					</button>
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[3]);
						}}
					>
						Pie
					</button>
					<ReactECharts
						ref={(e) => {
							this.echarts_react = e;
						}}
						style={{
							height: "100%",
							width: "100%",
						}}
						option={options[0]}
						theme={"dark"}
					/>
				</div>
			) : (
				<div className="chart">
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[1]);
						}}
					>
						Sunburst
					</button>
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[2]);
						}}
					>
						Tree
					</button>
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[0]);
						}}
					>
						Tree Map
					</button>
					<button
						onClick={() => {
							this.echarts_react.getEchartsInstance().setOption(options[3]);
						}}
					>
						Pie
					</button>
					<ReactECharts
						ref={(e) => {
							this.echarts_react = e;
						}}
						style={{
							height: "100%",
							width: "100%",
						}}
						option={options[0]}
					/>
				</div>
			)}
		</>
	);
}

export default Chart;
