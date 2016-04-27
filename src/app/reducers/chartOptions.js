import { CHART_TYPE_CHANGE, VOLUME_TOGGLE } from '../constants'

const initialState = {
  chartType: 'area',
  volumeToggled: true
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
  }
  return state
}
