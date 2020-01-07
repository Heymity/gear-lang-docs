import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles.scss';

import Dropdown from './../Dropdown';

//import content
import gettingStartedLinks from './../../content/Getting Started';
import guidesLinks from './../../content/Guides';

export default function Sidebar() {
  return (
    <nav className="nav">
      <Switch>
        <Route path="/" component={() => {
          return (
            <ul className="links-container">
              <Dropdown 
                title="Getting Started"
                links={gettingStartedLinks}
              />
      
              <Dropdown 
                title="Guides"
                links={guidesLinks}
              />
            </ul>
          );
        }}/>
        
        <Route path="/docs" component={() => {
          return (
            <ul className="links-container">
              <Dropdown 
                title="Getting Started"
                links={gettingStartedLinks}
              />
      
              <Dropdown 
                title="Guides"
                links={guidesLinks}
              />
            </ul>
          );
        }}/>

        <Route path="/api" component={() => {
          return (
            <p>Not done</p>
          );
        }}/>
      </Switch>
    </nav>
  );
}
