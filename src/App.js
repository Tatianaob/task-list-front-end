import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.js';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];  commeting this out

const App = () => {
  const [tasksList, setTasksList ] =useState([]);
  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  //helper function to call API
  const fetchAllTasks = () => {
    axios
    .get(URL)
    .then((res)=> {
      console.log('inside useEffect',res);
      const tasksAPIResCopy = res.data.map((task)=>{
        return {
          id: task.id,
          description: task.description,
          isComplete: task.is_complete,
          title: task.title,
        };
      });
      setTasksList(tasksAPIResCopy);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  //call useEffect to get all task- writing funcnationlity to call axios
  useEffect(fetchAllTasks,[]);


  // const initialCopy = TASKS.map(task => {
  //   return {...task};
  // });

  // const [tasksList, setTasksList] = useState(initialCopy);

  const updateIsComplete = (taskId, isComplete) => {
    console.log('updateIsComplete is logged');
    ///logic to update the taskList everytime the user click the task    
    
    let status = '';
    // if the task.is_complete is false => call status = mark_complete request
    //if the task.is_complete is true => call status_mark_incomplete request
    if (isComplete) {
      status = 'mark_incomplete';
    } else {status = 'mark_complete';}

    ///if task.isComplete = false ==>call mark_complete else call mar_incomplete
    const newTasksList = [];
    axios.patch(`${URL}/${taskId}/${status}`)
    .then((res) => {
      for(const task of tasksList) {
        if(task.id !== taskId) {
          newTasksList.push(task);}
        else{
          const newTask = {
            ...task,
            isComplete: !task.isComplete
          };
        console.log('task.isComplete', newTask);
        console.log(res);
        newTasksList.push(newTask);
        }
      }
      setTasksList(newTasksList);
  })
    .catch((err) => {
      console.log(err);
    });
  };

  
  const deleteTask = (taskId) => {
    console.log('deleteTask is called');
    axios.delete(`${URL}/${taskId}`)
    .then(() => {
      const newTasksList = [];
      for(const task of tasksList) {
        if (task.id !== taskId) {
          newTasksList.push(task);
        }
      }
      setTasksList(newTasksList);
    })
    .catch((err) => {
      console.log(err);
    });

  };

  //create a callback function to add new Task
  const addTask = (newTaskinfo) => {
    console.log('addTask is called here');
    axios.post(URL, newTaskinfo)
    .then((response) => {
      console.log(response);
      fetchAllTasks();
    })
    .catch((error) => {
      console.log(error);
    });
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        {/* <div>{<TaskList tasks={TASKS} updateIsComplete={updateIsComplete}/>}</div> */}
        <div>
        <TaskList 
        tasks={tasksList} 
        updateIsComplete={updateIsComplete} 
        deleteTask={deleteTask}          
        />
        <NewTaskForm addTaskCallbackFunc={addTask} />
        
        </div>
      </main>
    </div>
  );
};

export default App;
