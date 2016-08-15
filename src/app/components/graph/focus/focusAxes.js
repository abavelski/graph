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
      .attr("width", 51)
      .attr("height", 11)
      .style("fill", "black");

  focus.append("rect")
       .attr("class", "close-pointer-background")
       .attr("x", w+5)
       .attr("y", 0)
       .attr("width", 30)
       .attr("height", 12)
       .style("fill", "black");

  focus.append("rect")
       .attr("class", "change-pointer-background")
       .attr("x", -38)
       .attr("y", 0)
       .attr("width", 33)
       .attr("height", 12)
       .style("fill", "black");

  focus.append("polygon")
        .attr("class", "close-pointer-background")
        .attr("points", w+",6 "+(w+6)+",12 "+(w+6)+",0")
        .style("fill", "black");

  focus.append("polygon")
        .attr("class", "change-pointer-background")
        .attr("points", "-1,6 -6,12 -6,0")
        .style("fill", "black");


  focus.append("text")
      .attr("class", "date-pointer")
      .attr("fill", "white")

  focus.append("text")
      .attr("class", "close-pointer")
      .attr("fill", "white")

  focus.append("text")
      .attr("class", "change-pointer")
      .attr("fill", "white")


}
