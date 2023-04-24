import React, { useState, useEffect } from 'react';
import AddTask from "./AddTask";
import TaskContainer from "./TaskContainer";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);

  const getApiData = async() =>{
    const response = await axios.get('/getTasks')
    setTasks(response.data)
  }

  useEffect(()=>{
    getApiData();
  }, [])


  //Adding task
  const handleAddClick = async (task) =>{
    //Generating random id
    const id = uuidv4();
    //Creating New Task Object
    const taskData={
      taskid: id,
      title:task, 
      completed:false
    }
    //Sending the task object to backend - and backend is storing
    const response = await axios.post('/addtask', taskData)
    //On success - we are getting a status of 201
    if(response.status === 201){
      //Storing task in our state
      setTasks([...tasks, taskData]);
    }
  }

  //Changing the status complete(false) to  comlpleted(true)
  const handleDone = async (id)=>{
    const response = await axios.post('/updatetask', {id, 'completed': true});

    if (response.status===200){
      const data = tasks.map(task=>{
        if(task.taskid===id){
          return{...task, completed: true}
        }
        return task
      })  
      setTasks(data)
    }
  }

  //Changing the status complete(true) to  comlpleted(false)
  const handleUndo = async (id)=>{
    const response = await axios.post('/updatetask', {id, 'completed': false});
    if (response.status===200){
      const data = tasks.map(task=>{
        if(task.taskid===id){
          return{...task, completed:false}
        }
        return task
      })  
      setTasks(data)
    }
  }

  //Delete task
  const handleDelete = async(id) =>{
    const response = await axios.post(`/deletetask/${id}`);
    if (response.status===200){
      const data = tasks.filter(task=>task.taskid!==id)
      setTasks(data)
    }
  }

  //Update task title
  const handleSave = async(newTask, id)=>{
    const response = await axios.post('/updatetask', {id, 'title': newTask});
    if(response.status===200){
      const data = tasks.map(task=>{
        if(task.taskid===id){
          return{...task, title: newTask}
        }
        return task
      })  
      setTasks(data)
    }
  }

  return (
    <>
      <AddTask handleClick={handleAddClick} />
      <TaskContainer
        tasksList={tasks.filter((task) => task.completed === false)}
        pendingStatus={true}
        doneTask={handleDone}
        saveTask={handleSave}
      />
      <TaskContainer
        tasksList={tasks.filter((task) => task.completed === true)}
        undoTask={handleUndo}
        deleteTask={handleDelete}
      />
    </>
  );
};

export default Dashboard;
