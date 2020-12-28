import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/App.css';

import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "./NotFound";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/exercises" component={Exercises} />
      <Route exact path="/exercises/new" component={ExerciseNew} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App;
