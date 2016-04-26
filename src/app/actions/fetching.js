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
    return request
        .get('/api/history/'+ symbol)
        .end((err, res) => {
              let data = [];
              res.body.forEach(function(d) {
                data.push({
                  date : new Date(d[0]),
                  open: d[1],
                  high: d[2],
                  low: d[3],
                  close: d[4],
                  volume: d[5],
                  adjClose: d[6],
                });
              });
              dispatch(fetchOk(data)) ;
              });
  }

}
