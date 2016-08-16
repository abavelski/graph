import React from 'react'
import GraphContainer from '../components/GraphContainer';
import { connect } from 'react-redux';

import AnnotationEditToolbar from '../components/AnnotationEditToolbar';
import ButtonsToolbar from '../components/ButtonsToolbar';
import GraphToolbar from '../components/GraphToolbar';
import styles from '../components/styles';

const mapStateToProps = (state, ownProps)  => ({
        symbol : ownProps.params.symbol,
        editMode : state.chartOptions.editMode,
      });

const leftToolbar = (editMode) => editMode ? <AnnotationEditToolbar/>:<GraphToolbar/>;

const GraphPage = ({symbol, editMode}) => (
    <div style={styles.container}>
      {leftToolbar(editMode)}
      <ButtonsToolbar symbol={ symbol} />
      <GraphContainer height={600} symbol={symbol}/>
    </div>
);

export default connect(mapStateToProps)(GraphPage);
