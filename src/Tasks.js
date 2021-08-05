import React, {useState} from 'react'

function Tasks({tasks, deleteTask, updateTask}) {
    let [edit, setEdit] = useState(false);
    let [editTask, setEditTask] = useState('');

    const onEditChange = (e) => {
        setEditTask(e.target.value)
    }

    const submitEdit = (taskID, editTask) => {
        setEdit(false);
        updateTask(taskID, editTask)
    }


    return (
        <div>
            <h1 className="task-title">Tasks</h1>
            {
                tasks.map((task) => (
                    <div className="task">
                    
                    {
                        edit === task.id ? <input type="text" value={editTask} placeholder="" onChange={onEditChange}/>
                            :<h3>{task.task}</h3>
                    }

                    <div className="buttons-container">

                    {
                        edit === task.id? <button className="submit-btn" onClick={() => submitEdit(task.id, editTask)}>Submit</button>
                            :<button className="edit-btn" onClick={() => setEdit(task.id)}>Edit</button>
                    }
                        <h1 onClick={() => deleteTask(task.id)}>+</h1>   
                    </div>

                    </div>
                ))
            }
        </div>
    )
}

export default Tasks
