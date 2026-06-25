import { useEffect, useRef } from 'react'
import './Tasks.css';
export function Tasks({ tasks,deleteTask }){
    const taskList=useRef(null);
    useEffect(()=>{
        if(taskList.current){
            taskList.current.scrollTop= 
            taskList.current.scrollHeight;
        }
    },[tasks]);

    
    // tasks = [
    //     {
    //         id: 1,
    //         name: 'eat'
    //     },
    //     {
    //         id: 2,
    //         name: 'sleep'
    //     }
    // ]
    return(
        <div className='all-tasks' ref={taskList}>
            {tasks.map((task)=>{
                return(
                    <div key={task.id} className="tasks-container">
                        <p className="task-name">{task.name}</p>
                        <button className="delete-button"
                        onClick={() =>deleteTask(task.id)}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}