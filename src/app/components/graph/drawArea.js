import d3 from 'd3';

export default function({svg, x, y, h, data}) {

  let area = d3.svg.area()
    .x((d,i) => x(i))
    .y0(h)
    .y1((d) => y(d.close));

  svg.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);

}
