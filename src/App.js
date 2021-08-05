import {useState} from 'react'
import Tasks from './Tasks';
import { v4 as uuidv4 } from 'uuid';

function App() {
	let [tasks, setTasks] = useState([]);
	let [input, setInput] = useState('');

	const handleInputChange = (e) => {
		setInput(e.target.value);
	}

	const createTask = () => {
		if(input){
			let newTasks = tasks.slice();
			newTasks.push({task:input, id:uuidv4()})
			setTasks(newTasks)
		}
	}

	const deleteTask = (id) => {
		let newArr = tasks.filter((item) => item.id !== id);
		setTasks(newArr);
	}

	const updateTask = (id, editTask) => {
		let newTasks = tasks.slice();
		newTasks.forEach((task) => {
			if(task.id === id) {
				task.task = editTask;
			}
		})
		setTasks(newTasks)
	}

  	return (
    <div className="container">
        <div className="task-enter">
				<input type="text" value={input} placeholder='Enter a task' onChange={handleInputChange} />
				<button onClick={createTask}>Create Task</button>
        </div>
		<div className="tasks-container">
			{tasks && <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} ></Tasks>}
		</div>

    </div>

    
  )
}

export default App;
