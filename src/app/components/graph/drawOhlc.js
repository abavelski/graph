import d3 from 'd3';

export default function({svg, x, y, h, w, data }) {
  let lineWidth = w/(data.length*2);
  let line = d3.svg.line()
    .x( (d) => d.x)
    .y((d) => d.y);

  let bars = svg.append('g')
            .selectAll()
            .data(data)
            .enter()
            .append('g')
            .attr('class', (d,i)=>d.close>d.open?'up-day':'down-day');

            bars.append('path')
              .attr('class', 'high-low-line')
              .attr('d', (d, i) => line([
                  { x: x(i), y: y(d.high) },
                  { x: x(i), y: y(d.low) }]));

            bars.append('path')
              .attr('class', 'close-tick')
              .attr('d', (d, i) => line([
                { x: x(i), y: y(d.close) },
                { x: x(i) + lineWidth, y: y(d.close) }]));

            bars.append('path')
              .attr('class', 'open-tick')
              .attr ('d', (d,i) => line([
                { x: x(i)-lineWidth, y: y(d.open) },
                { x: x(i), y: y(d.open) }]));
}
