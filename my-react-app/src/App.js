import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <h1>React Routing Example</h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>This is Home Page</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>This is About Page</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>This is Dashboard</h2>
    </div>
  );
}

export default BasicExample;
