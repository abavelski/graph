import React from 'react'

import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import styles from './styles';

import { chartTypeChange, volumeToggle } from '../actions/chartOptions';
import { fetchData } from '../actions/fetching';

const chartTypes = ['area', 'line', 'bars', 'candlesticks'];
const buttons = ['1m', '3m', '6m', 'ytd', '1y', '5y', 'all'];

const mapStateToProps = (state)  => ({
        chartType : state.chartOptions.chartType,
        volumeToggled : state.chartOptions.volumeToggled,
        period : state.fetching.data.period
      });

const ButtonsToolbar = ({
    symbol,
    period,
    chartType,
    volumeToggled,
    chartTypeChange,
    volumeToggle,
    fetchData
  }) => (
      <div style={styles.buttons}>
        <Toggle label="Volume" toggled={volumeToggled} onToggle={()=> volumeToggle()} style={styles.volume}/>
        <DropDownMenu value={chartType} onChange={(e, i, v)=>chartTypeChange(v)} >
          { chartTypes.map( type => <MenuItem key={type} value={type} primaryText={type} /> )}
        </DropDownMenu>

        { buttons.map( btn =>
          <FlatButton
            key={btn}
            hoverColor="white"
            style={styles.button}
            labelStyle={styles.btnText}
            label={btn}
            onTouchTap={()=>fetchData(symbol, btn)}
            disabled={btn===period} />
        )}
      </div>);


export default connect(mapStateToProps, { chartTypeChange, volumeToggle, fetchData })(ButtonsToolbar);
