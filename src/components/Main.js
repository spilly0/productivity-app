import React, { useContext } from 'react'
import { TaskContext } from '../context'
import TaskList from './TaskList'


const Main = () => {
  const { tasks, projects } = useContext(TaskContext)

  return (
    <div className="list">
      <TaskList tasks={tasks} projects={projects} />
    </div>
  )
}

export default Main
