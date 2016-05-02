import d3 from 'd3';

export function formatVolume(v) {
  if (v>1000000) {
    return (v/1000000).toFixed(2) + 'M';
  }
  if (v>1000) {
    return (v/1000).toFixed(2) + 'K';
  }
  return v;
}

export function dateTickFormater(period) {
  return d3.time.format("%d-%b-%y");
}
