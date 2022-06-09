import React, { useContext } from 'react'
import { TaskContext } from '../context'
import ProjectList from './ProjectList'

const Sidebar = () => {
  const { projects, tasks } = useContext(TaskContext)

  return (
    <div className='Sidebar'>
      <ProjectList projects={projects} tasks={tasks} />
    </div>
  )
}

export default Sidebar
