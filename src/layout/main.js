import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about/index";
import Contact from "../pages/contact/index";
import DetailPost from "../pages/detail-post/index";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/detail-post" component={DetailPost} />
      </Switch>
    );
  }
}

export default Main;
