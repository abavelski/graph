import React from 'react';
import { connect } from 'react-redux';
import { UPDATE_SETTINGS } from '../../constants';
import UpdateSettingsModal from './UpdateSettingsModal';

const MODAL_COMPONENTS = {
  UPDATE_SETTINGS: UpdateSettingsModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal { ... modalProps } />
}

export default connect( state => state.modal)(ModalRoot)
