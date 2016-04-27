import { AREA_TOGGLE, VOLUME_TOGGLE } from '../constants'

const initialState = {
  areaToggled: true,
  volumeToggled: true
}

export default function (state = initialState, action) {
  if(action.type === AREA_TOGGLE) {
    return {
      ...state,
      areaToggled: !state.areaToggled
     }
  } else if (action.type === VOLUME_TOGGLE) {
    return {
      ...state,
      volumeToggled: !state.volumeToggled
     }
  }
  return state
}
