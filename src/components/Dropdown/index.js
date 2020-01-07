import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './styles.scss';

const dropdown = function Dropdown(props) {
  const [active, setActive] = useState(false);

  function makeListItem(item) {
    return (
      <li>
        <Link className="drop-item" to={item.to}>{item.name}</Link>
      </li>
    );
  }

  return (
    <li>
      <div className="parent">
        <div 
          className={active ? "title-container active" : "title-container"} 
          onClick={() => setActive(!active)}
        >
          <h1 className="title">
            {props.title}
          </h1>

          <Icon
            className={active ? "icon active" : "icon"}
            icon={faChevronDown}
          />
        </div>

        {active &&
          <div className="list-container">
            <ul>
              {props.links.map(makeListItem)}
            </ul>
          </div>
        }
      </div>
    </li>
  );
}

dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  })).isRequired,
}

export default dropdown;
