import d3 from 'd3';

export default function({svg, x, y, points }) {

  let line = d3.svg.line()
    .x((d,i) => x(i))
    .y((d)=> y(d.close));

  svg.append("path")
    .datum(points)
    .attr("class", "line")
    .attr("d", line);

}
