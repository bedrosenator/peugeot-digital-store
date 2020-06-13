import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { Router } from "react-router";
import Models from 'containers/Models';
import Model from 'containers/Model';
import Checkout from 'containers/Model/Checkout';
import appHistory from './appHistory';

const AppRouter = () => {
  return (
    <Router history={appHistory}>
      <Switch>
        <Route component={Checkout} path="/checkout/:status" />
        <Route exact component={Model} path="/models/:id/:step" />
        <Route exact component={Models} path="/models" />
        <Route exact path="/"><Link to="/models">CHOOSE YOUR NEW CAR</Link></Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
