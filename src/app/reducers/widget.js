import { TOGGLE } from '../constants'

const initialState = {
  minimized: false
}

export default function toggle(state = initialState, action) {
  if(action.type === TOGGLE) {
    return { minimized: !state.minimized }
  }
  return state
}
