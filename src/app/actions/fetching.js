import { FETCH_DATA } from '../constants'
import request from 'superagent'

export function requestData(symbol) {
  return {
    type: FETCH_DATA,
    status: 'fetching',
    symbol: symbol
  }
}

export function fetchError(err) {
  return {
    type: FETCH_DATA,
    status: 'error',
    error: err
  }
}

export function fetchOk(res) {
  return {
    type: FETCH_DATA,
    status: 'success',
    response: res
  }
}

export function fetchData(symbol) {
  return function (dispatch) {
    dispatch(requestData(symbol));
    return request.get('/api/history/'+ symbol).end((err, res) => dispatch(fetchOk(res.body)) );
  }

}
