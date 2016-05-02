import d3 from 'd3';
import {dateTickFormater} from './formatters';

const integerDivision = (x, y) => (x-x%y)/y

export default function({ x, y, svg, h, w, points, period }) {
    const tickFilter = (d, i) => i>0 && !(i % integerDivision(points.length, 5));
    const dateFormat = dateTickFormater(period);

    let xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickSize(-h,0)
            .tickValues(x.domain().filter(tickFilter ))
            .tickFormat((i)  => dateFormat(points[i].date)),

        yAxis = d3.svg.axis().scale(y).ticks(5).tickSize(-w, 0).orient("left");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);


    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
}
