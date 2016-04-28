import { FETCH_DATA } from '../constants'

const initialState = {
  isFetching: false,
  data: {
    series : [],
    period : '1y'
  }
}

export default function(state = initialState, action) {
  if(action.type === FETCH_DATA && action.status==='fetching') {
    return {
      ...state,
      isFetching: true
     }
  } else if (action.type === FETCH_DATA && action.status==='error') {
    return {
      ...state,
      isFetching: false,
      error : action.error
    }
  } else if (action.type === FETCH_DATA && action.status==='success') {
    return {
      isFetching: false,
      data: action.response
    }
  }
  return state
}
