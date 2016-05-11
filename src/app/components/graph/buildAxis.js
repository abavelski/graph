import d3 from 'd3';
import {dateTickFormater} from './formatters';

export default function({ x, y, svg, h, w, points, period }) {

    const devider = (points.length-points.length%4)/4;
    const tickFilter = (d, i) => i % devider===0 && points.length-i>devider;
    const dateFormat = dateTickFormater(period);

    let xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickSize(-h,0)
            .tickValues(x.domain().filter(tickFilter ))
            .tickFormat((i)  =>i>0?dateFormat(points[i].date):''),

        yAxis = d3.svg.axis().scale(y).ticks(5).tickSize(-w, 0).orient("right");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);


    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+w+", 0)")
        .call(yAxis);
}
