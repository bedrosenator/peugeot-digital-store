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
        <Switch>
          <Route component={Checkout} path="/checkout/:status" />
          <Route exact component={Model} path="/models/:id/:step" />
          <Route exact component={Models} path="/models" />
          <Route exact path="/"><Link to="/models">CHOOSE YOUR NEW CAR</Link></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
