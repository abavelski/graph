import { CHART_TYPE_CHANGE, VOLUME_TOGGLE, EDIT_MODE_TOGGLE, CHART_RESIZE, SETTINGS_TOGGLE } from '../constants'

const initialState = {
  chartType: 'area',
  volumeToggled: true,
  editMode: false,
  settingsOpen: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case CHART_TYPE_CHANGE :
      return {
        ...state,
        chartType: action.chartType
      }
    case VOLUME_TOGGLE:
      return {
        ...state,
        volumeToggled: !state.volumeToggled
      }
    case EDIT_MODE_TOGGLE:
      return {
        ...state,
        editMode: !state.editMode
      }
    case CHART_RESIZE:
        return {
          ...state,
          width : action.width
        }

    default:
    return state;
  }


}
