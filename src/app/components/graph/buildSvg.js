import d3 from 'd3';

export default function({width, height, mountPoint}) {
  let margin = {top: 20, right: 20, bottom: 30, left: 50},
  w = width - margin.left - margin.right,
  h = height - margin.top - margin.bottom;


  let svg = d3.select(mountPoint).append("svg")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    return { svg, w, h }

}
