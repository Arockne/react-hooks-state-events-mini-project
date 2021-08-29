import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filterBy, setFilterBy] = useState('All');

  const filteredTasks = tasks.filter(({ category }) => {
    if (filterBy === 'All') {
      return true;
    }
    return filterBy === category;
  })

  function handleDeletion(task) {
    const withoutTask = tasks.filter(({text}) => text !== task)
    setTasks(withoutTask)
  }

  function handleAddedTask(task) {
    setTasks([...tasks, task])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} currentFilter={filterBy} onCategoryChange={setFilterBy}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAddedTask}/>
      <TaskList tasks={filteredTasks} onDeletion={handleDeletion}/>
    </div>
  );
}

export default App;
