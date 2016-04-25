import d3 from 'd3';
import buildFocus from './buildFocus';
import buildSvg from './buildSvg';
import buildScales from './buildScales';
import buildAxis from './buildAxis';
import drawArea from './drawArea';
import drawLine from './drawLine';

export function buildGraph(options) {
  if (options.data) {

    const { width, height, symbol, data, mountPoint } = options;

    let { svg, w, h } = buildSvg({width, height, mountPoint});

    let { x, y } = buildScales({ w , h, data });

    buildAxis({x, y, svg, h});
    drawArea({svg, x, y, h, data});
    drawLine({svg, x, y, data});
    buildFocus({ svg, w, h, x, y, data });
  }
}
