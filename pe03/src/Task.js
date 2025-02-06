import React from 'react';

function Task({ task, onDelete }) {
  return (
    <li className="task-item">
      {task.text}
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
}

export default Task;