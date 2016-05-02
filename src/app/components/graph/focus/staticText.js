export default function(focus) {

  focus.append("rect")
    .attr("x", 15)
    .attr("y", -20)
    .attr("width", 80)
    .attr("height", 50)
    .style("fill", "white");

    focus.append("text")
      .attr("x", 20)
      .attr("y", -10)
      .style("opacity", 0.6)
      .text("Open")

    focus.append("text")
      .attr("x", 20)
      .attr("y", 0)
      .style("opacity", 0.6)
      .text("Close")

    focus.append("text")
      .attr("x", 20)
      .attr("y", 10)
      .style("opacity", 0.6)
      .text("High")

    focus.append("text")
      .attr("x", 20)
      .attr("y", 20)
      .style("opacity", 0.6)
      .text("Low")

    focus.append("text")
      .attr("x", 20)
      .attr("y", 30)
      .style("opacity", 0.6)
      .text("Volume")

    focus.append("text")
      .attr("class", "open")
      .attr("x", 60)
      .attr("y", -10)

    focus.append("text")
      .attr("class", "close")
      .attr("x", 60)
      .attr("y", 0)

    focus.append("text")
      .attr("class", "high")
      .attr("x", 60)
      .attr("y", 10)

    focus.append("text")
      .attr("class", "low")
      .attr("x", 60)
      .attr("y", 20)

    focus.append("text")
      .attr("class", "volume")
      .attr("x", 60)
      .attr("y", 30);

}
