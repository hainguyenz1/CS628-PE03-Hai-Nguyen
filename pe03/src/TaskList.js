import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDelete }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default TaskList;