//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ClockRoute from "./routes/ClockRoute";
import UserRoute from "./routes/UserRoute";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/2/clock">Clock</Link>
            </li>
            <li>
              <Link to="/1/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/:id/clock">
            <ClockRoute/>
          </Route>
          <Route path="/:id/users">
            <UserRoute />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Sebastian Gonzalo Vives Faus | A01025211</p>
    </div>
    
  )
}