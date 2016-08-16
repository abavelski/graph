  import React from 'react';
  import d3 from 'd3';
  import { connect } from 'react-redux';
  import {fetchData } from '../actions/fetching'
  import {chartResize } from '../actions/chartOptions'
  import { buildGraph } from './graph'

  class GraphContainer extends React.Component {

    componentDidMount() {
      const { fetchData, chartResize, symbol } = this.props;
      fetchData(symbol);
      window.addEventListener('resize', ()=> chartResize(this.refs.mountPoint.offsetWidth));
    }

    componentWillReceiveProps(props) {
      if (props.points) {
          buildGraph(props, this.refs.mountPoint);
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      return false;
    }

    render() {
      const style = {
        height: this.props.height,
        border: 'none',
        font: '10px sans-serif',
        margin : 'auto'
      };
      return <div style={style} ref="mountPoint" />;
    }
  }

  export default connect(
    state => ({
      isFetching: state.fetching.isFetching,
      points: state.fetching.data.points,
      chartType : state.chartOptions.chartType,
      volumeToggled : state.chartOptions.volumeToggled,
      period : state.fetching.data.period,
      width: state.chartOptions.width
    }),
    { fetchData, chartResize }
  )(GraphContainer);
