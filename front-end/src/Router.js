import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch, Redirect} from "react-router-dom";
import { Navigation, Footer, Home, Login, Register, editUserProfile, UserWishlist} from "./components";

function Router() {
  return (
    <div>
      <ReactRouter>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/UserWishlist" exact component={() => <UserWishlist />} />
          <Route path = "/editUser" component = {editUserProfile}/>
          <Route render={() => <Redirect to="/"/> } />
          <Navigation/>
        </Switch>
        <Footer />
      </ReactRouter>
    </div>
  );
}

export default Router;