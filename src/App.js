import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './scss/main.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
