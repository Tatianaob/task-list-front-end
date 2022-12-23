import { useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';

//implementation by Minh

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
        <label htmlFor="title">New Task Title</label>
        <input 
        type="text" 
        id="title" 
        name="title" 
        value={formData.title}
        onChange={handleChange}
        ></input>
  
        <label htmlFor="description"> New Task Description</label>
        <input 
        type="text" 
        id="description" 
        name="description" 
        value={formData.description}
        onChange={handleChange}
        ></input>
  
  
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



  

// const NewTaskForm = (props) => {
//     const [formFields, setFormFields] = useState({
//         title: 'Finishing Task List',
//         description: 'So much fun',
//     });
//     const onHandleChange = (event) => {
//         setFormFields(
//             ...formFields,
//         [event.target.name] = event.target.value);
//         }

//     const onFormSubmit = (event) => {
//         event.preventDefault();

//         props.addTaskCallback({
//             titleData: formFields.title,
//             descriptionData: formFields.description
//         });


//     return (
//         <div>
//         <form 
//             onSubmit={onFormSubmit}>
//                 <label htmlFor="title">New Task:</label>
//                 <input name="title"
//                        value={formFields.title}
//                        onChange={onHandleChange}></input>
//                 <label htmlFor="description">Description:</label>
//                 <input name="description"
//                         value={formFields.description}
//                         onChange={onHandleChange}></input>
//             <input
//                 type="submit"
//                 value="Add Task"></input>
//         </form>
//         </div>
//     );
//     };

// NewTaskForm.PropTypes ={
//     addTaskCallback: PropTypes.func.isRequired,
// };

// export default NewTaskForm;
