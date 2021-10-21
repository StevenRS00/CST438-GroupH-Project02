import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register, editUserProfile, UserWishlist, Admin, AdminEditUserProfile} from "./components";

function Router() {
  return (
    <div>
      <ReactRouter>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/UserWishlist" exact component={() => <UserWishlist />} />
          <Route path="/Admin" exact component={() => <Admin />} />
          <Route path = "/editUser" component = {editUserProfile}/>
          <Route path="/AdminEditUserProfile" exact component={() => <AdminEditUserProfile />} />
          <Navigation/>
        </Switch>
        <Footer />
      </ReactRouter>
    </div>
  );
}

export default Router;