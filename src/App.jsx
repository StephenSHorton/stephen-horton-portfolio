import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

import "./styles/Main.scss";
import Projects from "./components/layout/Projects";
import ContactMe from "./components/layout/ContactMe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactMe} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
