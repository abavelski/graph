import React from 'react'

import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import HorizontalLine from 'material-ui/svg-icons/editor/border-horizontal';
import VerticalLine from 'material-ui/svg-icons/editor/border-vertical';
import TrendLine from 'material-ui/svg-icons/action/trending-up';
import Comment from 'material-ui/svg-icons/communication/comment';
import Done from 'material-ui/svg-icons/action/Done';
import Undo from 'material-ui/svg-icons/content/Undo';

import { editModeToggle } from '../actions/chartOptions';
import styles from './styles';

const AnnotationEditToolbar = ({ editModeToggle}) => (
    <div style={styles.ticker}>
      <IconButton tooltip="Horizontal line" ><HorizontalLine /></IconButton>
      <IconButton tooltip="Vertical line" ><VerticalLine /></IconButton>
      <IconButton tooltip="Trend line" ><TrendLine /></IconButton>
      <IconButton tooltip="Comment" ><Comment /></IconButton>
      <IconButton tooltip="Undo"><Undo /></IconButton>
      <IconButton tooltip="Done" onTouchTap={()=>editModeToggle()}><Done /></IconButton>
    </div>);

export default connect( null, { editModeToggle })(AnnotationEditToolbar);
