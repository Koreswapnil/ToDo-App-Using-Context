import React, {useEffect, useState} from 'react';


const AddTask = ({handleClick}) =>{

    const [task, setTask]= useState('');
    const [showError, setShowError] = useState(false)


   const addTaskClick =()=>{
    if (task){
        handleClick(task);
        setTask('');
    }else{
        setShowError(true)
    }
   }

   useEffect(()=>{
    setTimeout(()=>{
        setShowError(false)
    }, 3000)
   }, [showError])
    
    return(
        <>
        <div className='add-task'>
            <input className='add-task-input' placeholder="Add task here" value={task} onChange={(event)=>setTask(event.target.value)} />
            <button className='btn'onClick={addTaskClick}>Add Task</button> 
        </div>
        {showError && <p style={{color:'yellow'}}>Please add a task!!</p>}
        </>
)
}

export default AddTask;