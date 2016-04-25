import d3 from 'd3';

export default function({ x, y, svg, h }) {
    let xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.time.format('%b %y')),
        yAxis = d3.svg.axis().scale(y).orient("left");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
}
