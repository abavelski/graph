import d3 from 'd3';

export default function({svg, x, v, h, data }) {

  svg.selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("x", (d)=>x(d.date))
   .attr("y", (d)=>v(d.volume))
   .attr("width", 5)
   .attr("height",(d)=> h-v(d.volume))
   .attr("opacity", 0.3)
   .attr("fill", "teal");

}
