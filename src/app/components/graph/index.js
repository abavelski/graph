import buildFocus from './buildFocus';
import buildSvg from './buildSvg';
import buildScales from './buildScales';
import buildAxis from './buildAxis';
import drawArea from './drawArea';
import drawLine from './drawLine';
import drawVolume from './drawVolume';
import drawOhlc from './drawOhlc';
import drawCandlesticks from './drawCandlesticks';

export function buildGraph(options) {
  if (options.data) {
    const { width, height, symbol, data, mountPoint, chartType, volumeToggled } = options;
    //console.log('building graph ', chartType);
    let { svg, w, h } = buildSvg({width, height, mountPoint});

    let { x, y, v } = buildScales({ w , h, data });

    buildAxis({x, y, svg, h, data});
    if (chartType==='candlesticks') {
      drawCandlesticks({svg, x, y, w, h, data});
    } else if (chartType==='bars') {
      drawOhlc({svg, x, y, w, h, data});
    } else if (chartType==='area') {
      drawArea({svg, x, y, h, data});
      drawLine({svg, x, y, data});
    } else if (chartType==='line') {
      drawLine({svg, x, y, data});
    }

    if (volumeToggled) {
        drawVolume({svg, x, v, h, w, data});
    }
    buildFocus({ svg, w, h, x, y, data });

  }
}
