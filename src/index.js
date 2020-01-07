import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.scss';

//import routes
import Home from './pages/Home';
import Installation from './pages/Getting Started/Intallation';

//import components
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';

ReactDOM.render(
  <>
    <Router>
      <Menu/>
      <div style={{display: "flex"}}>
        <div className="sidebar">
          <Sidebar/>
        </div>

        <div className="switch">
          <Switch>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/docs/installation" component={Installation}/>
          </Switch>
        </div>
      </div>
    </Router> 
  </> 
, document.getElementById('root'));
