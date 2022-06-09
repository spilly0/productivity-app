import React, { createContext, useState } from 'react'
import { useTasks, useProjects } from '../hooks'

export const TaskContext = createContext()

function TaskContextProvider({ children }) {
  const tasks = useTasks()
  const projects = useProjects(tasks)

  return (
    <TaskContext.Provider
      value={
        {
          tasks: tasks,
          projects: projects
        }
      }>
      {children}
    </TaskContext.Provider >
  )
}

export default TaskContextProvider
