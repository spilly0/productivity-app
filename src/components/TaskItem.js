import React from 'react'
import db from '../firebase'
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ListGroup, Button, FloatingLabel, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

class TaskItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      task: props.task.id,
      project: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(task) {
    deleteDoc(doc(db, 'tasks', this.state.task))
  }

  handleChange(e) {
    this.setState({
      project: e.target.value
    })


  }

  handleSubmit() {
    if (this.state.project === '') {
      return null
    } else {
      const ref = doc(db, 'tasks', this.state.task)
      updateDoc(ref, {
        projectName: this.state.project
      });
    }
  }


  render() {

    const { task, projects } = this.props
    const { handleClick, handleChange, handleSubmit } = this

    return (
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{task.task}</div>
          {task.projectName}
          <div className="dropdown">
            {task.projectName ? null :
              <FloatingLabel controlId="floatingSelect" onChange={handleChange} name='project' >
                <Form.Select aria-label="Floating label select example" className="selector">
                  <option key={1} value='none' name='project' > </option>
                  {projects.map(project => <option key={project.id} value={project.project} name='project' >{project.project}</option>)}
                </Form.Select>
              </FloatingLabel>}
            {task.projectName ? null : <Button onClick={handleSubmit}>Submit</Button>}
          </div>
        </div>

        <Button onClick={(task) => handleClick()} >
          <FontAwesomeIcon icon={faTrash} />
          <span className="visually-hidden">unread messages</span>
        </Button>
      </ListGroup.Item >
    )
  }
}

export default TaskItem



//   < FloatingLabel controlId = "floatingSelect" label = "Works with selects" >
//     <Form.Select aria-label="Floating label select example">
//       <option>Open this select menu</option>
//       <option value="1">One</option>
//       <option value="2">Two</option>
//       <option value="3">Three</option>
//     </Form.Select>
// </FloatingLabel >
