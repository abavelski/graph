import d3 from 'd3';

export default function( {w, h, data} ) {

  let x = d3.time.scale().range([0, w]);
  let y = d3.scale.linear().range([h, 0]);

  x.domain(d3.extent(data, (d) => d[0]));

  let ext = d3.extent(data, (d) =>d[1]);
  let min =ext[0] - (ext[1]-ext[0])/8;
  let max = ext[1] + (ext[1]-ext[0])/8;
  if (min < 0) { min = 0 };

  y.domain([min, max] );

  return {x, y};
}
