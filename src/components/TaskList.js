import React, { setState } from 'react'
import { InputGroup, FormControl, Button, ListGroup, Badge } from 'react-bootstrap';
import { addDoc, collection } from "firebase/firestore";
import TaskItem from './TaskItem';
import db from '../firebase'

class TaskList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskVal: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()

    addDoc(collection(db, "tasks"), {
      task: this.state.taskVal,
      createdAt: new Date()
    });
    this.setState({
      taskVal: ''
    })
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const { tasks, projects } = this.props
    const { taskVal } = this.state
    const { handleChange, handleSubmit } = this
    return (
      <div>
        <h3>All Tasks</h3>
        <ListGroup >
          {tasks ? tasks.map(task => <TaskItem key={task.id} task={task} projects={projects} />) :
            <ListGroup.Item
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                No Tasks
              </div>
            </ListGroup.Item>}
        </ListGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add another task"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={taskVal}
            name='taskVal'
            onChange={handleChange}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
            +
          </Button>
        </InputGroup>
      </div>
    )
  }
}

export default TaskList


  // < InputGroup className = "mb-3" >
  //   <FormControl
  //     placeholder="Recipient's username"
  //     aria-label="Recipient's username"
  //     aria-describedby="basic-addon2"
  //   />
  //   <Button variant="outline-secondary" id="button-addon2">
  //     Button
  //   </Button>
  // </InputGroup >
