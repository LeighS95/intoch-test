import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//import pages
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp';
import ThankYou from './components/pages/ThankYou';
import Fof from './components/pages/Fof';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Home" exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/thank-you" exact component={ThankYou} />
        <Route path="/505" exact component={Fof} />
      </Switch>
    </Router>
  );
}

export default App;
