import d3 from 'd3';

export default function({svg, x, v, h, w, points }) {
  let barWidth = w/points.length;

  svg.selectAll("volume")
   .data(points)
   .enter()
   .append("rect")
   .attr("class", "volume")
   .attr("x", (d,i)=> x(i)-barWidth/2 )
   .attr("y", (d)=>v(d.volume))
   .attr("width", barWidth)
   .attr("height",(d)=> h-v(d.volume))
   .attr("opacity", 0.6)
   .attr("fill", (d,i)=> ((i===0 || points[i].close<points[i-1].close)?"rgba(250,0,39,.5)":"rgba(0,205,122,.5)" ))

}
