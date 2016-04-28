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

export function fetchData(symbol, period) {
  return function (dispatch) {
    dispatch(requestData(symbol));
    if (!period) {
      period = '1y';
    }
    return request
        .get('/api/history/'+ symbol+'?period='+period)
        .end((err, res) => {
              let points = [];
              res.body.points.forEach(function(d) {
                points.push({
                  date : new Date(d[0]),
                  open: d[1],
                  high: d[2],
                  low: d[3],
                  close: d[4],
                  volume: d[5],
                  adjClose: d[6],
                });
              });
              dispatch(fetchOk({
                period : res.body.period,
                points : points
              })) ;
              });
  }

}
