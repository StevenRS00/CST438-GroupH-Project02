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
          <Route path="/userWishlist" exact component={() => <UserWishlist />} />
          <Route path="/list" exact component={() => <ListPage />} />
          <Route path="/admin" exact component={() => <Admin />} />
          <Route path="/editProfile" exact component = {editUserProfile}/>
          <Route path="/adminEditUserProfile" exact component={() => <AdminEditUserProfile />} />
          <Route render={() => <Redirect to="/"/> } />
          <Navigation/>
        </Switch>
        <Footer />
      </ReactRouter>
    </div>
  );
}

export default Router;