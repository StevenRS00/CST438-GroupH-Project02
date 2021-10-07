import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register} from "./components";
import {editUserProfile} from "./components"

function Router() {
  return (
    <div>
      <ReactRouter>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path = "/editUser" component = {editUserProfile}/>
          <Route path="/home" render={() => <div>Home</div>} />
          <Navigation/>
        </Switch>
        <Footer />
      </ReactRouter>
    </div>
  );
}

export default Router;