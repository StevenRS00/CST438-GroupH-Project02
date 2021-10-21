import React from "react";
import { BrowserRouter as ReactRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register, editUserProfile, UserWishlist, Admin, AdminEditUserProfile, ListPage} from "./components";

function Router() {
  return (
    <div>
      <ReactRouter>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Route path="/UserWishlist" exact component={() => <UserWishlist />} />
          <Route path="/list" exact component={() => <ListPage />} />
          <Route path="/Admin" exact component={() => <Admin />} />
          <Route path = "/editProfile" component = {editUserProfile}/>
          <Route path="/AdminEditUserProfile" exact component={() => <AdminEditUserProfile />} />
          <Route render={() => <Redirect to="/"/> } />
          <Navigation/>
        </Switch>
        <Footer />
      </ReactRouter>
    </div>
  );
}

export default Router;