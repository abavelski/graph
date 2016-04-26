import d3 from 'd3';

export default function({svg, x, y, data }) {

  let line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

  svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

}
