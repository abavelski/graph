import React from 'react'
import GraphContainer from './GraphContainer';
import { connect } from 'react-redux';

import AnnotationEditToolbar from './AnnotationEditToolbar';
import ButtonsToolbar from './ButtonsToolbar';
import GraphToolbar from './GraphToolbar';
import styles from './styles';

const mapStateToProps = (state, ownProps)  => ({
        symbol : ownProps.params.symbol,
        editMode : state.chartOptions.editMode,
      });

const leftToolbar = (editMode) => editMode ? <AnnotationEditToolbar/>:<GraphToolbar/>;

const GraphPage = ({symbol, editMode}) => (
    <div style={styles.container}>
      {leftToolbar(editMode)}
      <ButtonsToolbar symbol={ symbol} />
      <GraphContainer width={1024} height={600} symbol={symbol}/>
    </div>
);

export default connect(mapStateToProps)(GraphPage);
