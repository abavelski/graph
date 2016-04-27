import { AREA_TOGGLE, VOLUME_TOGGLE } from '../constants'

export function areaToggle() {
  return {
    type: AREA_TOGGLE
  }
}

export function volumeToggle() {
  return {
    type: VOLUME_TOGGLE
  }
}
