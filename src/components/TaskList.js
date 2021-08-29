import React from "react";
import Task from './Task'

function TaskList({ tasks, onDeletion }) {
  return (
    <div className="tasks">
      {tasks.map(({ text, category }) => <Task key={text} text={text} category={category} onDeletion={onDeletion}/>)}
    </div>
  );
}

export default TaskList;
