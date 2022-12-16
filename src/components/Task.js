import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete, updateIsComplete }) => {
  const [complete, setComplete] = useState(isComplete);
  const buttonClass = complete ? 'tasks__item__toggle--completed' : '';
  
  const clickTask = (id) => {
    console.log('inside the clickTask function');

    updateIsComplete(id);
    setComplete(!complete);
  };


  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // onClick={() => setComplete(!complete)}
        onClick={() => clickTask(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateIsComplete: PropTypes.func.isRequired,
};

export default Task;
