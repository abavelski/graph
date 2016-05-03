import React from 'react'

import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import EditBtn from 'material-ui/svg-icons/content/create';

import { editModeToggle } from '../actions/chartOptions';
import styles from './styles';

const GraphToolbar = ({ editModeToggle}) => (
  <div style={styles.ticker}>
      <IconButton tooltip="Add annotations" onTouchTap={()=>editModeToggle()} ><EditBtn /></IconButton>
  </div>);

export default connect( null, { editModeToggle })(GraphToolbar);
