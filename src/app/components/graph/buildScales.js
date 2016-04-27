import d3 from 'd3';

let yDomain = (data) => {
  let ext = d3.extent(data, (d) =>d.close),
    emptySpace = (ext[1]-ext[0])/8,
    min =ext[0] - emptySpace,
    max = ext[1] + emptySpace;

  if (min < 0) {
    min = 0
  };
  return [min, max];
}

export default function( {w, h, data} ) {

  let x = d3.scale.ordinal().domain(d3.range(data.length)).rangePoints([0, w]),
    y = d3.scale.linear().range([h, 0]).domain(yDomain(data)),
    v = d3.scale.linear().range([h, h*0.8]).domain(d3.extent(data, (d) => d.volume));

  return {x, y, v};
}
