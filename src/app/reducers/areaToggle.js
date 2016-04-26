import { AREA_TOGGLE } from '../constants'

const initialState = {
  toggled: true
}

export default function (state = initialState, action) {
  if(action.type === AREA_TOGGLE) {
    return {
      toggled: !state.toggled
     }
  }
  return state
}
