import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import configureStore, { history } from '../../store';
import Login from '../Login';
// import TrainRoute from '../TrainRoute/TrainRoute.container';

const store = configureStore();

const RootComponent = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
    </ConnectedRouter>
  </Provider>
);

export default RootComponent;

