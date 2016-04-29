import focus from './focus';
import buildSvg from './buildSvg';
import buildScales from './buildScales';
import buildAxis from './buildAxis';
import drawArea from './drawArea';
import drawLine from './drawLine';
import drawVolume from './drawVolume';
import drawOhlc from './drawOhlc';
import drawCandlesticks from './drawCandlesticks';

export function buildGraph(options, mountPoint) {

    const { width, height, symbol, points, chartType, volumeToggled } = options;

    let { svg, w, h } = buildSvg({width, height, mountPoint});

    let { x, y, v } = buildScales({ w , h, points });

    buildAxis({x, y, svg, h, points});
    if (chartType==='candlesticks') {
      drawCandlesticks({svg, x, y, w, h, points});
    } else if (chartType==='bars') {
      drawOhlc({svg, x, y, w, h, points});
    } else if (chartType==='area') {
      drawArea({svg, x, y, h, points});
      drawLine({svg, x, y, points});
    } else if (chartType==='line') {
      drawLine({svg, x, y, points});
    }

    if (volumeToggled) {
        drawVolume({svg, x, v, h, w, points});
    }
    focus({ svg, w, h, x, y, points });
}
