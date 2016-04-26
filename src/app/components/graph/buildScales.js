import d3 from 'd3';

export default function( {w, h, data} ) {

  let x = d3.time.scale().range([0, w]);
  let y = d3.scale.linear().range([h, 0]);
  let v = d3.scale.linear().range([h*0.8, h]);

  x.domain(d3.extent(data, (d) => d.date));

  let ext = d3.extent(data, (d) =>d.close);
  let min =ext[0] - (ext[1]-ext[0])/8;
  let max = ext[1] + (ext[1]-ext[0])/8;
  if (min < 0) { min = 0 };

  y.domain([min, max] );
  v.domain(d3.extent(data, (d) => d.volume));

  return {x, y, v};
}
