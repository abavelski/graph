import d3 from 'd3';

const removeOldSvg = (mount) => {
  if ( mount.hasChildNodes() ) {
      mount.removeChild( mount.childNodes[0] );
    }
}

export default function({width, height, mountPoint}) {
  if (!width) {
    width = mountPoint.offsetWidth;
  }

  let margin = {top: 20, right: 40, bottom: 30, left: 40},
      w = width - margin.left - margin.right,
      h = height - margin.top - margin.bottom;

  removeOldSvg(mountPoint);

  let svg = d3.select(mountPoint).append("svg")
      .attr("width", w + margin.left + margin.right)
      .attr("height", h + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    return { svg, w, h }

}
