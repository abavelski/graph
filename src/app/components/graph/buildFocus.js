import d3 from 'd3';

let bisectDate = d3.bisector((d) => d[0]).left;
let dateFormat = d3.time.format("%Y-%m-%d");

export default function({ svg, w , h, x, y, data}) {
  //const { svg, w , h} = options;
  let focus = svg.append("g").style("display", "none");

  focus.append("circle")
    .attr("class", "y")
    .attr("r", 3);

  focus.append("text")
    .attr("x", 20)
    .attr("y", 0)
    .style("opacity", 0.6)
    .text("Date")

  focus.append("text")
    .attr("x", 20)
    .attr("y", 10)
    .style("opacity", 0.6)
    .text("Close")

  focus.append("text")
    .attr("class", "date")
    .attr("x", 50)
    .attr("y", 0)

  focus.append("text")
    .attr("class", "value")
    .attr("x", 50)
    .attr("y", 10)

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

    function mousemove() {
      let x0 = x.invert(d3.mouse(this)[0]),
      i = bisectDate(data, x0, 1),
      d0 = data[i - 1],
      d1 = data[i],
      d = x0 - d0[0] > d1[0] - x0 ? d1 : d0;

      focus.select("circle.y")
      .attr("transform",
      "translate(" + x(d[0]) + "," + y(d[1]) + ")");

      focus.select("line.y")
      .attr("transform",
      "translate(" + x(d[0]) + ",0)");

      focus.select("line.x")
      .attr("transform",
      "translate(0,"+ y(d[1]) + ")");

      focus.select("text.date")
      .text(dateFormat(d[0]));

      focus.select("text.value")
      .text(d[1])
    }

    // append the rectangle to capture mouse
    svg.append("rect")
    .attr("width", w)
    .attr("height", h)
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mouseover", () => focus.style("display", null))
    .on("mouseout", () => focus.style("display", "none"))
    .on("mousemove", mousemove);

  return focus;
}
