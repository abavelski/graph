import d3 from 'd3';

export default function({svg, x, y, h, w, points }) {
  let width = w/points.length;

  let line = d3.svg.line()
    .x( (d) => d.x)
    .y((d) => d.y);

    const xCoord = (d,i)=> (x(i)-width/2>0?x(i)-width/2:0);
    const barWidthCalc =  (d,i)=> (i===0||i===points.length-1)?width/2:width;

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
              .attr('x',  xCoord)
              .attr('y', (d) => d.close>d.open?y(d.close) : y(d.open))
              .attr('width', barWidthCalc)
              .attr('height', (d) =>d.close>d.open?y(d.open)-y(d.close):y(d.close)-y(d.open));

}
