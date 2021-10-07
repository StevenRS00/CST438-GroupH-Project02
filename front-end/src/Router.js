import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register} from "./components";

function Router() {
  return (
    <div>
      <ReactRouter>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/AboutUs" exact component={() => <aboutUs />} />
          <Route path="/Description" exact component={() => <description />} />
          <Navigation/>
          {/* <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} /> */}
        </Switch>
        <Footer />
      </ReactRouter>
    </div>
  );
}

export default Router;