import {
  CHART_TYPE_CHANGE,
  EDIT_MODE_TOGGLE,
  VOLUME_TOGGLE,
  CHART_RESIZE,
  SETTINGS_TOGGLE
} from '../constants'

export const chartTypeChange = (chartType) => ({
    type: CHART_TYPE_CHANGE,
    chartType
  });

export const chartResize = (width) => ({
    type: CHART_RESIZE,
    width
  });

export const volumeToggle = () => ({
    type: VOLUME_TOGGLE
  });

export const editModeToggle = () => ({
    type: EDIT_MODE_TOGGLE
});
