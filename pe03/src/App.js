import React, { useState } from 'react';
import './App.css'; // Import CSS file
import TaskList from './TaskList';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') { // Prevent adding empty tasks
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask(''); // Clear the input field
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1>ToDo List App</h1>
      <div className="input-area">
        <input 
          type="text" 
          value={task} 
          onChange={handleInputChange} 
          placeholder="Enter task description"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;