import d3 from 'd3';
import {formatVolume, dateTickFormater} from '../formatters';

export default function({ focus, w , h, x, y, points, period}) {

  let dateFormatPointer = dateTickFormater(period);

  return function() {
      let domain = x.domain();
      let i = domain[d3.bisect(x.range(), d3.mouse(this)[0])];
      let d = points[i];

      focus.select("circle.y")
        .attr("transform", "translate(" + x(i) + "," + y(d.close) + ")");

      focus.select("line.y")
        .attr("transform","translate(" + x(i) + ",0)");

      focus.select("line.x")
        .attr("transform", "translate(0,"+ y(d.close) + ")");

      focus.select("text.date-pointer")
        .attr("transform", "translate(" + (x(i)-22) + ","+(h+10)+")");

      focus.select("text.date-pointer")
        .text(dateFormatPointer(d.date));

      focus.select("rect.date-pointer-background")
        .attr("transform", "translate(" + (x(i)-24) + ","+(h+1)+")");

      focus.select("text.open")
        .text(d.open);

      focus.select("text.close")
        .text(d.close);

      focus.select("text.high")
        .text(d.high);

      focus.select("text.low")
        .text(d.low);

      focus.select("text.volume")
        .text(formatVolume(d.volume));

      }

}
