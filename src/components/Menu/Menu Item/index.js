import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './../styles.scss';

const item = function MenuItem(props) {
  return (
    <li 
      className={props.active ? "menu-item active" : "menu-item"}
      onClick={props.onClick}
    >
      <Link
        className="plain"
        to={props.to}
      >
        {props.name}
      </Link>
    </li>
  );
}

item.propTypes = {
  name: PropTypes.string,
  to: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func
}

export default item;
