import staticText from './staticText';
import focusAxes from './focusAxes';
import mousemove from './mousemove';

export default function({ svg, w , h, x, y, points}) {

  let focus = svg.append("g").style("display", "none");

  focusAxes({focus, w, h});
  staticText(focus);

    // append the rectangle to capture mouse
    svg.append("rect")
      .attr("width", w)
      .attr("height", h)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", () => focus.style("display", null))
      .on("mouseout", () => focus.style("display", "none"))
      .on("mousemove", mousemove({focus, w, h, x, y, points}));

  return focus;
}
