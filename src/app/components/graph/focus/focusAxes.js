export default function({focus, w, h}) {

  focus.append("circle")
    .attr("class", "y")
    .attr("r", 3);

  focus.append("line")
      .attr("class", "y")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 0)
      .attr("y2", h)
      .style("stroke-width", 0.5)
      .style("stroke-dasharray", ("3, 3"))
      .style("stroke", "black")
      .style("fill", "none");

  focus.append("line")
      .attr("class", "x")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", w)
      .attr("y2", 0)
      .style("stroke-width", 0.5)
      .style("stroke-dasharray", ("3, 3"))
      .style("stroke", "black")
      .style("fill", "none");

  focus.append("rect")
      .attr("class", "date-pointer-background")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", 31)
      .attr("height", 11)
      .style("fill", "black");


  focus.append("text")
      .attr("class", "date-pointer")
      .attr("fill", "white")


}
