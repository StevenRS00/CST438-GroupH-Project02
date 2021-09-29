import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Login, Register} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/register" exact component={() => <Register />} />
          <Navigation/>
          {/* <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;