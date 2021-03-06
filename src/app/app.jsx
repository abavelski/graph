import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, Redirect, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import * as reducers from './reducers';
import { Main } from './components';
import  GraphPage  from './pages/GraphPage';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
const history = syncHistoryWithStore(browserHistory, store);

const muiTheme = getMuiTheme(lightBaseTheme);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="" component={Main}>
          <Redirect from="/" to="graph/msft" />
          <Route path="graph/:symbol" component={GraphPage}/>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)
