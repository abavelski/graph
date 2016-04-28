import d3 from 'd3';

let yDomain = (points) => {
  let ext = d3.extent(points, (d) =>d.close),
    emptySpace = (ext[1]-ext[0])/8,
    min =ext[0] - emptySpace,
    max = ext[1] + emptySpace;

  if (min < 0) {
    min = 0
  };
  return [min, max];
}

export default function( {w, h, points} ) {

  let x = d3.scale.ordinal().domain(d3.range(points.length)).rangePoints([0, w]),
    y = d3.scale.linear().range([h, 0]).domain(yDomain(points)),
    v = d3.scale.linear().range([h, h*0.8]).domain(d3.extent(points, (d) => d.volume));

  return {x, y, v};
}
