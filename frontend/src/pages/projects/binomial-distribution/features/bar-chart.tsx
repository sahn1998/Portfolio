import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

type BarChartProps = {
  data: number[];
  width: number;
  height: number;
  maxBinRange?: number;
  probabilityOfHeads?: number;
  estimating_k?: number;
  graphType: string;
  expectation?: string;
  variance?: string;
  pmf_pdf?: string;
};

export const BarChart: React.FC<BarChartProps> = ({
  data,
  width,
  height,
  maxBinRange = 1,
  probabilityOfHeads = 0,
  estimating_k = 0,
  graphType,
  expectation,
  variance,
  pmf_pdf
}) => {
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (!data || data.length === 0) return;

		// Set up SVG canvas
		const svg = d3.select(svgRef.current);
		svg.selectAll("*").remove(); // Clear previous renders

		const margin = { top: 20, right: 20, bottom: 30, left: 40 };
		const chartWidth = width - margin.left - margin.right;
		const chartHeight = height - margin.top - margin.bottom;

		// Append group element
		const g = svg
		.append("g")
		.attr("transform", `translate(${margin.left},${margin.top})`);

		// Mini-tick thresholds (bins)
		const miniTicks = d3.range(0, maxBinRange + 1, 1); // Mini-ticks at every 1 unit

		// Regular tick intervals for labels
		const regularTicks = d3.ticks(0, maxBinRange, Math.min(maxBinRange, 5)); // Adjust number of ticks

		// Calculate the bar to highlight (expected value from binomial distribution)
		const highlightValue = graphType === "distribution" ? Math.round(maxBinRange * probabilityOfHeads) : estimating_k;

		// Create bins based on mini-tick thresholds
		const bins = d3
		.bin()
		.domain([0, maxBinRange])
		.thresholds(miniTicks)(data);

		// Create scales
		const xScale = d3
		.scaleLinear()
		.domain([0, maxBinRange])
		.range([0, chartWidth]);

		const yScale = d3
		.scaleLinear()
		.domain([0, d3.max(bins, (d) => d.length) || 1])
		.range([chartHeight, 0]);

		// Draw bars based on mini-tick bins
		g.selectAll(".bar")
		.data(bins)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", (d) => xScale(d.x0 || 0))
		.attr("y", (d) => yScale(d.length))
		.attr("width", (d) => xScale(d.x1 || 0) - xScale(d.x0 || 0) - 1)
		.attr("height", (d) => chartHeight - yScale(d.length))
		.attr("fill", (d) =>
			d.x0 === highlightValue ? "#ff9900" : "#69b3a2"
		); // Highlight the bar for the expected value

		// Add percentages as text labels
		g.selectAll(".label")
		.data(bins)
		.enter()
		.append("text")
		.attr("class", "label")
		.attr("x", (d) => (xScale(d.x0 || 0) + xScale(d.x1 || 0)) / 2) // Centered in the bin
		.attr("y", (d) => yScale(d.length) + (chartHeight - yScale(d.length)) / 2) // Centered vertically
		.attr("text-anchor", "middle")
		.attr("dominant-baseline", "top")
		.attr("font-size", "8px")
		.attr("fill", "white")
		.text((d) => {
			if (d.length > 0) {
			const percentage = ((d.length / data.length) * 100).toFixed(1);
			return `${percentage}%`;
			}
			return ""; // Hide for empty bins
		});

		// Add x-axis with regular ticks
		g.append("g")
		.attr("transform", `translate(0,${chartHeight})`)
		.call(d3.axisBottom(xScale).tickValues(regularTicks))
		.attr("stroke", "gray")
	
		// Add grid lines vertically
		// g.append("g")
		// .attr("class", "grid")
		// .call(
		//   d3.axisBottom(xScale)
		// 	.tickSize(-chartHeight) // Extend grid lines vertically
		// 	.tickFormat(() => "") // Hide tick labels for grid
		// 	.ticks(Math.min(maxBinRange, 5)) // Use fewer ticks for clarity
		// )
		// .attr("transform", `translate(0,${chartHeight})`)
		// .selectAll(".tick line")
		// .attr("stroke", "#e0e0e0"); // Style grid lines
		if (graphType === 'distribution') {
			// Add label for E(X) and Var(X)
			const expectedValue = (maxBinRange * probabilityOfHeads).toFixed(2);
			const varianceValue = (maxBinRange * probabilityOfHeads * (1 - probabilityOfHeads)).toFixed(2);
			g.append("text")
				.attr("x", chartWidth - 10) // Position near the top-right of the graph
				.attr("y", -10)
				.attr("text-anchor", "end") // Align text to the end of the x position
				.attr("dominant-baseline", "hanging")
				.attr("font-size", "20px")
				.attr("fill", "white")
				.text(`${expectation} = ${expectedValue} cars`)
			
			g.append("text")
				.attr("x", chartWidth) // Position near the top-right of the graph
				.attr("y", 20)
				.attr("text-anchor", "end") // Align text to the end of the x position
				.attr("dominant-baseline", "hanging")
				.attr("font-size", "20px")
				.attr("fill", "white")
				.text(`${variance} = ${varianceValue}`);
		} else {
			// Function to calculate the binomial coefficient
			const binomialCoefficient = (maxBinRange: number, estimating_k: number) => {
				if (estimating_k > maxBinRange) return 0; // Binomial coefficient is 0 if k > n
				if (estimating_k === 0 || estimating_k === maxBinRange) return 1; // Edge cases: nC0 = 1, nCn = 1
			
				estimating_k = Math.min(estimating_k, maxBinRange - estimating_k); // Take advantage of symmetry, nCk = nC(n-k)
				let result = 1;
			
				for (let i = 1; i <= estimating_k; i++) {
				result *= maxBinRange - (i - 1);
				result /= i;
				}
			
				return result;
			};

			const binomialValue = binomialCoefficient(maxBinRange, estimating_k)

			const probabilityValue = ((binomialValue * probabilityOfHeads**estimating_k * (1-probabilityOfHeads)**(maxBinRange-estimating_k))*100).toFixed(2);
			g.append("text")
				.attr("x", chartWidth - 10) // Position near the top-right of the graph
				.attr("y", -10)
				.attr("text-anchor", "end") // Align text to the end of the x position
				.attr("dominant-baseline", "hanging")
				.attr("font-size", "20px")
				.attr("fill", "white")
				.text(`Number of Tesla in Group = ${maxBinRange}`)
			
			g.append("text")
				.attr("x", chartWidth - 10) // Position near the top-right of the graph
				.attr("y", 20)
				.attr("text-anchor", "end") // Align text to the end of the x position
				.attr("dominant-baseline", "hanging")
				.attr("font-size", "20px")
				.attr("fill", "white")
				.text(`Calculated ${pmf_pdf} ≈ ${probabilityValue} %`)
		}

		// Add mini-ticks explicitly for better granularity
		const miniTickGroup = g
		.append("g")
		.attr("transform", `translate(0,${chartHeight})`);

		miniTickGroup
		.selectAll(".mini-tick")
		.data(miniTicks)
		.enter()
		.append("line")
		.attr("class", "mini-tick")
		.attr("x1", (d) => xScale(d))
		.attr("x2", (d) => xScale(d))
		.attr("y1", 0)
		.attr("y2", 5) // Small tick height
		.attr("stroke", "gray")
		.attr("stroke-width", 0.5);

		// Add y-axis
		g
		.append("g").call(d3.axisLeft(yScale))
		.attr("stroke", "gray");
	}, [data, width, height, maxBinRange, estimating_k]);

	return (
		<svg
			ref={svgRef}
			width={width}
			height={height}
			style={{ border: "1px solid white" }}
		/>
	);
};
