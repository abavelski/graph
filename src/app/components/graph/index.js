import buildFocus from './buildFocus';
import buildSvg from './buildSvg';
import buildScales from './buildScales';
import buildAxis from './buildAxis';
import drawArea from './drawArea';
import drawLine from './drawLine';
import drawVolume from './drawVolume';

export function buildGraph(options) {
  if (options.data) {
    const { width, height, symbol, data, mountPoint, areaToggled, volumeToggled } = options;

    let { svg, w, h } = buildSvg({width, height, mountPoint});

    let { x, y, v } = buildScales({ w , h, data });

    buildAxis({x, y, svg, h, data});
    if (areaToggled) {
      drawArea({svg, x, y, h, data});
    }
    drawLine({svg, x, y, data});
    if (volumeToggled) {
        drawVolume({svg, x, v, h, w, data});
    }
    buildFocus({ svg, w, h, x, y, data });
  }
}
