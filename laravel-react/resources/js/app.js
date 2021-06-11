import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/organisms/Nav";
import About from "./components/organisms/About";
import User from "./components/organisms/User";
import Top from "./components/organisms/Top";

function App() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/about" component={About} />
                <Route path="/user" component={User} />
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));