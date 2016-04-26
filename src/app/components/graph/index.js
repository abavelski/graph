import buildFocus from './buildFocus';
import buildSvg from './buildSvg';
import buildScales from './buildScales';
import buildAxis from './buildAxis';
import drawArea from './drawArea';
import drawLine from './drawLine';
import drawVolume from './drawVolume';

export function buildGraph(options) {
  if (options.data) {
    const { width, height, symbol, data, mountPoint, areaToggled } = options;

    let { svg, w, h } = buildSvg({width, height, mountPoint});

    let { x, y, v } = buildScales({ w , h, data });

    buildAxis({x, y, svg, h});
    if (areaToggled) {
      drawArea({svg, x, y, h, data});
    }
    drawLine({svg, x, y, data});
    drawVolume({svg, x, v, h, data});
    buildFocus({ svg, w, h, x, y, data });
  }
}
