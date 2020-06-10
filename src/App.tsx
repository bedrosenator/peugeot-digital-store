import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { Router } from "react-router";
import './App.scss';
import Models from 'containers/Models';
import Model from 'containers/Model';
import Checkout from 'containers/Model/Checkout';
import appHistory from './appHistory';

// todo move interfaces and types into one file
// todo move routes into one file
// todo change all components to const
// todo change to < title components all titles
const App = () => {
  return (
    <div className="car-service-app">
      <Router history={appHistory}>
        <Link to="/">Home</Link>
        <Link to={`/models/1`}>Model 1</Link>
        <Link to="/models">Models</Link>
        <Switch>
          <Route component={Checkout} path="/checkout/:status" />
          <Route exact component={Model} path="/models/:id/:action" />
          <Route exact component={Models} path="/models" />
          <Route exact path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
