import { SHOW_MODAL, HIDE_MODAL } from '../constants';

const initialState = {
  modalType: null,
  modalProps: {}
}

export default function(state = initialState, action) {
  if (action.type===SHOW_MODAL) {
    return {
      ... state,
      modalType: action.modalType,
      modalProps: action.modalProps
    }
  } else if (action.type===HIDE_MODAL) {
    return initialState;
  } else {
    return state;
  }
}
