import React from 'react'
import GraphContainer from './GraphContainer';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import { areaToggle } from '../actions/areaToggle';

const styles = {
  heading: {
    textAlign: 'center'
  },
  container : {
    width : 800,
    margin: 'auto'
  },
  buttons : {
    float: 'right',
    width: 350
  },
  button : {
    fontWeight: 400,
    minWidth : 28,
    lineHeight : '28px',
    textTransform : 'none'
  },
  btnText : {
    paddingLeft : 8,
    paddingRight: 8
  }

}

const mapStateToProps = (state, ownProps)  => ({
    symbol : ownProps.params.symbol,
    areaToggled : state.areaToggle.toggled
});
const Foo = ({symbol, areaToggled, areaToggle}) => (
    <div style={styles.container}>
      <div style={styles.buttons}>
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="1d" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="1w" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="1m" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="3m" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="6m" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="YTD" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="1y" disabled = {true}/>
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="5y" />
        <FlatButton style={styles.button} labelStyle={styles.btnText} label="All" />
      </div>
      <GraphContainer width={800} height={600} symbol={symbol} areaToggled={areaToggled}/>
      <br/>
      <Toggle label="Area" toggled={areaToggled} onToggle={()=> areaToggle()} style={{width: 100}}/>
    </div>
);


export default connect(mapStateToProps, {areaToggle})(Foo);
