import React, {useEffect, useState} from 'react';
import Task from '../Task/Task';
import axios from 'axios';
import '../AppNav/AppNav.css';

const TasksCard = () => {

    const [tasks, setTasks]= useState({});
    const key = 'loowis-293f4';

    useEffect(()=> {
        axios.get(`https://${key}.firebaseio.com/task.json`)
        .then(({ data })=> setTasks(data));
    }, [])

    return (
        <div className="card fondoA tLetra" style={{ color: 'black' }}>
            <div className="card-body">
                <h3 className="card-title" style={{ color: 'black' }}>Gente bonita</h3>
                {Object.keys(tasks).map((id)=>
                <Task 
                key={id}
                title={tasks[id].title} 
                title2={tasks[id].title2} 
                priority={tasks[id].priority}
                id={id}
                done={tasks[id].done}
                />)}
            </div>
        </div>
    )
}

export default TasksCard;