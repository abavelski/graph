import { FETCH_DATA } from '../constants'

const initialState = {
  isFetching: false
}

export default function(state = initialState, action) {
  if(action.type === FETCH_DATA && action.status==='fetching') {
    return {
      isFetching: true
     }
  } else if (action.type === FETCH_DATA && action.status==='error') {
    return {
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
