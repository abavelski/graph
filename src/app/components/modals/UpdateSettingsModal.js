import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton  from 'material-ui/FlatButton';
import { connect } from 'react-redux';

import { UPDATE_SETTINGS } from '../../constants';

import {hideModal } from '../../actions/modal';


const UpdateSettingsModal = ({
    modalType,
    hideModal
  }) =>  {

  const actions = [
      <FlatButton label="Cancel" secondary={true} onTouchTap={()=>  hideModal()}  />,
      <FlatButton label="Submit" primary={true} onTouchTap={()=>   hideModal()}/>
  ];

  return <Dialog title="Update Settings" actions={actions} modal={true} open={ modalType===UPDATE_SETTINGS }>

          </Dialog>;
  }

export default connect(state=> state.modal, { hideModal })(UpdateSettingsModal);
