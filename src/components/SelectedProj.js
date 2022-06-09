import React, { useContext } from 'react'
import { Tabs, Tab } from 'react-bootstrap';
import { TaskContext } from '../context'
import SelectedProjList from './SelectedProjList'

const SelectedProj = () => {
  const { tasks, projects } = useContext(TaskContext)

  return (
    < div className="selected-project" >
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        {projects.length ? projects.map(project => <Tab eventKey={project.project} title={project.project} key={project.id}>
          <SelectedProjList tasks={tasks.filter(task => task.projectName === project.project)} project={project} />
        </Tab>) : null}
      </Tabs>
    </div >
  )
}

export default SelectedProj


