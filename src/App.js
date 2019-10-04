import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/signup/Signup';
import './scss/main.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component={SignUp}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
