import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//import routes
import Home from './pages/Home';
import './index.scss';

// import Sidebar from './components/Sidebar';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home}/>
      </Switch>
    </Router> 
  </> 
, document.getElementById('root'));
