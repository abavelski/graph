import React from 'react'
import GraphContainer from './GraphContainer'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps)  => ({ symbol : ownProps.params.symbol });

const Foo = ({symbol}) => (
  <GraphContainer width={800} height={600} symbol={symbol}/>
);


export default connect(mapStateToProps)(Foo);
