import React, {Component} from 'react';
import { Provider} from 'react-redux'; 

import App from './containers/App';
import LinkStart from './components/LinkStart';
import ChangePath from './ChangePath';
// Actions
import * as CommentAction from './actions';

// Store
import configureStore from './store';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <LinkStart />
        <Router>
          <ChangePath>
            <Route component={
              ({match}) =>
              <div>
                <Route exact path="/slides" component={App}/>
              </div>
            }/>
          </ChangePath>
        </Router>
      </Provider>
    )
  }
}
