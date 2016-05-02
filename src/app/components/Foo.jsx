import React from 'react'
import GraphContainer from './GraphContainer';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import EditBtn from 'material-ui/svg-icons/content/create';
import Mail from 'material-ui/svg-icons/content/mail';


import { chartTypeChange, volumeToggle, editModeToggle } from '../actions/chartOptions';
import {fetchData } from '../actions/fetching';

const styles = {
  volume : {
    display: 'inline-block',
    fontSize: '15px',
    height: '48px',
    outline: 'none',
    position: 'relative',
    width: 'auto'
  },
  heading: {
    textAlign: 'center'
  },
  container : {
    width : 1024,
    margin: 'auto'
  },
  buttons : {
    float: 'right',
    width: 500
  },
  ticker : {
    float: 'left',
    width: 100,
    marginLeft: '15px'
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

const buttons = ['1m', '3m', '6m', 'ytd', '1y', '5y', 'all'];
const mapStateToProps = (state, ownProps)  => ({
        symbol : ownProps.params.symbol,
        chartType : state.chartOptions.chartType,
        volumeToggled : state.chartOptions.volumeToggled,
        editMode : state.chartOptions.editMode,
        period : state.fetching.data.period
      });

const edit = (editMode, editModeToggle) => {
  if (editMode) {
    return <IconButton tooltip="Mail" ><Mail /></IconButton>
  } else {
    return <IconButton tooltip="Edit annotations" onTouchTap={()=>editModeToggle()} ><EditBtn /></IconButton>
  }

};

const Foo = ({
    symbol,
    period,
    chartType,
    volumeToggled,
    editMode,
    chartTypeChange,
    volumeToggle,
    editModeToggle,
    fetchData
  }) => (
    <div style={styles.container}>
      <div style={styles.ticker}>
        {edit(editMode, editModeToggle)}
      </div>
      <div style={styles.buttons}>
        <Toggle label="Volume" toggled={volumeToggled} onToggle={()=> volumeToggle()} style={styles.volume}/>
        <DropDownMenu value={chartType} onChange={(e, i, v)=>chartTypeChange(v)}  >
          <MenuItem value="area" primaryText="Area" />
          <MenuItem value="line" primaryText="Line" />
          <MenuItem value="bars" primaryText="Bars" />
          <MenuItem value="candlesticks" primaryText="Сandlesticks" />
        </DropDownMenu>

        { buttons.map((btn)=>
          <FlatButton
            key={btn}
            hoverColor="rgba(0, 0, 0, 0)"
            style={styles.button}
            labelStyle={styles.btnText}
            label={btn}
            onTouchTap={()=>fetchData(symbol, btn)}
            disabled={btn===period} />
        )}
      </div>
      <GraphContainer width={1024} height={600} symbol={symbol}/>

    </div>
);


export default connect(mapStateToProps, { chartTypeChange, volumeToggle, editModeToggle, fetchData })(Foo);
