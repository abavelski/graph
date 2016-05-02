import { CHART_TYPE_CHANGE, EDIT_MODE_TOGGLE, VOLUME_TOGGLE } from '../constants'

export function chartTypeChange(chartType) {
  return {
    type: CHART_TYPE_CHANGE,
    chartType
  }
}

export function volumeToggle() {
  return {
    type: VOLUME_TOGGLE
  }
}

export function editModeToggle() {
  return {
    type: EDIT_MODE_TOGGLE
  }
}
