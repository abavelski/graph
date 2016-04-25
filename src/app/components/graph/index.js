import d3 from 'd3';

export function buildGraph(options) {
  if (options.data) {
    const { width, height, symbol, data, mountPoint } = options;

    let margin = {top: 20, right: 20, bottom: 30, left: 50},
    w = width - margin.left - margin.right,
    h = height - margin.top - margin.bottom;

    let x = d3.time.scale().range([0, w]);
    let y = d3.scale.linear().range([h, 0]);

    let xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(5).tickFormat(d3.time.format('%b %y'));
    let yAxis = d3.svg.axis().scale(y).orient("left");

    let area = d3.svg.area()
    .x((d) => x(d[0]))
    .y0(h)
    .y1((d) => y(d[1]));

    let line = d3.svg.line()
    .x(function(d) { return x(d[0]); })
    .y(function(d) { return y(d[1]); });

    let svg = d3.select(mountPoint).append("svg")
    .attr("width", w + margin.left + margin.right)
    .attr("height", h + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let focus = svg.append("g").style("display", "none");

    let bisectDate = d3.bisector((d) => d[0]).left;
    let dateFormat = d3.time.format("%Y-%m-%d");

    data.forEach(function(d) {
      d[0] = new Date(d[0]);
    });

    // append the circle at the intersection
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


    x.domain(d3.extent(data, (d) => d[0]));

    let ext = d3.extent(data, (d) =>d[1]);
    let min =ext[0] - (ext[1]-ext[0])/8;
    let max = ext[1] + (ext[1]-ext[0])/8;
    if (min < 0) { min = 0 };

    y.domain([min, max] );

    svg.append("path")
    .datum(data)
    .attr("class", "area")
    .attr("d", area);

    svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + h + ")")
    .call(xAxis);


    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

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

  }
}
