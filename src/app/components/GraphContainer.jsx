  import React from 'react';
  import d3 from 'd3';
  import { connect } from 'react-redux';
  import {fetchData } from '../actions/fetching'
  import { buildGraph } from './graph'

  class GraphContainer extends React.Component {

    componentDidMount() {
      const { fetchData, symbol } = this.props;
      fetchData(symbol);
    }

    componentWillReceiveProps(props) {
      console.log('componentWillReceiveProps', props);
      const { width, height, symbol, points, chartType, volumeToggled } = props;
      if (points) {
          buildGraph({
            chartType,
            volumeToggled,
            width,
            height,
            symbol,
            points,
            mountPoint: this.refs.mountPoint
          });
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate', nextProps, nextState);
      return false;
    }

    render() {
      const { width, height } = this.props;
      const style = {
        width,
        height,
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
      points: state.fetching.data.points
    }),
    { fetchData }
  )(GraphContainer);
