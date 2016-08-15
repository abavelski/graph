import d3 from 'd3';

export default function({svg, x, v, h, w, points }) {
  const barWidth = w/points.length;

  const xCoord = (d,i)=> (x(i)-barWidth/2>0?x(i)-barWidth/2:0);
  const barWidthCalc =  (d,i)=> (i===0||i===points.length-1)?barWidth/2:barWidth;
  const barColor = (d,i)=> (i===0 || points[i].close<points[i-1].close)?"red":"green" ;

  svg.selectAll("volume")
   .data(points)
   .enter()
   .append("rect")
   .attr("class", "volume")
   .attr("x", xCoord )
   .attr("y", (d)=>v(d.volume))
   .attr("width", barWidthCalc)
   .attr("height",(d)=> h-v(d.volume))
   .attr("opacity", 0.4)
   .attr("fill", barColor);

}
