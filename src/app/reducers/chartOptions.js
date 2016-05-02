import { CHART_TYPE_CHANGE, VOLUME_TOGGLE, EDIT_MODE_TOGGLE } from '../constants'

const initialState = {
  chartType: 'area',
  volumeToggled: true,
  editMode: false
}

export default function (state = initialState, action) {
  if(action.type === CHART_TYPE_CHANGE) {
    return {
      ...state,
      chartType: action.chartType
     }
  } else if (action.type === VOLUME_TOGGLE) {
    return {
      ...state,
      volumeToggled: !state.volumeToggled
     }
  } else if (action.type === EDIT_MODE_TOGGLE) {
    return {
      ...state,
      editMode: !state.editMode
     }
  }
  return state
}
