import React from 'react'
import { ListGroup, InputGroup, FormControl, Button } from 'react-bootstrap';
import SelectTaskItem from './SelectTaskItem'
import { addDoc, collection } from "firebase/firestore";
import db from '../firebase'

class SelectedProjList extends React.Component {
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
      createdAt: new Date(),
      projectName: this.props.project.project
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
    const { tasks } = this.props
    const { handleSubmit, handleChange } = this
    const { taskVal } = this.state

    return (
      <div>
        <ListGroup >
          {tasks ? tasks.map(task => <SelectTaskItem key={task.id} task={task} />) :
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

export default SelectedProjList
