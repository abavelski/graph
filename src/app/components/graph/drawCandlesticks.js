import d3 from 'd3';

export default function({svg, x, y, h, w, points }) {
  let width = w/points.length;

  let line = d3.svg.line()
    .x( (d) => d.x)
    .y((d) => d.y);

  let bars = svg.append('g')
              .selectAll()
              .data(points)
              .enter()
              .append('g')
              .attr('class', (d,i)=>d.close>d.open?'up-day':'down-day');

            bars.append('path')
              .attr('class', 'high-low-line')
              .attr('d', (d, i) => line([
                  { x: x(i), y: y(d.high) },
                  { x: x(i), y: y(d.low) }]));

            bars.append('rect')
              .attr('x',  (d,i) => x(i) - width/2)
              .attr('y', (d) => d.close>d.open?y(d.close) : y(d.open))
              .attr('width', width)
              .attr('height', (d) =>d.close>d.open?y(d.open)-y(d.close):y(d.close)-y(d.open));

}