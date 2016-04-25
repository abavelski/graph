import d3 from 'd3';

export default function({svg, x, y, h, data}) {

  let area = d3.svg.area()
    .x((d) => x(d[0]))
    .y0(h)
    .y1((d) => y(d[1]));

  svg.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);

}
