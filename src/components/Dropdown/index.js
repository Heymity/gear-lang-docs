import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const dropdown = function Dropdown(props) {
  const [active, setActive] = useState(false);

  function makeListItem(item, index) {
    return (
      <li>
        <Link className="drop-item" to={item.to}>{item.name}</Link>
      </li>
    );
  }

  return (
    <li>
      <div className="parent">
        <h1 className="title" onClick={() => setActive(!active)}>
          {props.title}
        </h1>

        {active &&
          <div className="container">
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
