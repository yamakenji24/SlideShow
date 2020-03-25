import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LinkStart from './animations/LinkStart';
import App from './containers/App';

export default class Start extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/logins/show" component={LinkStart} />
            <Route path="/slides" component={App} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
