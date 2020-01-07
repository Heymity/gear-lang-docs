import React from 'react';
import {Link} from 'react-router-dom';

import './styles.scss';

import Dropdown from './../Dropdown';

const gettingStartedLinks = [
  {
    "name": "Installation",
    "to": "/",
  },
  {
    "name": "First App",
    "to": "/",
  },
  {
    "name": "Next Steps",
    "to": "/",
  },
]

export default function Sidebar() {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">GEAR</Link>
      </div>

      <ul className="links-container">
        <Dropdown 
          title="Getting Started"
          links={gettingStartedLinks}
        />
      </ul>
    </nav>
  );
}
