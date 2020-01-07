import React, {useState} from 'react';
import {Link} from 'react-router-dom';
// import {FontAwesomeIcon as Icon} from '@fortawesome/react-fontawesome'
// import {faSearch} from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

import MenuItem from './Menu Item';

import logo from './../../assets/logo.png';

export default function Menu() {
  const [actives, setActives] = useState([
    true,
    false,
    false,
  ]);

  function handleMenuItemClick(index) {
    let _tmp = [];

    for(var i = 0; i < actives.length; i++) {
      _tmp.push(i === index ? true : false);
    }

    setActives(_tmp);
  }

  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>

        <Link to="/">
          GEAR
        </Link>
      </div>

      <ul className="menu-links">
        <MenuItem
          name="Docs"
          to="/docs"
          active={actives[0]}
          onClick={() => handleMenuItemClick(0)}
        />

        <MenuItem
          name="API"
          to="/api"
          active={actives[1]}
          onClick={() => handleMenuItemClick(1)}
        />

        <MenuItem
          name="Changelog"
          to="/changelog"
          active={actives[2]}
          onClick={() => handleMenuItemClick(2)}
        />

        {/* <div className="searchBar">
          <div className="search-parent">
            <Icon icon={faSearch} className="search-icon"/>
            <input
              type="text"
              placeholder="Search"
            />
          </div>
        </div> */}

        <li>
          <a
            className="plain"
            href="https://github.com/kimon0202/GearLanguage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
