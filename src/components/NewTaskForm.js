import React from 'react';
import { useState } from 'react';
import "./NewTaskForm.css"
import PropTypes from 'prop-types';

const INITIAL_FORM_DATA = {
  title: 'Wave 4 Completion',
  description: 'Creating Post request in React',
  isComplete: false,
};

const NewTaskForm = (props) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleChange = (e) => {
    console.log('Handle Change Called');
    console.log(e);

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    props.addTaskCallbackFunc(formData);
    
  };


  return (
    <div className="forms">
    <form onSubmit={handleNewTaskSubmit}>
    <h3> Submit New Task</h3>
      <label htmlFor="title">Task Title</label>
      <input 
      type="text" 
      id="title" 
      name="title" 
      value={formData.title}
      onChange={handleChange}
      ></input>

      <label htmlFor="description">Task Description</label>
      <input 
      type="text" 
      id="description" 
      name="description" 
      value={formData.description}
      onChange={handleChange}
      ></input>

      {/* <label htmlFor="isComplete">Task Status (enter true or false)</label> */}
      {/* <input 
      type="text" 
      id="isComplete" 
      name="isComplete" 
      value={formData.isComplete}
      onChange={handleChange}
      ></input> */}

      <input
      type='submit'
      value='Add Task'
      />


    </form>
    </div>
  );
};

NewTaskForm.propTypes = {
  addTaskCallbackFunc: PropTypes.func.isRequired
};
export default NewTaskForm;