import React from 'react'
import db from '../firebase'
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import { collection, addDoc } from "firebase/firestore";
import ProjectItem from './ProjectItem'

class ProjectList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectVal: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    addDoc(collection(db, "projects"), {
      project: this.state.projectVal,
      createdAt: new Date()
    });
    this.setState({
      projectVal: ''
    })
  }

  render() {
    const { projects, tasks } = this.props
    const { handleSubmit, handleChange } = this
    const { projectVal } = this.state
    return (
      <div className="Project-Section">
        <h3>All Projects</h3>
        <ListGroup >
          {projects.length > 1 ? projects.map(project => <ProjectItem key={project.id} project={project} tasks={tasks} />) :
            <ListGroup.Item
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                No Projects
              </div>
            </ListGroup.Item>}
        </ListGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add another task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={projectVal}
            name='projectVal'
            onChange={handleChange}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
            +
          </Button>
        </InputGroup>
        {/* <Button onClick={() => handleClick()}>
        Add extra Project
      </Button> */}
      </div>

    )
  }
}

export default ProjectList
