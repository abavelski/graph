import d3 from 'd3';
const dateFormat = d3.time.format('%b %y');

const integerDivision = (x, y) => (x-x%y)/y

export default function({ x, y, svg, h, points }) {
    let xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickValues(x.domain().filter((d, i) => i>0 && !(i % integerDivision(points.length, 5)) ))
            .tickFormat((i)  => dateFormat(points[i].date)),
        yAxis = d3.svg.axis().scale(y).orient("left");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);
}
