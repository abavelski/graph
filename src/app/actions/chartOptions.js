import { CHART_TYPE_CHANGE, VOLUME_TOGGLE } from '../constants'

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
