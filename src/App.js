import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const initialCopy = TASKS.map(task => {
    return {...task};
  });

  const [tasksList, setTasksList] = useState(initialCopy);

  const updateIsComplete = (taskId) => {
    console.log('updateIsComplete is logged');
    ///logic to update the taskList everytime the user click the task
    const newTasksList = [];
    for(const task of tasksList) {
      if(task.id !== taskId) {
        newTasksList.push(task);
      }else{
        const newTask = {
          ...task,
          isComplete: !task.isComplete,
        };
      console.log('task.isComplete', newTask.isComplete);
      newTasksList.push(newTask);
      }
    }
    setTasksList(newTasksList);

  };
  
  const deleteTask = (taskId) => {
    console.log('deleteTask is called');
    const newTasksList = [];
    for(const task of tasksList) {
      if (task.id !== taskId) {
        newTasksList.push(task);
      }
    }
    setTasksList(newTasksList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        {/* <div>{<TaskList tasks={TASKS} updateIsComplete={updateIsComplete}/>}</div> */}
        <div>{<TaskList tasks={tasksList} updateIsComplete={updateIsComplete} deleteTask={deleteTask}/>}</div>
      </main>
    </div>
  );
};

export default App;
