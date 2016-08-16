import React from 'react'

import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import EditBtn from 'material-ui/svg-icons/content/create';
import SettingsBtn from 'material-ui/svg-icons/action/settings';
import {UPDATE_SETTINGS} from '../constants';

import { editModeToggle, settingsDialogToggle } from '../actions/chartOptions';
import { showModal } from '../actions/modal';
import styles from './styles';

const GraphToolbar = ({ editModeToggle, showModal }) => (
  <div style={styles.ticker}>
      <IconButton tooltip="Add annotations" onTouchTap={()=>editModeToggle()} ><EditBtn /></IconButton>
      <IconButton tooltip="Settings" onTouchTap={()=>showModal(UPDATE_SETTINGS)} ><SettingsBtn /></IconButton>
  </div>);

export default connect( null, { editModeToggle, settingsDialogToggle, showModal })(GraphToolbar);
